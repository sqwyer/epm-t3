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
							role: "OWNER"
						},
					],
				}
			},
		});

		const user = await ctx.prisma.user.findFirst({
			where: {
				id: ctx.session.user.id as string,
			},
			select: {
				projects: true,
				id: true,
			},
		});

		if (user?.projects) {
			await ctx.prisma.user.update({
				where: { id: user.id },
				data: {
					projects: [Project.id, ...user.projects]
				},
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
