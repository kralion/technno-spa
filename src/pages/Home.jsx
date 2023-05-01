import React from "react";
import itServicesIcon from "./../assets/it-services.png";
import itSercurityIcon from "./../assets/it-solutions.png";
import itConsultancyIcon from "./../assets/it-consultancy.png";
import itEngineeringIcon from "./../assets/it-engineering.png";
import playButtonIcon from "./../assets/play-buttton.png";
import menuIcon from "./../assets/menu-icon.png";
import "animate.css";

function Home() {
	return (
		<section id="home">
			<div className="absloute ">
				<img
					src="https://4kwallpapers.com/images/walls/thumbs_3t/9852.jpg"
					alt="background"
					className="w-full h-screen object-cover"
				/>
				<div className="flex justify-between">
					<div className="lg:ml-24 ml-3 flex flex-col lg:gap-16 gap-7 relative lg:bottom-[450px] bottom-10 text-black">
						<div>
							<h3 className="lg:text-3xl mb-5  font-bold font-Poppins tracking-wider uppercase text-white">
								Total IT Solution
							</h3>
							<h1 className="lg:text-7xl text-2xl   text-white font-bold">
								Best IT solution agency <br />
								for your Business
							</h1>
						</div>

						<div className="flex gap-12">
							<button
								className="lg:py-3 py-1.5 lg:px-12 px-5 text-white rounded bg-[#0C5ADB] hover:bg-[#074ab4] duration-300"
								onClick={() => alert("How IT Works")}
							>
								How IT works
							</button>
							<button
								className="lg:py-3 py-1.5 lg:px-12 px-5 text-white border-[1px] bg-transparent hover:bg-[#0C5ADB] hover:border-[#0C5ADB]  duration-500 border-neutral-200"
								onClick={() => alert("IT Services")}
							>
								IT Services
							</button>
						</div>
					</div>

					<button
						className="relative lg:bottom-96 lg:flex-row flex-col rounded-full bg-white h-16 mr-16 items-center text-center p-6 flex gap-2 justify-center "
						onClick={() => alert("Play")}
					>
						<div class="animate-ping absolute inline-flex rounded-full bg-neutral-200 h-14 w-14  opacity-75" />
						<div class="animate-ping absolute inline-flex rounded-full bg-neutral-200 h-16 w-16  opacity-75" />
						<div class="animate-ping absolute inline-flex rounded-full bg-neutral-200 h-[70px] w-[70px] opacity-75" />
						<div class="animate-ping absolute inline-flex rounded-full bg-neutral-200 h-[80px] w-[80px] opacity-75" />

						<img src={playButtonIcon} width={20} alt="play" />
					</button>
				</div>
			</div>
			<div className=" lg:flex-row flex-col flex lg:gap-5 gap-7 lg:justify-center justify-center relative bottom-[380px] font-Poppins">
				<div
					id="card1"
					className=" animate__animated animate__delay-2s animate__repeat-3 animate__flipInY bg-white lg:my-5 lg:w-64 w-80 border-[1px] border-neutral-100 shadow-xl rounded-xl text-center flex-col gap-7 flex py-12 justify-center items-center hover:bg-blue-600 duration-200 hover:text-white"
				>
					<img src={itServicesIcon} width={70} alt="icon" />
					<span className="font-semibold text-[18px]">
						Provide All King Of IT <br /> Services
					</span>
				</div>
				<div
					id="card1"
					className=" animate__animated animate__delay-2s animate__repeat-3 animate__flipInY bg-white lg:my-5 lg:w-64 w-80 border-[1px] border-neutral-100 shadow-xl rounded-xl text-center flex-col gap-7 flex py-12 justify-center items-center hover:bg-blue-600 duration-200 hover:text-white"
				>
					<img src={itSercurityIcon} width={70} alt="icon" />
					<span className="font-semibold text-[18px]">
						Solution For All IT <br /> Security
					</span>
				</div>
				<div
					id="card1"
					className=" animate__animated animate__delay-2s animate__repeat-3 animate__flipInY bg-white lg:my-5 lg:w-64 w-80 border-[1px] border-neutral-100 shadow-xl rounded-xl text-center flex-col gap-7 flex py-12 justify-center items-center hover:bg-blue-600 duration-200 hover:text-white"
				>
					<img src={itConsultancyIcon} width={70} alt="icon" />
					<span className="font-semibold text-[18px]">
						All IT Consultancy <br /> Solution
					</span>
				</div>
				<div
					id="card1"
					className="bg-white animate__animated animate__delay-2s animate__repeat-3 animate__flipInY lg:my-5 lg:w-64 w-80 border-[1px] border-neutral-100 shadow-xl rounded-xl text-center flex-col gap-7 flex py-12 justify-center items-center hover:bg-blue-600 duration-200 hover:text-white"
				>
					<img src={itEngineeringIcon} width={70} alt="icon" />
					<span className="font-semibold text-[18px]">
						Best Experience <br /> Engineering
					</span>
				</div>
			</div>
		</section>
	);
}

export default Home;
