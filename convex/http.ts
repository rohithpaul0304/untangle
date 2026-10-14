import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";

const http = httpRouter();
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

http.route({
  path: "/waitlist",
  method: "POST",
  handler: httpAction(async (ctx, req) => {
    let body: { email?: unknown; source?: unknown } = {};
    try {
      body = JSON.parse(await req.text());
    } catch {
      return new Response("bad json", { status: 400, headers: cors });
    }
    const email = typeof body.email === "string" ? body.email.trim() : "";
    if (!email || email.length > 254 || !EMAIL.test(email)) {
      return new Response("bad email", { status: 400, headers: cors });
    }
    const source = typeof body.source === "string" ? body.source.slice(0, 40) : undefined;
    const r = await ctx.runMutation(internal.waitlist.join, { email, source });
    return new Response(JSON.stringify(r), {
      status: 200,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }),
});

http.route({
  path: "/waitlist",
  method: "OPTIONS",
  handler: httpAction(async () => new Response(null, { status: 204, headers: cors })),
});

export default http;
