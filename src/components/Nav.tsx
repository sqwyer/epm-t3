// https://tailwindui.com/components/preview

import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
	BookmarkAltIcon,
	MenuIcon,
	SupportIcon,
	ViewGridIcon,
	XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Spinner from "./Spinner";

const solutions = [
	{
		name: "EV Project Manager",
		description:
			"Develop and collaborate on EAST projects more effectively.",
		href: "#",
		icon: ViewGridIcon,
	},
	{
		name: "EV Safari",
		description:
			"Discover and share projects that are open for public collaboration.",
		href: "#",
		icon: GlobeAltIcon,
	},
];

const resources = [
	{
		name: "Help Center",
		description:
			"Get all of your questions answered in our forums or contact support.",
		href: "#",
		icon: SupportIcon,
	},
	{
		name: "Guides",
		description:
			"Learn how to maximize our platform to get the most out of it.",
		href: "#",
		icon: BookmarkAltIcon,
	},
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function Nav({
	session,
	dashboard,
	status,
}: {
	session: Session | null;
	dashboard?: boolean;
	status: "authenticated" | "loading" | "unauthenticated";
}) {
	return (
		<Popover className="bg-white sticky top-0 z-50">
			<div>
				<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<Link
							href={
								dashboard && dashboard == true
									? "/dashboard"
									: "/"
							}
						>
							<div className="flex flex-col">
								<span className="font-bold text-blue-600 text-lg cursor-pointer">
									Eastverse
								</span>
							</div>
						</Link>
					</div>
					{dashboard && dashboard == true ? (
						<div className="flex flex-row gap-6">
							{/* <div className="flex flex-row gap-6">
								<Link href="/dashboard">
									<span className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
										Dashboard
									</span>
								</Link>
							</div> */}
							<div className="-mr-2 -my-2 md:hidden">
								<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
									<span className="sr-only">Open menu</span>
									<MenuIcon
										className="h-6 w-6"
										aria-hidden="true"
									/>
								</Popover.Button>
							</div>
						</div>
					) : (
						<div>
							<div className="-mr-2 -my-2 md:hidden">
								<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
									<span className="sr-only">Open menu</span>
									<MenuIcon
										className="h-6 w-6"
										aria-hidden="true"
									/>
								</Popover.Button>
							</div>
							<Popover.Group
								as="nav"
								className="hidden md:flex space-x-10"
							>
								<Popover className="relative">
									{({ open }) => (
										<>
											<Popover.Button
												className={classNames(
													open
														? "text-gray-900"
														: "text-gray-500",
													"group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
												)}
											>
												<span>Solutions</span>
												<ChevronDownIcon
													className={classNames(
														open
															? "text-gray-600"
															: "text-gray-400",
														"ml-2 h-5 w-5 group-hover:text-gray-500"
													)}
													aria-hidden="true"
												/>
											</Popover.Button>

											<Transition
												as={Fragment}
												enter="transition ease-out duration-200"
												enterFrom="opacity-0 translate-y-1"
												enterTo="opacity-100 translate-y-0"
												leave="transition ease-in duration-150"
												leaveFrom="opacity-100 translate-y-0"
												leaveTo="opacity-0 translate-y-1"
											>
												<Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
													<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
														<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
															{solutions.map(
																(item) => (
																	<Link
																		href={
																			item.href
																		}
																		key={
																			item.name
																		}
																	>
																		<div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer">
																			<item.icon
																				className="flex-shrink-0 h-6 w-6 text-blue-600"
																				aria-hidden="true"
																			/>
																			<div className="ml-4">
																				<p className="text-base font-medium text-gray-900">
																					{
																						item.name
																					}
																				</p>
																				<p className="mt-1 text-sm text-gray-500">
																					{
																						item.description
																					}
																				</p>
																			</div>
																		</div>
																	</Link>
																)
															)}
														</div>
													</div>
												</Popover.Panel>
											</Transition>
										</>
									)}
								</Popover>

								<Link href="#">
									<span className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
										Docs
									</span>
								</Link>

								<Popover className="relative">
									{({ open }) => (
										<>
											<Popover.Button
												className={classNames(
													open
														? "text-gray-900"
														: "text-gray-500",
													"group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
												)}
											>
												<span>More</span>
												<ChevronDownIcon
													className={classNames(
														open
															? "text-gray-600"
															: "text-gray-400",
														"ml-2 h-5 w-5 group-hover:text-gray-500"
													)}
													aria-hidden="true"
												/>
											</Popover.Button>

											<Transition
												as={Fragment}
												enter="transition ease-out duration-200"
												enterFrom="opacity-0 translate-y-1"
												enterTo="opacity-100 translate-y-0"
												leave="transition ease-in duration-150"
												leaveFrom="opacity-100 translate-y-0"
												leaveTo="opacity-0 translate-y-1"
											>
												<Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
													<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
														<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
															{resources.map(
																(item) => (
																	<Link
																		href={
																			item.href
																		}
																		key={
																			item.name
																		}
																	>
																		<div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer">
																			<item.icon
																				className="flex-shrink-0 h-6 w-6 text-blue-600"
																				aria-hidden="true"
																			/>
																			<div className="ml-4">
																				<p className="text-base font-medium text-gray-900">
																					{
																						item.name
																					}
																				</p>
																				<p className="mt-1 text-sm text-gray-500">
																					{
																						item.description
																					}
																				</p>
																			</div>
																		</div>
																	</Link>
																)
															)}
														</div>
													</div>
												</Popover.Panel>
											</Transition>
										</>
									)}
								</Popover>
							</Popover.Group>
						</div>
					)}

					<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						{(() => {
							if (status == "loading") return <Spinner />;
							else if (status == "unauthenticated")
								return (
									<div>
										<Link href="#">
											<span className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
												Learn More
											</span>
										</Link>
										<Link href="#">
											<span
												className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
												onClick={
													session?.user
														? undefined
														: () =>
																signIn(
																	"google",
																	{
																		callbackUrl: `${window.location.origin}/dashboard`,
																	}
																)
												}
											>
												Sign in
											</span>
										</Link>
									</div>
								);
							else
								return (
									<div className="flex flex-row gap-6">
										<div className="text-xl font-bold text-gray-500 hover:text-gray-900 cursor-pointer">
											{/* aria-hidden="true" */}

											<Link href="/dashboard/new">+</Link>
										</div>
										<div className="text-xl font-bold text-gray-500 hover:text-gray-900 cursor-pointer">
											{/* aria-hidden="true" */}
											<Link href="/dashboard/new">
												<GlobeAltIcon
													className={classNames(
														"text-xl font-bold text-gray-500 hover:text-gray-900 cursor-pointer"
													)}
													aria-hidden="true"
												/>
											</Link>
										</div>
										<Menu as="div">
											<Menu.Button className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-30">
												<span className="sr-only">
													Open user menu
												</span>
												<div className="w-8 h-8 rounded-full overflow-hidden">
													<Image
														height={32}
														width={32}
														src={
															session?.user
																?.image as string
														}
														alt="User photo"
													/>
												</div>
											</Menu.Button>
											<Transition
												as={Fragment}
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
													<div className="py-1">
														<Menu.Item>
															{() => {
																return (
																	<div className="py-3 px-4">
																		<span className="block text-sm text-gray-900">
																			{
																				session
																					?.user
																					?.name
																			}
																		</span>
																		<span className="block text-sm font-medium text-gray-500 truncate">
																			{
																				session
																					?.user
																					?.email
																			}
																		</span>
																	</div>
																);
															}}
														</Menu.Item>
													</div>
													<div className="py-1 divide-gray-100 divide-y">
														<Menu.Item>
															{({ active }) => (
																<Link href="/dashboard">
																	<span
																		className={classNames(
																			active
																				? "bg-gray-100 text-gray-900"
																				: "text-gray-700",
																			"block px-4 py-2 text-sm cursor-pointer"
																		)}
																	>
																		Dashboard
																	</span>
																</Link>
															)}
														</Menu.Item>
														<Menu.Item>
															{({ active }) => (
																<Link
																	href="#"
																	// onClick={() =>
																	// 	signOut()
																	// }
																>
																	<span
																		onClick={() =>
																			signOut()
																		}
																		className={classNames(
																			active
																				? "bg-gray-100 text-gray-900"
																				: "text-gray-700",
																			"block px-4 py-2 text-sm cursor-pointer"
																		)}
																	>
																		Sign out
																	</span>
																</Link>
															)}
														</Menu.Item>
													</div>
												</Menu.Items>
											</Transition>
										</Menu>
									</div>
								);
						})()}
					</div>
				</div>
			</div>

			<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel
					focus
					className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
				>
					<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
						<div className="pt-5 pb-6 px-5">
							<div className="flex items-center justify-between">
								<div className="-mr-2">
									<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
										<span className="sr-only">
											Close menu
										</span>
										<XIcon
											className="h-6 w-6"
											aria-hidden="true"
										/>
									</Popover.Button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid gap-y-8">
									{solutions.map((item) => (
										<Link key={item.name} href={item.href}>
											<div className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 cursor-pointer">
												<item.icon
													className="flex-shrink-0 h-6 w-6 text-blue-600"
													aria-hidden="true"
												/>
												<span className="ml-3 text-base font-medium text-gray-900">
													{item.name}
												</span>
											</div>
										</Link>
									))}
								</nav>
							</div>
						</div>
						<div className="py-6 px-5 space-y-6">
							<div className="grid grid-cols-2 gap-y-4 gap-x-8">
								<Link href="#">
									<span className="text-base font-medium text-gray-900 hover:text-gray-700 cursor-pointer">
										Docs
									</span>
								</Link>
								{resources.map((item) => (
									<Link key={item.name} href={item.href}>
										<span className="text-base font-medium text-gray-900 hover:text-gray-700 cursor-pointer">
											{item.name}
										</span>
									</Link>
								))}
							</div>
							<div>
								{session?.user ? (
									<Link href="/dashboard">
										<span className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 cursor-pointer">
											Dashboard
										</span>
									</Link>
								) : (
									<Link href="#">
										<span
											className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
											onClick={() =>
												signIn("google", {
													callbackUrl: `${window.location.origin}/dashboard`,
												})
											}
										>
											Sign in
										</span>
									</Link>
								)}
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}
