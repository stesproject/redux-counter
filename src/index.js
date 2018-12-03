import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Counter from "Counter";
import {reducer} from "Reducer";

const store = createStore(reducer);

const App = () => (
	<Provider store={store}>
		<Counter />
	</Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
