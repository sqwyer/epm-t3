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
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

const solutions = [
	{
		name: "EAST Project Manager",
		description:
			"Develop and collaborate on EAST projects more effectively.",
		href: "#",
		icon: ViewGridIcon,
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
}: {
	session: Session | null;
	dashboard?: boolean;
}) {
	return (
		<Popover className="relative bg-white">
			<div>
				<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<a href="/" className="flex flex-col">
							<span className="font-bold text-blue-600 text-lg">
								Eastverse
							</span>
						</a>
					</div>
					<div className="-mr-2 -my-2 md:hidden">
						<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
							<span className="sr-only">Open menu</span>
							<MenuIcon className="h-6 w-6" aria-hidden="true" />
						</Popover.Button>
					</div>
					{dashboard && dashboard == true ? (
						<div className="flex flex-row gap-6">
							<a
								href="/dashboard"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								Dashboard
							</a>
							{/* <a
							href="#"
							className="text-base font-medium text-gray-500 hover:text-gray-900"
						>
							Project Manager
						</a> */}
						</div>
					) : (
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
																<a
																	key={
																		item.name
																	}
																	href={
																		item.href
																	}
																	className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
																>
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
																</a>
															)
														)}
													</div>
												</div>
											</Popover.Panel>
										</Transition>
									</>
								)}
							</Popover>

							<a
								href="#"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								Docs
							</a>

							<Popover className="relative">
								{({ open }) => (
									<>
										<Popover.Button
											className={classNames(
												open
													? "text-gray-900"
													: "text-gray-500",
												"group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-"
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
																<a
																	key={
																		item.name
																	}
																	href={
																		item.href
																	}
																	className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
																>
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
																</a>
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
					)}

					<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						{session?.user ? (
							<Menu as="div">
								<Menu.Button className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
									<span className="sr-only">
										Open user menu
									</span>
									<div className="w-8 h-8 rounded-full overflow-hidden">
										<Image
											height={32}
											width={32}
											src={session?.user?.image as string}
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
															<span className="block text-sm text-gray-900 dark:text-white">
																{
																	session
																		?.user
																		?.name
																}
															</span>
															<span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
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
													<a
														href="/dashboard"
														className={classNames(
															active
																? "bg-gray-100 text-gray-900"
																: "text-gray-700",
															"block px-4 py-2 text-sm"
														)}
													>
														Dashboard
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														onClick={() =>
															signOut()
														}
														className={classNames(
															active
																? "bg-gray-100 text-gray-900"
																: "text-gray-700",
															"block px-4 py-2 text-sm"
														)}
													>
														Sign out
													</a>
												)}
											</Menu.Item>
										</div>
									</Menu.Items>
								</Transition>
							</Menu>
						) : (
							<div>
								<a
									href="#"
									className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
								>
									Learn More
								</a>
								<a
									href="#"
									onClick={
										session?.user
											? undefined
											: () => signIn("google")
									}
									className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
								>
									Sign in
								</a>
							</div>
						)}
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
										<a
											key={item.name}
											href={item.href}
											className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
										>
											<item.icon
												className="flex-shrink-0 h-6 w-6 text-blue-600"
												aria-hidden="true"
											/>
											<span className="ml-3 text-base font-medium text-gray-900">
												{item.name}
											</span>
										</a>
									))}
								</nav>
							</div>
						</div>
						<div className="py-6 px-5 space-y-6">
							<div className="grid grid-cols-2 gap-y-4 gap-x-8">
								<a
									href="#"
									className="text-base font-medium text-gray-900 hover:text-gray-700"
								>
									Docs
								</a>
								{resources.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										{item.name}
									</a>
								))}
							</div>
							<div>
								{session?.user ? (
									<a
										href="/dashboard"
										className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
									>
										Dashboard
									</a>
								) : (
									<a
										href="#"
										onClick={() => signIn("google")}
										className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
									>
										Sign in
									</a>
								)}
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}
