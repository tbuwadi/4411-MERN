import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';

class Detail extends Component {
	state = {
		item: {}
	};

	componentDidMount() {
		API.getItem(this.props.match.params.id)
			.then(res => this.setState({ item: res.data }))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-12">
						<Jumbotron>
							<h1>
								{this.state.item.item} by {this.state.item.quantity}
							</h1>
						</Jumbotron>
					</Col>
				</Row>

				<Row>
					<Col size="md-2">
						<Link to="/">← Back to Shopping List</Link>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Detail;
