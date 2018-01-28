import React from "react";

class ResetPasswordPage extends React.Component {
	state = {
		loading: true,
		success: false
	};
	componentDidMount;
	render() {
		return (
			<div>
				{loading && <Message>Loading</Message>}
				{!loading && success && <Message>Form</Message>}
				{!loading && !success && <Message>Invalid Token</Message>}
			</div>
		);
	}
}
export default ResetPasswordPage;
