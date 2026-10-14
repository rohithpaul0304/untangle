import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // App waitlist from the website. Email only, by design.
  waitlist: defineTable({
    email: v.string(),
    source: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_email", ["email"]),
});
