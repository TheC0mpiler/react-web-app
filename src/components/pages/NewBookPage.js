import React from "react";
import { Segment } from "semantic-ui-react";

import SearchBookForm from "../forms/SearchBookForm";

class NewBookPage extends React.Component {
	state = { book: null };

	render() {
		return (
			<div>
				<Segment>
					<h1>Add new book to your collection</h1>
					<SearchBookForm />
				</Segment>
			</div>
		);
	}
}
export default NewBookPage;
