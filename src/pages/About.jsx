import React from "react";
import aboutImage from "./../assets/about-img.png";
import warrantyIcon from "./../assets/warranty-management.png";
import qualityIcon from "./../assets/quality-control-management.png";
import abourCircle from "./../assets/about-circle.png";

function About() {
	return (
		<section
			id="about"
			className="lg:flex lg:gap-5  relative lg:bottom-64 mx-10"
		>
			<img src={aboutImage} className="h-2/3" alt="about" />

			<div className="">
				<h4 className="text-blue-600 tracking-widest py-3 font-Poppins text-xl text-center lg:text-left font-semibold">
					30 YEARS OF EXPERIENCE
				</h4>
				<h2 className="text-2xl  pb-2 lg:text-5xl font-bold">
					Preparing For Your Success
				</h2>

				<h2 className="text-2xl lg:text-5xl font-bold">
					Provide Best <span className="text-[#0C5ADB]">IT Solutions.</span>
				</h2>
				<br />
				<span className=" px-10 rounded-full bg-blue-600 lg:w-1/3" />
				<br />
				<p className="py-5 text-[16px] font-Poppins tracking-wider">
					We are privileged to work with hundred future-thinking awesome
					businesses including many of the world’s top hardware and get IT
					service for your technology.
				</p>
				<div className=" lg:flex gap-7 items-center  font-Poppins tracking-wider">
					<div>
						<img src={warrantyIcon} width={50} alt="icon" />
					</div>
					<div>
						<h3 className="font-semibold pb-3 pt-7">Warranty Management</h3>
						<h5>
							Morem Ipsum is simply dummy text of the printing and presetting
							found it agency business.
						</h5>
					</div>
				</div>
				<div className="py-10 lg:flex gap-7 items-center font-Poppins tracking-wider">
					<div>
						<img src={qualityIcon} width={50} alt="icon" />
					</div>
					<div>
						<h3 className="font-semibold pb-3 pt-7">Quality Control System</h3>
						<h5>
							Morem Ipsum is simply dummy text of the printing and presetting
							found it agency business.
						</h5>
					</div>
				</div>
				<button
					className="ml-3 py-3 bg-[#0C5ADB] hover:bg-blue-900 duration-300 px-7 rounded text-[18px] text-white"
					onClick={() => alert("Read More")}
				>
					Read More
				</button>
			</div>
		</section>
	);
}

export default About;
