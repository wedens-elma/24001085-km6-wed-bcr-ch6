import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CarCard = ({ car }) => {
	return (
		<Card className="shadow-sm col-md-4 m-2" style={{ width: "17rem" }}>
			<Card.Img
				variant="top"
				src={car.image}
				alt={`${car.manufacture} ${car.model}`}
				className="img-fluid"
				style={{ height: "200px", objectFit: "cover" }}
			/>
			<Card.Body>
				<Card.Title className="mt-2">
					{car.manufacture} {car.model}
				</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					Rp{" "}
					{car.rentPerDay.toLocaleString("id-ID", { minimumFractionDigits: 0 })}{" "}
					/ hari
				</Card.Subtitle>
				<Card.Text>{car.description}</Card.Text>
				<Card.Text>
					<span>
						<img src="./icons/fi_users.png" alt="" />
					</span>
					{car.capacity} orang
				</Card.Text>
				<Card.Text>
					<span>
						<img src="./icons/fi_settings.png" alt="" />
					</span>
					{car.transmission}
				</Card.Text>
				<Card.Text>
					<span>
						<img src="./icons/fi_calendar.png" alt="" />
					</span>
					Tahun {car.year}
				</Card.Text>
				<Button variant="success" className="mt-auto mb-2">
					Pilih Mobil
				</Button>
			</Card.Body>
		</Card>
	);
};

export default CarCard;
