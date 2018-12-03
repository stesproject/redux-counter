import React from "react";
import {connect} from "react-redux"

class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment() {
		const {dispatch} = this.props;

		dispatch({type: "INCREMENT"});
	}

	decrement() {
		const {dispatch} = this.props;

		dispatch({type: "DECREMENT"});
	}

	render() {
		const {count} = this.props;

		return (
			<React.Fragment>
				<h1>Counter</h1>
				<div>
					<button onClick={this.decrement}>-</button>
					<span>{count}</span>
					<button onClick={this.increment}>+</button>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
  count: state.count,
})
 
export default connect(mapStateToProps)(Counter);
