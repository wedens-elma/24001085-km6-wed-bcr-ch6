import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SearchForm from "../components/SearchForm";
import CarList from "../components/CarList";
import Alert from "../components/Alert";
import Footer from "../components/Footer";

function Cars() {
	return (
		<div className="mb-0" style={{ backgroundColor: "#f1f3ff" }}>
			<Navbar />
			<div className="container">
				<HeroSection />
				<SearchForm />
			</div>
			<div className="container justify-content-center">
				<CarList />
				<Alert />
			</div>
			<Footer />
		</div>
	);
}

export default Cars;
