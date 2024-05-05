// CarsSection.jsx
import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CarCard from "./CarCard"; // Import CarCard component
import { Car } from "./Car"; // Import Car class

const CarsSection = () => {
	// Initialize list of cars from Car class
	Car.init([
		// List of cars here, for example:
		// { id: 1, plate: 'AB 1234 CD', manufacture: 'Toyota', model: 'Avanza', image: './images/avanza.jpg', rentPerDay: 250000, capacity: 7, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', transmission: 'Manual', available: true, type: 'MPV', year: 2021, options: [], specs: [], availableAt: '2024-05-01' },
		// { id: 2, plate: 'CD 5678 EF', manufacture: 'Honda', model: 'Brio', image: './images/brio.jpg', rentPerDay: 200000, capacity: 5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', transmission: 'Automatic', available: true, type: 'Hatchback', year: 2020, options: [], specs: [], availableAt: '2024-05-01' },
	]);

	return (
		<section className="cars">
			<Container>
				<Row className="justify-content-center" id="root">
					{Car.list.map((car) => (
						<CarCard key={car.id} car={car} />
					))}
				</Row>
			</Container>
		</section>
	);
};

export default CarsSection;
