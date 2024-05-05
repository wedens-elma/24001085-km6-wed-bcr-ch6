import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import carImage from "./images/img_car.png"; // Pastikan path gambar sesuai dengan struktur proyek Anda

const HeroSection = () => {
	return (
		<Container className="py-4">
			<Row>
				<Col md={6} className="p-4 my-auto">
					<h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
					<p>
						Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
						terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
						untuk sewa mobil selama 24 jam.
					</p>
					<Button variant="success">Mulai Sewa Mobil</Button>
				</Col>
				<Col md={6}>
					<img src={carImage} alt="Car" className="img-fluid" />
				</Col>
			</Row>
		</Container>
	);
};

export default HeroSection;
