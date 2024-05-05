import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const FaqItem = ({ question, answer }) => {
	return (
		<Accordion.Item eventKey={question}>
			<Accordion.Header>
				<Button variant="link" className="accordion-button collapsed">
					{question}
				</Button>
			</Accordion.Header>
			<Accordion.Body>{answer}</Accordion.Body>
		</Accordion.Item>
	);
};

export default FaqItem;
