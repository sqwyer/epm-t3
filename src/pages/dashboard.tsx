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
				<title>Eastverse</title>
				<meta name="title" content="Eastverse - Dashboard" />
				<meta
					name="description"
					content="We're creating solutions that enable students, facilitators, and programs to better collaborate, innovate, and create."
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
