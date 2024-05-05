import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WhyUs = () => {
	return (
		<section id="whyus" className="whyus">
			<Container>
				<Row className="p-5">
					<h2>Why Us?</h2>
					<p>Mengapa harus pilih Binar Car Rental?</p>
					<Col md={3} className="p-2">
						<Card className="p-2">
							<Card.Body>
								<img src="./icons/icon_complete.png" alt="" className="mb-4" />
								<Card.Title className="mb-3">Mobil Lengkap</Card.Title>
								<Card.Text>
									Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
									terawat
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3} className="p-2">
						<Card className="p-2">
							<Card.Body>
								<img src="./icons/icon_price.png" alt="" className="mb-4" />
								<Card.Title className="mb-3">Harga Murah</Card.Title>
								<Card.Text>
									Harga murah dan bersaing, bisa bandingkan harga kami dengan
									rental mobil lain
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3} className="p-2">
						<Card className="p-2">
							<Card.Body>
								<img src="./icons/icon_24hrs.png" alt="" className="mb-4" />
								<Card.Title className="mb-3">Layanan 24 Jam</Card.Title>
								<Card.Text>
									Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
									tersedia di akhir minggu
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3} className="p-2">
						<Card className="p-2">
							<Card.Body>
								<img
									src="./icons/icon_professional.png"
									alt=""
									className="mb-4"
								/>
								<Card.Title className="mb-3">Sopir Profesional</Card.Title>
								<Card.Text>
									Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
									tepat waktu
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default WhyUs;
