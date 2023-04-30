import Home from "./pages/Home";
import menuIcon from "./assets/menu-icon.png";
import closeMenuIcon from "./assets/close-menu-icon.png";
import shoppingCartIcon from "./assets/shopping-cart.png";
import searchIcon from "./assets/search.png";

function App() {
	return (
		<div className="App font-Roboto">
			<header className="flex flex-col justify-between lg:flex-row  lg:mx-24 items-center lg:py-7">
				<div className="my-3 ml-24 lg:ml-0">
					<img
						src="https://wp.ditsolution.net/techno/wp-content/uploads/2021/02/main-logo.png"
						alt="main-logo"
						width={170}
					/>
				</div>
				<nav className="bg-[#0C5ADB] py-3  visible lg:invisible flex justify-between px-5 ">
					<span className="text-white tracking-wider font-semibold font-Poppins">
						TECHNO
					</span>
					<button onClick={() => alert("Mobile Menu")}>
						<img src={menuIcon} width={25} alt="menu" />
					</button>
				</nav>

				<nav className="invisible lg:visible font-Poppins ">
					<ul className="flex gap-7 items-center">
						<li className="hover:text-[#0C5ADB]  cursor-pointer duration-150">
							Home
						</li>
						<li className="hover:text-[#0C5ADB] cursor-pointer duration-150">
							Company
						</li>
						<li className="hover:text-[#0C5ADB] cursor-pointer duration-150">
							Services
						</li>
						<li className="hover:text-[#0C5ADB] cursor-pointer duration-150">
							Pages{" "}
						</li>
						<li className="hover:text-[#0C5ADB] cursor-pointer duration-150">
							Elements
						</li>
						<li className="hover:text-[#0C5ADB] cursor-pointer duration-150">
							Blog
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
			</header>

			<Home />
		</div>
	);
}

export default App;
