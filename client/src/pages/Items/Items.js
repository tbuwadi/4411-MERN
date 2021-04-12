import React, { Component } from 'react';
import DeleteBtn from '../../components/DeleteBtn';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import { List, ListItem } from '../../components/List';
import { Input, FormBtn } from '../../components/Form';
import './Items.css'

class Items extends Component {
	state = {
		items: [],
		item: '',
		quantity: ''
	};


//when component mounts, load all items in the database
	componentDidMount() {
		this.loadItems();
	}
	loadItems = () => {
		API.getItems()
			.then(res => this.setState({ items: res.data, item: '', quantity: '' }))
			.catch(err => console.log(err));
	};

	deleteItem = id => {
		API.deleteItem(id)
			.then(res => this.loadItems())
			.catch(err => console.log(err));
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.item && this.state.quantity) {
			API.saveItem({
				item: this.state.item,
				quantity: this.state.quantity
			})
				.then(res => this.loadItems())
				.catch(err => console.log(err));
		}
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	

//render add item form
	render() {
		return (
			<div className="wrapper">
			<Container fluid>
				<Row>
					<Col size="md-6">
						<Jumbotron>
							<h1 className="title">Add to Shopping List</h1>
						</Jumbotron>
						<form>
							<Input
								value={this.state.item}
								onChange={this.handleInputChange}
								name="item"
								placeholder="item"
								className="inputField"
							/>
							<Input
								value={this.state.quantity}
								onChange={this.handleInputChange}
								name="quantity"
								placeholder="quantity"
								className="inputField"
							/>

							<FormBtn
								disabled={!(this.state.quantity && this.state.item)}
								onClick={this.handleFormSubmit}
								className="buttonSubmit"
							>
								Add to List
							</FormBtn>
						</form>
					</Col>
					<Col size="md-6 sm-12">
						<Jumbotron>
							<h1 className="title">My Shopping List</h1>
						</Jumbotron>
						{this.state.items.length ? (
							<List>
								{this.state.items.map(item => (
									<ListItem key={item._id} className="list">
										
											<strong>
												{item.item} x {item.quantity}
											</strong>
										
										<DeleteBtn onClick={() => this.deleteItem(item._id)} />
									</ListItem>
								))}
							</List>
						) : (
							<h3>No Results to Display</h3>
						)}
					</Col>
				</Row>
			</Container>
			</div>
		);
	}
}

export default Items;
