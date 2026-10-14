import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

// Adds an email once. A repeat sign-up is a quiet success, not a duplicate row.
export const join = internalMutation({
  args: { email: v.string(), source: v.optional(v.string()) },
  handler: async (ctx, { email, source }) => {
    const e = email.trim().toLowerCase();
    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", e))
      .unique();
    if (existing) return { added: false };
    await ctx.db.insert("waitlist", { email: e, source, createdAt: Date.now() });
    return { added: true };
  },
});
