import React from "react";
import { Row, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BlueCard = () => {
	return (
		<div className="row my-4">
			<Card
				className="px-4 m-3 text-center"
				style={{ backgroundColor: "#0d28a6" }}
			>
				<Card.Body className="p-5">
					<h2 className="card-title" style={{ color: "white" }}>
						Sewa Mobil di (Lokasimu) Sekarang
					</h2>
					<p className="card-text mx-4" style={{ color: "white" }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div className="mt-5">
						<Button
							href="./cars.html"
							type="button"
							className="btn btn-success"
						>
							Mulai Sewa Mobil
						</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default BlueCard;
