import React from "react";
import "./../styles/services.css";
import "bootstrap/dist/css/bootstrap.css";

function Services() {
	return (
		<div>
			<div className="fondo">
				<div>
					<h5>SERVICES</h5>
					<h1>Provide Exclusive Services</h1>
					<div className="contenedor">
						<div className="row">
							<div className="card1 w-[25rem]">
								<i className="fa-solid fa-location-crosshairs" />
								<div className="card-body">
									<h5 className="card1-title">Marketing Strategy</h5>
									<p className="card1-text">
										Porem asum molor sit amet, consectetur adipiscing do miusmod
										tempor.
									</p>
								</div>
							</div>
							<div className="card1 w-[25rem]">
								<i className="fa-solid fa-pen-to-square" />
								<div className="card1-body">
									<h5 className="card1-title">Interior Design</h5>
									<p className="card1-text">
										Porem asum molor sit amet, consectetur adipiscing do miusmod
										tempor.
									</p>
								</div>
							</div>
							<div className="card1 w-[25rem]">
								<i className="fa-solid fa-person-breastfeeding" />
								<div className="card1-body">
									<h5 className="card1-title">Digital Services</h5>
									<p className="card1-text">
										Porem asum molor sit amet, consectetur adipiscing do miusmod
										tempor.
									</p>
								</div>
							</div>
							<div className="card1 w-[25rem]">
								<i className="fa-solid fa-hand-holding-dollar" />
								<div className="card1-body">
									<h5 className="card1-title">Product Selling</h5>
									<p className="card1-text">
										Porem asum molor sit amet, consectetur adipiscing do miusmod
										tempor.
									</p>
								</div>
							</div>
							<div className="card1 w-[25rem]">
								<i className="fa-solid fa-scale-unbalanced" />
								<div className="card1-body">
									<h5 className="card1-title">Product Design </h5>
									<p className="card1-text">
										Porem asum molor sit amet, consectetur adipiscing do miusmod
										tempor.
									</p>
								</div>
							</div>
							<div className="card1 w-[25rem]">
								<i className="fa-solid fa-person-dress-burst" />
								<div className="card1-body">
									<h5 className="card1-title">Social Marketing</h5>
									<p className="card1-text">
										Porem asum molor sit amet, consectetur adipiscing do miusmod
										tempor.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="contenedor justify-content-center align-items-center">
					<div className="row">
						<div className="tabla1">
							<table>
								<tbody>
									<tr>
										<th>
											<div>
												<p className="text-blue-500">TEAM MEMBER</p>
												<h3>Our Awesome Creative</h3>
												<h3>Team Member</h3>
											</div>
										</th>
										<th>
											<div className="boton">
												<button
													type="button"
													className="btn btn-primary btn-lg"
												>
													View All Member
												</button>
											</div>
										</th>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="col-md-3 col-sm-12">
							<div className="card w-[15rem]">
								<img src="img/img2.jpg" className="card-img-top" alt="" />
								<div className="card-body">
									<h5 className="card-title">David Malaan</h5>
									<p className="card-text">CEO</p>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-sm-12">
							<div className="card w-[15rem]">
								<img src="img/img3.jpg" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Andres Jhohne</h5>
									<p className="card-text">DIRECTOR</p>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-sm-12">
							<div className="card w-[15rem] ">
								<img src="img/img4.jpg" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Michel Balak</h5>
									<p className="card-text">FOUNDER</p>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-sm-12">
							<div className="card  w-[15rem]">
								<img src="img/img5.jpg" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Jemez Rodriguez</h5>
									<p className="card-text">MANAGER</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
