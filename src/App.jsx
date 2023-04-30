import Home from "./pages/Home";

function App() {
	return (
		<div className="App font-Roboto">
			<header className="flex flex-col justify-center lg:justify-between  lg:mx-10">
				<div className="my-3 ml-24 lg:ml-0">
					<img
						src="https://wp.ditsolution.net/techno/wp-content/uploads/2021/02/main-logo.png"
						alt="main-logo"
						width={170}
					/>
				</div>
				<nav className="bg-[#0C5ADB]">
					<div className="py-3 pl-3">
						<span className="text-white tracking-widest font-bold">TECHNO</span>
					</div>
				</nav>

				<nav className="invisible lg:visible flex gap-2 text-red-400">
					<ul>
						<li>Homee</li>
						<li>Company</li>
						<li>Services</li>
						<li>Pages</li>
						<li>Elements</li>
						<li>Blog</li>
						<li>Contact</li>
						<li>
							<img src="" alt="icon1" />
						</li>
						<li>
							<img src="" alt="icon2" />
						</li>
					</ul>
				</nav>
			</header>
			<Home />
		</div>
	);
}

export default App;
