import React from "react";

function Home() {
	return (
		<section id="home">
			<div className="">
				<img
					src="https://wp.ditsolution.net/techno/wp-content/uploads/2020/10/blog4.jpg"
					alt="background"
				/>

				<div className="relative bottom-48">
					<div>
						<h3 className="text-2xl tracking-wider uppercase text-white">
							Total IT Solution
						</h3>
						<h1 className="text-4xl text-white font-bold">
							Best IT solution agency <br />
							for your business
						</h1>
					</div>
					<div className="flex gap-4">
						<button
							className="py-3 px-7 text-white rounded bg-[#0C5ADB] hover:bg-[#074ab4] duration-300"
							onClick={() => alert("How IT Works")}
						>
							How IT works
						</button>
						<button
							className="py-3 px-7 text-white border-[1px] bg-transparent hover:bg-[#0C5ADB] hover:border-[#0C5ADB]  duration-500 border-neutral-200"
							onClick={() => alert("IT Services")}
						>
							IT Services
						</button>
					</div>
				</div>
				<div className="lg:flex-row flex-col flex gap-2 ">
					<button onClick={() => alert("Play")}>Play</button>
				</div>
			</div>
			<div className="lg:flex-row flex-col flex gap-2 ">
				<div
					id="card1"
					className="shadow-lg rounded text-center flex-col flex justify-center items-center hover:bg-blue-600 duration-200 hover:text-white"
				>
					<img src="" alt="icon" />
					<span> Provide All King Of IT Services </span>
					<span id="hover-text">
						Provide All King Of IT Services
						<h5 className="invisible duration-100 hover:visible">
							Whether bringing new and amazing products and on a service to
							market
						</h5>
					</span>
				</div>
				<div id="card2">
					<img src="" alt="icon" />
					<span> Solution For All IT Security </span>
					<span id="hover-text">
						Provide All King Of IT Services
						<h5>
							Whether bringing new and amazing products and on a service to
							market
						</h5>
					</span>
				</div>
				<div id="card3">
					<img src="" alt="icon" />
					<span>All IT Consultancy Solution </span>
					<span id="hover-text">
						Provide All King Of IT Services
						<h5>
							Whether bringing new and amazing products and on a service to
							market
						</h5>
					</span>
				</div>
				<div id="card3">
					<img src="" alt="icon" />
					<span>Best Experience Engineer </span>
					<span id="hover-text">
						Provide All King Of IT Services
						<h5>
							Whether bringing new and amazing products and on a service to
							market
						</h5>
					</span>
				</div>
			</div>
		</section>
	);
}

export default Home;
