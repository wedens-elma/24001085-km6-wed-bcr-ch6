import React from "react";
import { Col, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AlertSection = () => {
	return (
		<Col lg={4} className="m-auto mt-5 visually-hidden">
			<Alert variant="warning" className="alert-dismissible fade show">
				<strong>Cars Not Found!</strong> Try other keywords
				<button
					type="button"
					className="btn-close"
					data-bs-dismiss="alert"
					aria-label="Close"
				></button>
			</Alert>
		</Col>
	);
};

export default AlertSection;
