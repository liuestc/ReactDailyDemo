'use strict';

import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button.js';

class HelloWorld extends Component {
	render() {
		return (
			<div>
			<h1>Hello world</h1>
			<Button/>
			</div>
		)
	}
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));