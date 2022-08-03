import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession as getServerSession } from "next-auth";
import { authOptions as nextAuthOptions } from "./auth/[...nextauth]";

const project = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await getServerSession(req, res, nextAuthOptions);

	if (session) {
		res.send({
			status: "success",
		});
	} else {
		res.send({
			status: "error",
			error: {
				code: 401,
				description: "UNAUTHORIZED",
			},
		});
	}
};

export default project;
