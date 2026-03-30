import { internal } from "./_generated/api";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// ✅ Store or update user
export const store = mutation({
    args: {},
    handler: async(ctx) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("User not authenticated");
        }

        // 🔥 Use clerkId (stable)
        const clerkId = identity.subject;

        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", clerkId))
            .unique();

        if (user) {
            // Update if needed
            const updates = {};

            if (user.name !== identity.name) {
                updates.name = identity.name ?? "Anonymous";
            }

            if (user.email !== identity.email) {
                updates.email = identity.email ?? "";
            }

            if (user.imageUrl !== identity.pictureUrl) {
                updates.imageUrl = identity.pictureUrl;
            }

            if (Object.keys(updates).length > 0) {
                updates.updatedAt = Date.now();
                await ctx.db.patch(user._id, updates);
            }

            return user._id;
        }

        // ✅ Create new user
        return await ctx.db.insert("users", {
            clerkId,
            email: identity.email ?? "",
            name: identity.name ?? "Anonymous",
            imageUrl: identity.pictureUrl,
            hasCompletedOnboarding: false,
            freeEventsCreated: 0,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        });
    },
});

// ✅ Get current user
export const getCurrentUser = query({
    handler: async(ctx) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            return null;
        }

        const clerkId = identity.subject;

        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", clerkId))
            .unique();

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    },
});

// ✅ Complete onboarding
export const completeOnboarding = mutation({
    args: {
        location: v.object({
            city: v.string(),
            state: v.optional(v.string()),
            country: v.string(),
        }),
        interests: v.array(v.string()),
    },
    handler: async(ctx, args) => {
        const user = await ctx.runQuery(internal.users.getCurrentUser);

        await ctx.db.patch(user._id, {
            location: args.location,
            interests: args.interests,
            hasCompletedOnboarding: true,
            updatedAt: Date.now(),
        });

        return user._id;
    },
}); 