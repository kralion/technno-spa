import React from "react";

export default function Contact() {
	return (
		<div className="">
			<div class="formulario">
				<div class="container mt-5">
					<div class="row">
						<h2 class="text-center text-white">GET QUOTE</h2>
						<h1 class="text-center text-white">Make An</h1>
						<h1 class="text-center text-white mb-5">Free Consultant</h1>
						<div class="col-md-6 mx-auto">
							<form>
								<div class="row mb-3">
									<div class="col">
										<input
											type="text"
											class="form-control my-3"
											id="nombre"
											placeholder="Name"
										/>
									</div>
									<div class="col">
										<input
											type="email"
											class="form-control my-3"
											id="email"
											placeholder="Email"
										/>
									</div>
								</div>
								<div class="row mb-3">
									<div class="col">
										<input
											type="tel"
											class="form-control my-3"
											id="telefono"
											placeholder="Phone"
										/>
									</div>
									<div class="col">
										<input
											type="url"
											class="form-control my-3"
											id="website"
											placeholder="Website"
										/>
									</div>
								</div>
								<div class="mb-3">
									<textarea
										class="form-control"
										id="mensaje"
										rows="3"
										placeholder="Your Message"
									/>
								</div>
								<button
									type="submit"
									class="btn btn-outline-light d-block mx-auto btn-lg"
								>
									Your Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>

			<div class="tarjetas">
				<div class="container">
					<div class="row">
						<div class="col-8">
							<h3 class="text-primary mt-5 mb-3">LATEST ARTICLE</h3>
							<h1 class="">See Our Latest</h1>
							<h1 class="mb-5">Blog Posts</h1>
						</div>
						<div class="col-4 text-end">
							<div class="boton1">
								<button class="btn btn-primary btn-lg">See All Blogs</button>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card7">
								<img
									src="images/blog1-390x290.png"
									class="card-img-top"
									alt="..."
								/>
								<div class="card-overlay" />
								<div class="card-headerr">
									<h5 class="card-title text-secondary">Techno</h5>
									<hr />
									<span class="card-subtitle text-secondary">
										April 9, 2023
									</span>
								</div>
								<div class="card-bodyy">
									<h4 class="card-title">
										Business Strategy Plan 2022 From the USA
									</h4>
									<p class="card-text text-secondary">
										Digital Transformation in Healthcare in 2022: Lorem ipsum
										dolor sit amet consectet.
									</p>
								</div>
								<div class="card-footerr">
									<button class="btn btn-outline-light btn-sm fs-5">
										Read more +
									</button>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card7">
								<img
									src="images/blog2-390x290.png"
									class="card-img-top"
									alt="..."
								/>
								<div class="card-overlay" />
								<div class="card-headerr">
									<h5 class="card-title text-secondary">Techno</h5>
									<hr />
									<span class="card-subtitle text-secondary">
										April 9, 2023
									</span>
								</div>
								<div class="card-bodyy">
									<h4 class="card-title">
										The Most 10 Chrome Extention Download Strategy
									</h4>
									<p class="card-text text-secondary">
										Digital Transformation in Healthcare in 2022: Lorem ipsum
										dolor sit amet consectet.
									</p>
								</div>
								<div class="card-footerr">
									<button class="btn btn-outline-light btn-sm fs-5">
										Read more +
									</button>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card7">
								<img
									src="images/blog06-390x290.jpg"
									class="card-img-top"
									alt="..."
								/>
								<div class="card-overlay" />
								<div class="card-headerr">
									<h5 class="card-title text-secondary">Techno</h5>
									<hr />
									<span class="card-subtitle text-secondary">
										April 9, 2023
									</span>
								</div>
								<div class="card-bodyy">
									<h4 class="card-title">
										Tiktok Illegally collecting data sharing
									</h4>
									<p class="card-text text-secondary">
										Digital Transformation in Healthcare in 2022: Lorem ipsum
										dolor sit amet consectet.
									</p>
								</div>
								<div class="card-footerr">
									<button class="btn btn-outline-light btn-sm fs-5">
										Read more +
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
