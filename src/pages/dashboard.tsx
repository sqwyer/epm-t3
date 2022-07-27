import type { NextPage } from "next";
import Head from "next/head";
import { getSession, useSession } from "next-auth/react";
import Nav from "../components/Nav";
import { Context } from "../server/router/context";
import { Session } from "next-auth";

function Dashboard({ session }: { session: Session | null }) {
	return (
		<div className="py-6">
			<h1 className="font-bold text-4xl">
				Hello, {session?.user ? session?.user?.name : ""}
			</h1>
		</div>
	);
}

const Page: NextPage = () => {
	const { data: session, status } = useSession();

	return (
		<>
			<Head>
				<title>Eastverse - Dashboard</title>
				<meta name="title" content="EAST Manager" />
				<meta
					name="description"
					content="We're creating solutions that enable students to be more effective in EAST."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<Nav session={session} dashboard={true} />
				<Dashboard session={session} />
			</div>
		</>
	);
};

export default Page;

export async function getServerSideProps(ctx: Context) {
	const session = await getSession({ req: ctx.req });
	if (!session?.user) {
		return {
			redirect: {
				destination: "/",
				permenant: false,
			},
		};
	}
	return { props: {} };
}
