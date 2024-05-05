import LoginComponent from "../../components/Login";
import { NavbarComponent } from "../../components/NavbarComponent"; // Import NavbarComponent
import { Footer } from "../../components/Footer"; // Import Footer
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Login = () => {
	return (
		<>
			<NavbarComponent /> {/* Tambahkan NavbarComponent */}
			<Row>
				<Col md={6} className="offset-md-3">
					<Card>
						<Card.Header>Login</Card.Header>
						<Card.Body>
							<LoginComponent />
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Footer /> {/* Tambahkan Footer */}
		</>
	);
};

export default Login;
