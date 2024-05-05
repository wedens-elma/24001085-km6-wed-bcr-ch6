import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
	return (
		<footer className="row mb-4 mt-5">
			<Container>
				<Row>
					<Col lg={3}>
						<div className="d-flex flex-column gap-0 mb-1">
							<p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
							<p>binarcarrental@gmail.com</p>
							<p>081-233-334-808</p>
						</div>
					</Col>

					<Col lg={2}>
						<div className="d-flex flex-column gap-3 mb-4 fw-bold">
							<h6 className="nav-foot">Our Services</h6>
							<h6 className="nav-foot">Why Us</h6>
							<h6 className="nav-foot">Testimonial</h6>
							<h6 className="nav-foot">FAQ</h6>
						</div>
					</Col>

					<Col lg={4}>
						<div className="d-flex flex-column gap-3 mb-4">
							<div>Connect with us</div>
							<div className="d-flex gap-4 gap-lg-3">
								<a href="/">
									<img src="./icons/icon_facebook.png" alt="" />
								</a>
								<a href="/">
									<img src="./icons/icon_instagram.png" alt="" />
								</a>
								<a href="/">
									<img src="./icons/icon_twitter.png" alt="" />
								</a>
								<a href="/">
									<img src="./icons/icon_mail.png" alt="" />
								</a>
								<a href="/">
									<img src="./icons/icon_twitch.png" alt="" />
								</a>
							</div>
						</div>
					</Col>

					<Col lg={3}>
						<div className="d-flex flex-column gap-3 mb-4">
							<div>Copyright Binar 2024</div>
							<a href="#home">
								<img
									src="./icons/binar.png"
									alt=""
									className="logo"
									style={{ width: "5rem" }}
								/>
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
