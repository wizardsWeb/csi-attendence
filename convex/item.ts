import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
export const getItems = query({
  args: {},
  async handler(ctx, args) {
    const res = await ctx.db.query("item").collect();
    return res;
  },
});

export const createItem = mutation({
  args: {
    date: v.string(),
    day: v.string(),
    faculty: v.string(),
    subject: v.string(),
    time: v.string(),
    name: v.string(),
    sap: v.string(),
    reason: v.string(),
    division: v.string(),
    roll: v.string(),
  },
  async handler(ctx, args) {
    const res = await ctx.db.insert("item", {
      date: args.date,
      day: args.day,
      faculty: args.faculty,
      subject: args.subject,
      time: args.time,
      name: args.name,
      sap: args.sap,
      reason: args.reason,
      division: args.division,
      roll: args.roll,
    });

    return res;
  },
});

export const empty = mutation({
  args: {},
  async handler(ctx, args) {
    const data = await ctx.db.query("item").collect();

    for (const item of data) {
      await ctx.db.delete(item._id);
    }
  },
});

export const emptyLastWeek = mutation({
  args: {},
  async handler(ctx, args) {
    const data = await ctx.db.query("item").collect();
    const today = new Date();
    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 7);

    for (const item of data) {
      if (new Date(item.date) < lastWeek) {
        await ctx.db.delete(item._id);
      }
    }
  },
});
export const emptyBeforeDate = mutation({
  args: {
    targetDate: v.string(), // Accept the target date as a string argument
  },
  async handler(ctx, args) {
    const data = await ctx.db.query("item").collect();
    const targetDate = new Date(args.targetDate).getTime(); // Convert the target date to a timestamp

    for (const item of data) {
      if (item._creationTime < targetDate) {
        await ctx.db.delete(item._id);
      }
    }
  },
});