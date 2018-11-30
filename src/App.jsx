import React from "react";
import {createStore} from "redux";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
    }
    
    componentDidMount() {
    }

	render() {
		return (
			<React.Fragment>
                <h1>Hey!</h1>
			</React.Fragment>
		);
	}
}

export default App;
