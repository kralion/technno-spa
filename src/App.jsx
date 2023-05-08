import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
/* import ReactElasticCarousel from "react-elastic-carousel";
import menuIcon from "./assets/menu-icon.png";
import closeMenuIcon from "./assets/close-menu-icon.png"; */
import shoppingCartIcon from "./assets/shopping-cart.png";
import searchIcon from "./assets/search.png";
import plusIcon from "./assets/plus-icon.png";
function App() {
	return (
		<div className="App font-Roboto ">
			<header className="flex sticky shadow-md bg-white top-0 z-50 flex-col justify-between lg:flex-row  lg:px-24 items-center lg:py-7">
				<button className="my-3 lg:ml-0">
					<img
						src="https://wp.ditsolution.net/techno/wp-content/uploads/2021/02/main-logo.png"
						alt="main-logo"
						width={170}
					/>
				</button>

				<nav className="invisible lg:visible font-Poppins ">
					<ul className="flex gap-7 items-center">
						<li className=" cursor-pointer duration-150">
							<div className="flex flex-col gap-2 ">
								<div className="group inline-block">
									<div className="flex items-center">
										<span className="hover:text-[#0C5ADB] cursor-pointer duration-150">
											Home
										</span>
										<span className="pl-2">
											<svg
												className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
											>
												<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
											</svg>
										</span>
									</div>

									<ul className="bg-white hover:shadow-xl mt-11 transform border scale-0 group-hover:scale-100 absolute transition  duration-500 ease-in-out origin-top flex gap-2 px-2">
										<div>
											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												Main Demo
											</li>

											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												Digital Agency (New)
											</li>

											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												IT Solution (New Version)
											</li>
											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												Main Demo
											</li>
										</div>
										<div className="">
											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												Digital Agency (New)
											</li>

											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												IT Solution (New Version)
											</li>
										</div>
									</ul>
								</div>
							</div>
						</li>
						<li className="hover:text-[#0C5ADB] cursor-pointer duration-150">
							Company
						</li>
						<li className=" cursor-pointer duration-150">
							<div className="flex flex-col gap-2 ">
								<div className="group inline-block">
									<div className="flex items-center">
										<span className="hover:text-[#0C5ADB] cursor-pointer duration-150">
											Services
										</span>
										<span className="pl-2">
											<svg
												className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
											>
												<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
											</svg>
										</span>
									</div>

									<ul className="bg-white hover:shadow-xl mt-11 transform border scale-0 group-hover:scale-100 absolute transition  duration-500 ease-in-out origin-top px-2">
										<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
											Main Demo
										</li>

										<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
											Digital Agency (New)
										</li>

										<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
											IT Solution (New Version)
										</li>
										<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
											Main Demo
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li className=" cursor-pointer duration-150">
							<div className="flex flex-col gap-2 ">
								<div className="group inline-block">
									<div className="flex items-center">
										<span className="hover:text-[#0C5ADB] cursor-pointer duration-150">
											Pages
										</span>
										<span className="pl-2">
											<svg
												className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
											>
												<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
											</svg>
										</span>
									</div>

									<ul className="bg-white hover:shadow-xl mt-11 transform border scale-0 group-hover:scale-100 absolute transition  duration-500 ease-in-out origin-top flex gap-2 px-2">
										<div>
											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												Main Demo
											</li>

											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												Digital Agency (New)
											</li>

											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												IT Solution (New Version)
											</li>
											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												Main Demo
											</li>
										</div>
										<div className="">
											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												Digital Agency (New)
											</li>

											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												IT Solution (New Version)
											</li>
										</div>
									</ul>
								</div>
							</div>
						</li>
						<li className=" cursor-pointer duration-150">
							<div className="flex flex-col gap-2 ">
								<div className="group inline-block">
									<div className="flex items-center">
										<span className="hover:text-[#0C5ADB] cursor-pointer duration-150">
											Elements
										</span>
										<span className="pl-2">
											<svg
												className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
											>
												<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
											</svg>
										</span>
									</div>

									<ul className="bg-white hover:shadow-xl mt-11 transform border scale-0 group-hover:scale-100 absolute transition  duration-500 ease-in-out origin-top flex gap-2 px-2">
										<div>
											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												Main Demo
											</li>

											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												Digital Agency (New)
											</li>

											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												IT Solution (New Version)
											</li>
											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												Main Demo
											</li>
										</div>
										<div className="">
											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												Digital Agency (New)
											</li>

											<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
												IT Solution (New Version)
											</li>
										</div>
									</ul>
								</div>
							</div>
						</li>
						<li className=" cursor-pointer duration-150">
							<div className="flex flex-col gap-2 ">
								<div className="group inline-block">
									<div className="flex items-center">
										<span className="hover:text-[#0C5ADB] cursor-pointer duration-150">
											Blog
										</span>
										<span className="pl-2">
											<svg
												className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
											>
												<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
											</svg>
										</span>
									</div>

									<ul className="bg-white hover:shadow-xl mt-11 transform border scale-0 group-hover:scale-100 absolute transition  duration-500 ease-in-out origin-top px-2">
										<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
											Main Demo
										</li>

										<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
											Digital Agency (New)
										</li>

										<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
											IT Solution (New Version)
										</li>
										<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
											Main Demo
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li className="hover:text-[#0C5ADB] cursor-pointer duration-150">
							Contact
						</li>
						<div className="flex gap-3">
							<button
								onClick={() => alert("Clicked")}
								className="bg-[#0C5ADB] p-2  rounded"
							>
								<img src={shoppingCartIcon} width={13} alt="search" />
							</button>
							<button
								onClick={() => alert("Clicked")}
								className="bg-[#0C5ADB]  p-2 rounded"
							>
								<img src={searchIcon} alt="search" width={13} />
							</button>
						</div>
					</ul>
				</nav>
				{/* <nav className="bg-[#0C5ADB] py-5 w-full lg:w-auto visible lg:invisible flex justify-between px-5 ">
					<span className="text-white tracking-wider font-semibold font-Poppins">
						TECHNO
					</span>

					<div className="flex flex-col gap-2 cursor-pointer duration-150">
						<div className="group inline-block">
							<div className="flex items-center">
								<img src={menuIcon} width={25} alt="menu" />
							</div>

							<ul className="bg-white hover:shadow-xl  transform border scale-0 group-hover:scale-100 absolute transition  duration-500 ease-in-out origin-top w-full mt-5 gap-2 px-2 left-0">
								<li className=" cursor-pointer  rounded-md w-full text-left pl-5 py-3 active:bg-[#e6e4e3] duration-200">
									<div className="flex flex-col gap-2 ">
										<div className="group inline-block">
											<div className="flex items-center justify-between pr-7">
												<span className="hover:text-[#0C5ADB] cursor-pointer pt-2 duration-150">
													Home
												</span>
												<img src={plusIcon} width={15} alt="plus" />
											</div>
										</div>
									</div>
								</li>

								<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
									Company
								</li>

								<li className=" cursor-pointer  rounded-md w-full text-left pl-5 py-3 active:bg-[#e6e4e3] duration-200">
									<div className="flex flex-col gap-2 ">
										<div className="group inline-block">
											<div className="flex items-center justify-between pr-7">
												<span className="hover:text-[#0C5ADB] cursor-pointer pt-2 duration-150">
													Services
												</span>
												<img src={plusIcon} width={15} alt="plus" />
											</div>
										</div>
									</div>
								</li>
								<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
									Blog
								</li>

								<li className=" cursor-pointer duration-150rounded-md w-full text-left pl-5 py-3 active:bg-[#e6e4e3] duration-200">
									<div className="flex flex-col gap-2 ">
										<div className="group inline-block">
											<div className="flex items-center justify-between pr-7">
												<span className="hover:text-[#0C5ADB] cursor-pointer pt-2 duration-150">
													Elements
												</span>
												<img src={plusIcon} width={15} alt="plus" />
											</div>
										</div>
									</div>
								</li>
								<li className=" cursor-pointer rounded-md w-full text-left pl-5 py-3 active:bg-[#e6e4e3] duration-200">
									<div className="flex flex-col gap-2 ">
										<div className="group inline-block">
											<div className="flex items-center justify-between pr-7">
												<span className="hover:text-[#0C5ADB] cursor-pointer pt-2 duration-150">
													Main Demo
												</span>
												<img src={plusIcon} width={15} alt="plus" />
											</div>
										</div>
									</div>
								</li>
								<li className=" cursor-pointer rounded-md w-full text-left pl-5 py-3 active:bg-[#e6e4e3] duration-200">
									<div className="flex flex-col gap-2 ">
										<div className="group inline-block">
											<div className="flex items-center justify-between pr-7">
												<span className="hover:text-[#0C5ADB] cursor-pointer pt-2 duration-150">
													Consultancy
												</span>
												<img src={plusIcon} width={15} alt="plus" />
											</div>
										</div>
									</div>
								</li>
								<li className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
									Contact
								</li>
							</ul>
						</div>
					</div>
				</nav> */}
			</header>

			<main className="relative">
				<Home />
				<About />
				<Contact />
				<Blog />
				{/* <CardCarousel /> */}
			</main>
		</div>
	);
}

export default App;
