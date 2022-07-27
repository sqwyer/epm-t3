import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Hero({ session }: any) {
	return (
		<section className="bg-hero-pattern bg-cover">
			<div className="py-8 px-10 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
				<h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-10 text-gray-900 md:text-5xl lg:text-6xl">
					Pushing{" "}
					<span className="underline decoration-blue-600 decoration-4 md:decoration-8">
						collaboration
					</span>{" "}
					in EAST.
				</h1>
				<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
					We&apos;re creating solutions that enable students,
					facilitators, and programs to better collaborate, innovate,
					and create.
				</p>
				<div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
					<Link href={session?.user ? "/dashboard" : "#"}>
						<div
							className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 cursor-pointer"
							onClick={
								session?.user
									? undefined
									: () =>
											signIn("google", {
												callbackUrl: `${window.location.origin}/dashboard`,
											})
							}
						>
							{session?.user ? "Dashboard" : "Sign in"}
							<svg
								className="ml-2 -mr-1 w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</div>
					</Link>
					<Link href="#">
						<span className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 cursor-pointer">
							Learn More
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
