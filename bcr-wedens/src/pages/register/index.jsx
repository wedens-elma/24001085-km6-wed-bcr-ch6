import RegisterComponent from "../../components/Register";
import { NavbarComponent } from "../../components/NavbarComponent"; // Import NavbarComponent
import { Footer } from "../../components/Footer"; // Import Footer
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Register = () => {
	return (
		<>
			<NavbarComponent /> {/* Tambahkan NavbarComponent */}
			<Row>
				<Col md={6} className="offset-md-3">
					<Card>
						<Card.Header>Register</Card.Header>
						<Card.Body>
							<RegisterComponent />
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Footer /> {/* Tambahkan Footer */}
		</>
	);
};

export default Register;
