import React from 'react'

function Company() {
  return (
    <section id="company">
				<div>
					<div>
						<img src="" alt="image1" />
						<img src="" alt="image2" />
					</div>
					<div className="">
						<h4>30 YEARS OF EXPERIENCE</h4>
						<h2>
							Preparing For Your Success <br />
							Provide Best <span>IT Solutions.</span>
						</h2>
						<img src="" alt="line-animation" />
						<p>
							We are privileged to work with hundred future-thinking awesome
							businesses including many of the world’s top hardware and get IT
							service for your technology.
						</p>
						<div className="">
							<img src="" alt="icon" />
							<div>
								<h3>Warranty Management</h3>
								<h5>
									Morem Ipsum is simply dummy text of the printing and
									presetting found it agency business.
								</h5>
							</div>
						</div>
						<div className="">
							<img src="" alt="icon" />
							<div>
								<h3>Quality Control System</h3>
								<h5>
									Morem Ipsum is simply dummy text of the printing and
									presetting found it agency business.
								</h5>
							</div>
						</div>
						<button onClick={()=>alert("Read More")}>Read More</button>
					</div>
				</div>
			</section>
  )
}

export default Company