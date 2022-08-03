import { getSession, signIn } from "next-auth/react";
import Head from "next/head";
import { Context } from "../server/router/context";

export default function Signin() {
	return (
		<>
			<Head>
				<title>Create T3 App</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<h1>You are not signed in.</h1>
				<button onClick={() => signIn("google")}>
					Signin with Google
				</button>
			</div>
		</>
	);
}

export async function getServerSideProps(ctx: Context) {
	const session = await getSession({ req: ctx.req });
	if (session?.user) {
		return {
			redirect: {
				destination: "/",
				permenant: false,
			},
		};
	}

	return { props: {} };
}
