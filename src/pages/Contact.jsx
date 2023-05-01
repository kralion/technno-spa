import React from "react";

export default function Contact() {
	return (
		<div className="">
			<div className="formulario">
				<div className="container mt-5">
					<div className="row">
						<h2 className="text-center text-white">GET QUOTE</h2>
						<h1 className="text-center text-white">Make An</h1>
						<h1 className="text-center text-white mb-5">Free Consultant</h1>
						<div className="col-md-6 mx-auto">
							<form>
								<div className="row mb-3">
									<div className="col">
										<input
											type="text"
											className="form-control my-3"
											id="nombre"
											placeholder="Name"
										/>
									</div>
									<div className="col">
										<input
											type="email"
											className="form-control my-3"
											id="email"
											placeholder="Email"
										/>
									</div>
								</div>
								<div className="row mb-3">
									<div className="col">
										<input
											type="tel"
											className="form-control my-3"
											id="telefono"
											placeholder="Phone"
										/>
									</div>
									<div className="col">
										<input
											type="url"
											className="form-control my-3"
											id="website"
											placeholder="Website"
										/>
									</div>
								</div>
								<div className="mb-3">
									<textarea
										className="form-control"
										id="mensaje"
										rows="3"
										placeholder="Your Message"
									/>
								</div>
								<button
									type="submit"
									className="btn btn-outline-light d-block mx-auto btn-lg"
								>
									Your Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>

			<div className="tarjetas">
				<div className="container">
					<div className="row">
						<div className="col-8">
							<h3 className="text-primary mt-5 mb-3">LATEST ARTICLE</h3>
							<h1 className="">See Our Latest</h1>
							<h1 className="mb-5">Blog Posts</h1>
						</div>
						<div className="col-4 text-end">
							<div className="boton1">
								<button className="btn btn-primary btn-lg">
									See All Blogs
								</button>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card7">
								<img
									src="images/blog1-390x290.png"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-overlay" />
								<div className="card-headerr">
									<h5 className="card-title text-secondary">Techno</h5>
									<hr />
									<span className="card-subtitle text-secondary">
										April 9, 2023
									</span>
								</div>
								<div className="card-bodyy">
									<h4 className="card-title">
										Business Strategy Plan 2022 From the USA
									</h4>
									<p className="card-text text-secondary">
										Digital Transformation in Healthcare in 2022: Lorem ipsum
										dolor sit amet consectet.
									</p>
								</div>
								<div className="card-footerr">
									<button className="btn btn-outline-light btn-sm fs-5">
										Read more +
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card7">
								<img
									src="images/blog2-390x290.png"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-overlay" />
								<div className="card-headerr">
									<h5 className="card-title text-secondary">Techno</h5>
									<hr />
									<span className="card-subtitle text-secondary">
										April 9, 2023
									</span>
								</div>
								<div className="card-bodyy">
									<h4 className="card-title">
										The Most 10 Chrome Extention Download Strategy
									</h4>
									<p className="card-text text-secondary">
										Digital Transformation in Healthcare in 2022: Lorem ipsum
										dolor sit amet consectet.
									</p>
								</div>
								<div className="card-footerr">
									<button className="btn btn-outline-light btn-sm fs-5">
										Read more +
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card7">
								<img
									src="images/blog06-390x290.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-overlay" />
								<div className="card-headerr">
									<h5 className="card-title text-secondary">Techno</h5>
									<hr />
									<span className="card-subtitle text-secondary">
										April 9, 2023
									</span>
								</div>
								<div className="card-bodyy">
									<h4 className="card-title">
										Tiktok Illegally collecting data sharing
									</h4>
									<p className="card-text text-secondary">
										Digital Transformation in Healthcare in 2022: Lorem ipsum
										dolor sit amet consectet.
									</p>
								</div>
								<div className="card-footerr">
									<button className="btn btn-outline-light btn-sm fs-5">
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
