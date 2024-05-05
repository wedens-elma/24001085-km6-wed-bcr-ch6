import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchSection = () => {
	return (
		<section className="container-fluid jumbotron position-relative">
			<Container>
				<Row className="mt-5">
					<Col md className="d-flex justify-content-center">
						<div className="card">
							<div className="card-body shadow">
								<Form>
									<Row>
										<Col md>
											{/* driverType */}
											<Form.Group controlId="driverType" className="mb-3">
												<Form.Label>Tipe Driver</Form.Label>
												<Form.Select aria-label="Default select example">
													<option>Pilih Tipe Driver</option>
													<option value="true">Dengan Sopir</option>
													<option value="false">
														Tanpa Sopir (Lepas Kunci)
													</option>
												</Form.Select>
											</Form.Group>
										</Col>
										<Col md>
											{/* Date */}
											<Form.Group controlId="tanggal" className="mb-3">
												<Form.Label>Tanggal</Form.Label>
												<Form.Control type="date" required />
											</Form.Group>
										</Col>
										<Col md>
											{/* Time */}
											<Form.Group controlId="wkt_jemput" className="mb-3">
												<Form.Label>Waktu Jemput</Form.Label>
												<Form.Select
													aria-label="Default select example"
													required
												>
													<option disabled selected>
														Pilih Waktu
													</option>
													<option value="08:00:00">08.00 WIB</option>
													<option value="09:00:00">09.00 WIB</option>
													<option value="10:00:00">10.00 WIB</option>
													<option value="11:00:00">11.00 WIB</option>
													<option value="12:00:00">12.00 WIB</option>
												</Form.Select>
											</Form.Group>
										</Col>
										<Col md>
											{/* totalPassanger */}
											<Form.Group controlId="jmlhPenumpang" className="mb-3">
												<Form.Label>Jumlah Penumpang</Form.Label>
												<Form.Control
													type="number"
													placeholder="Jumlah Penumpang"
												/>
											</Form.Group>
										</Col>
										<Col
											md="auto"
											className="text-center"
											style={{ width: "108px", marginTop: "40px" }}
										>
											{/* Search Button */}
											<Button
												variant="success"
												type="submit"
												className="btn-sm button"
											>
												Cari Mobil
											</Button>
										</Col>
									</Row>
								</Form>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default SearchSection;
