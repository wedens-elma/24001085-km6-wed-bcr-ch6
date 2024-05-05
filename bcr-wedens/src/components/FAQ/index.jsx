import React from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FAQ = () => {
	return (
		<section id="faq" className="faq">
			<Container>
				<Row className="p-2 my-2" id="faq">
					<Col md={6}>
						<h3>Frequently Asked Question</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
							libero accusamus voluptas? Possimus, optio beatae. Doloribus nam,
							facere alias eum exercitationem voluptatem veritatis animi illo
							incidunt, assumenda beatae distinctio vero.
						</p>
					</Col>
					<Col md={6} className="p-0 mx-auto justify-content-center">
						<Accordion id="accordion1" className="my-2">
							<FaqItem
								question="Apa saja syarat yang dibutuhkan?"
								answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorum illum iste quasi porro beatae assumenda in cum quod dolor! Optio, repellendus tempore. Corrupti in accusantium ea sed ipsa eos."
							/>
							<FaqItem
								question="Berapa hari minimal sewa mobil lepas kunci?"
								answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorum illum iste quasi porro beatae assumenda in cum quod dolor! Optio, repellendus tempore. Corrupti in accusantium ea sed ipsa eos."
							/>
							<FaqItem
								question="Berapa hari sebelumnya sabaiknya booking sewa mobil?"
								answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorum illum iste quasi porro beatae assumenda in cum quod dolor! Optio, repellendus tempore. Corrupti in accusantium ea sed ipsa eos."
							/>
							<FaqItem
								question="Apakah Ada biaya antar-jemput?"
								answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorum illum iste quasi porro beatae assumenda in cum quod dolor! Optio, repellendus tempore. Corrupti in accusantium ea sed ipsa eos."
							/>
							<FaqItem
								question="Bagaimana jika terjadi kecelakaan?"
								answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorum illum iste quasi porro beatae assumenda in cum quod dolor! Optio, repellendus tempore. Corrupti in accusantium ea sed ipsa eos."
							/>
						</Accordion>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default FAQ;
