import type { NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

const Home: NextPage = ({ auth }: any) => {
	console.log(auth);
	const { data: session, status } = useSession();

	return (
		<>
			<Head>
				<title>Eastverse</title>
				<meta name="title" content="EAST Manager" />
				<meta
					name="description"
					content="We're creating solutions that enable students to be more effective in EAST."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<Nav session={session} />
				<div className="py-6 divide-y-2 divide-gray-100">
					<Hero session={session} />
					{/* <hr className="divide-gray-100"/> */}
					<div></div>
				</div>
			</div>
		</>
	);
};

export default Home;
