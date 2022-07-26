import type { NextPage } from "next";
import Head from "next/head";
// import { trpc } from "../utils/trpc";
import { getSession, useSession } from "next-auth/react";
import { Context } from "../server/router/context";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import { Session } from "next-auth";

const Home: NextPage = ({ auth }: any) => {
	console.log(auth);
	const { data: session, status } = useSession();

	return (
		<>
			<Head>
				<title>East Manager</title>
				<meta name="title" content="EAST Manager" />
				<meta
					name="description"
					content="We're creating solutions that enable students to be more effective in EAST."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				{/* <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"></div> */}
				<Nav session={session} />
				<div className="py-6">
					<Hero session={session} />
					{/* <p>
						{session?.user
							? "Welcome, " + session?.user?.name
							: "Loading..."}
					</p> */}
				</div>
			</div>
		</>
	);
};

export default Home;

export async function getServerSideProps(ctx: Context) {
	const session = await getSession({ req: ctx.req });
	// console.log("from index: ", session);
	// if (!session?.user) {
	// 	return {
	// 		redirect: {
	// 			destination: "/signin",
	// 			permenant: false,
	// 		},
	// 	};
	// }
	console.log("sess: ", session);
	return { props: { auth: session ? true : false } };
}
