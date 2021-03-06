'use strict';

import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button.js';
import Hello from './components/Hello/Hello.js';

class HelloWorld extends Component {
	render() {
		return (
			<div>
			<Hello />
			<h1>Hello world</h1>
			<Button/>
			</div>
		)
	}
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));