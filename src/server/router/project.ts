import { z } from "zod";
import * as trpc from "@trpc/server";
import { createProtectedRouter } from "./protected-router";

const projectRouter = createProtectedRouter().query("create", {
	input: z.object({
		name: z.string(),
		desc: z.string(),
	}),
	resolve: async ({ input, ctx }) => {
		const Project = await ctx.prisma.project.create({
			data: {
				name: input.name,
				description: input.desc,
				owner: ctx.session.user.id as string,
				projectMembers: {
					create: [
						{
							userId: ctx.session.user.id as string,
							roleId: {}, // THIS NEEDS TO SOMEHOW BE THE ROLE CREATED's ID??
						},
					], // |
				}, // |
				roles: {
					// V
					create: [
						{
							// THIS ONE
							label: "Manager",
							permissions: ["*"],
						},
					],
				},
			},
		});

		const user = await ctx.prisma.user.findFirst({
			where: {
				id: ctx.session.user.id as string,
			},
			select: {
				projectMembers: true,
				id: true,
			},
		});

		if (user?.projectMembers) {
			await ctx.prisma.user.update({
				where: { id: user.id },
				data: {},
			});

			ctx.res?.json({
				Project,
				user,
			});
		} else {
			throw new trpc.TRPCError({
				code: "INTERNAL_SERVER_ERROR",
				message:
					"An unexpected error occurred, please try again later.",
				cause: "No valid user found",
			});
		}
	},
});

export { projectRouter };
