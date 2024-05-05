import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonial = () => {
	return (
		<section id="testimonial" className="testimonial">
			<Container>
				<Row className="p-5 justify-content-center my-5">
					<h2 className="text-center">Testimonial</h2>
					<p className="text-center">
						Berbagai review positif dari para pelanggan kami
					</p>

					<Carousel id="carouselExample" className="carousel slide p-0">
						<Carousel.Item>
							<div
								className="card p-5 d-flex justify-content-center"
								style={{ backgroundColor: "#f1f3ff" }}
							>
								<div className="row p-2 justify-content-center">
									<div className="col-md-3 text-center my-auto">
										<div className="mb-2 justify-content-end">
											<img
												src="./images/img_photo.png"
												alt=""
												className="align-self-right"
											/>
										</div>
									</div>
									<div className="col-md-9">
										<h5 className="card-title">
											<img src="./icons/Rate.png" alt="" />
										</h5>
										<h6 className="card-subtitle mb-3">
											“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod lorem ipsum dolor sit amet, consectetur
											adipiscing elit, sed do eiusmod lorem ipsum dolor sit
											amet, consectetur adipiscing elit, sed do eiusmod”
										</h6>
										<p className="card-text fw-bold">John Dee 32, Bromo</p>
									</div>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div
								className="card p-5 d-flex justify-content-center"
								style={{ backgroundColor: "#f1f3ff" }}
							>
								<div className="row p-2 justify-content-center">
									<div className="col-md-3 text-center my-auto">
										<div className="mb-2 justify-content-end">
											<img
												src="./images/img_photo.png"
												alt=""
												className="align-self-right"
											/>
										</div>
									</div>
									<div className="col-md-9">
										<h5 className="card-title">
											<img src="./icons/Rate.png" alt="" />
										</h5>
										<h6 className="card-subtitle mb-3">
											“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod lorem ipsum dolor sit amet, consectetur
											adipiscing elit, sed do eiusmod lorem ipsum dolor sit
											amet, consectetur adipiscing elit, sed do eiusmod”
										</h6>
										<p className="card-text fw-bold">Bambang 26, Jogja</p>
									</div>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div
								className="card p-5 d-flex justify-content-center"
								style={{ backgroundColor: "#f1f3ff" }}
							>
								<div className="row p-2 justify-content-center">
									<div className="col-md-3 text-center my-auto">
										<div className="mb-2 justify-content-end">
											<img
												src="./images/img_photo.png"
												alt=""
												className="align-self-right"
											/>
										</div>
									</div>
									<div className="col-md-9">
										<h5 className="card-title">
											<img src="./icons/Rate.png" alt="" />
										</h5>
										<h6 className="card-subtitle mb-3">
											“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod lorem ipsum dolor sit amet, consectetur
											adipiscing elit, sed do eiusmod lorem ipsum dolor sit
											amet, consectetur adipiscing elit, sed do eiusmod”
										</h6>
										<p className="card-text fw-bold">Silvi 24, Bandung</p>
									</div>
								</div>
							</div>
						</Carousel.Item>
					</Carousel>
				</Row>
			</Container>
		</section>
	);
};

export default Testimonial;
