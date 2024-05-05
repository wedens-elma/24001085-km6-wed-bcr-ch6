import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const OurServices = () => {
	return (
		<section id="ourservices" className="ourservices">
			<Container>
				<Row className="p-5 g-5 mt-4">
					<Col md={6}>
						<img
							src="./images/img_service.png"
							className="img-fluid"
							style={{ maxWidth: "100%" }}
							alt="Service Image"
						/>
					</Col>
					<Col md={6} style={{ textAlign: "justify" }}>
						<div className="my-auto">
							<h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
							<p>
								Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
								lebih murah dibandingkan yang lain, kondisi mobil baru, serta
								kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
								wedding, meeting, dll.
							</p>
							<ul>
								<li>
									<span>
										<img src="./icons/check_list.png" alt="" />
									</span>
									Sewa Mobil Dengan Supir di Bali 12 Jam
								</li>
								<li>
									<span>
										<img src="./icons/check_list.png" alt="" />
									</span>
									Sewa Mobil Lepas Kunci di Bali 24 Jam
								</li>
								<li>
									<span>
										<img src="./icons/check_list.png" alt="" />
									</span>
									Sewa Mobil Jangka Panjang Bulanan
								</li>
								<li>
									<span>
										<img src="./icons/check_list.png" alt="" />
									</span>
									Gratis Antar - Jemput Mobil di Bandara
								</li>
								<li>
									<span>
										<img src="./icons/check_list.png" alt="" />
									</span>
									Layanan Airport Transfer / Drop In Out
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default OurServices;
