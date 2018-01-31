import React from "react";
import { Form, Dropdown } from "semantic-ui-react";
import axios from "axios";

class SearchBookForm extends React.Component {
	state = {
		query: "",
		loading: false,
		success: false,
		options: [],
		books: {}
	};
	onSearchChange = (e, data) => {
		clearTimeout(this.timer);
		this.setState({
			query: data
		});
		this.timer = setTimeout(this.fetchOptions, 1000);
	};
	fetchOptions = () => {
		if (!this.state.query) return;
		this.setState({ loading: true });
		axios
			.get(`/api/books/search?q=${this.setState.query}`)
			.then(res => res.data.books);
	};
	render() {
		return (
			<Form>
				<Dropdown
					search
					fluid
					placeholder="Search for a book"
					value={this.state.query}
					onSearchChange={this.onSearchChange}
					options={this.state.options}
					loading={this.state.loading}
				/>
			</Form>
		);
	}
}
export default SearchBookForm;
