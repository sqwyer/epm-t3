import type { NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Image from "next/image";

import { ChartBarIcon, GlobeAltIcon, ChatIcon } from "@heroicons/react/outline";

import teamup from "../../public/team_up.svg";
import productive from "../../public/productive.svg";
import collab from "../../public/collab.svg";

function Section1() {
	return (
		<div className="flex flex-col md:flex-row gap-32 py-20">
			<div className="flex-1 align-middle flex flex-col justify-center gap-4 bg-hero-pattern bg-no-repeat bg-center">
				<span className="rounded-full bg-blue-300 p-3 w-min text-white font-bold border-blue-100 border-8">
					<ChatIcon className="h-6 w-6" />
				</span>
				<h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl">
					Manage projects at scale
				</h1>
				<p className="text-lg font-normal text-gray-500 lg:text-xl">
					Working alone, in a small team, or with an entire program,
					you can rely on Eastverse to help you manage and collaborate
					on your projects.
				</p>
			</div>
			<div className="flex-1 hidden md:flex">
				<Image className="mx-auto block" src={teamup} />
			</div>
		</div>
	);
}

function Section2() {
	return (
		<div className="flex flex-col md:flex-row gap-32 py-20 border-t-gray-100 border-t-2">
			<div className="flex-1 hidden md:flex">
				<Image className="mx-auto block" src={productive} />
			</div>
			<div className="flex-1 align-middle flex flex-col justify-center gap-4 bg-hero-pattern bg-no-repeat bg-center">
				<span className="rounded-full bg-blue-300 p-3 w-min text-white font-bold border-blue-100 border-8">
					<ChartBarIcon className="h-6 w-6" />
				</span>
				<h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl">
					Increase your productivity
				</h1>
				<p className="text-lg font-normal text-gray-500 lg:text-xl">
					Eastverse empowers users to be more productive by making it
					easier than ever to manage, document, and share projects.
				</p>
			</div>
		</div>
	);
}

function Section3() {
	return (
		<div className="flex flex-col md:flex-row gap-32 py-20 border-t-gray-100 border-t-2">
			<div className="flex-1 align-middle flex flex-col justify-center gap-4 bg-hero-pattern bg-no-repeat bg-center">
				<span className="rounded-full bg-blue-300 p-3 w-min text-white font-bold border-blue-100 border-8">
					<GlobeAltIcon className="h-6 w-6" />
				</span>
				<h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl">
					Work with anyone
				</h1>
				<p className="text-lg font-normal text-gray-500 lg:text-xl">
					Invite others to join your project, or publish your project
					to the Eastverse Safari to allow others to discover it and
					request to help.
				</p>
			</div>
			<div className="flex-1 hidden md:flex">
				<Image className="mx-auto block" src={collab} />
			</div>
		</div>
	);
}

const Home: NextPage = () => {
	const { data: session, status } = useSession();

	return (
		<>
			<Head>
				<title>Eastverse</title>
				<meta name="title" content="Eastverse" />
				<meta
					name="description"
					content="We're creating solutions that enable students, facilitators, and programs to better collaborate, innovate, and create."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<Nav session={session} status={status} />
				<div className="py-6 divide-y-2 divide-gray-100">
					<Hero session={session} status={status} />
					<div className="p-10 flex flex-col">
						<Section1 />
						<Section2 />
						<Section3 />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
