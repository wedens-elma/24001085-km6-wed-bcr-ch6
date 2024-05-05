import React from "react";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import NavbarComponent from "../../components/NavbarComponent";
import OurServices from "../../components/OurServices";
import Testimonial from "../../components/Testimonial";
import WhyUs from "../../components/WhyUs";

function Home() {
	return (
		<>
			<NavbarComponent />
			<div className="mb-0" style={{ backgroundColor: "#f1f3ff" }}>
				{/* Content for Home page */}
				<OurServices />
				<WhyUs />
				<Testimonial />
				<FAQ />
			</div>
			<Footer />
		</>
	);
}

export default Home;
