import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Nav from "../../components/Nav";

const New: NextPage = (props: any) => {
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
				<Nav session={session} status={status} dashboard={true} />
			</div>
		</>
	);
};

export default New;
