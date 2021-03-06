'use strict';

import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button.js';
import Hello from './components/Hello/Hello.js';
import Leaderboard from './components/Leaderboard/Leaderboard.js'
import Hours from './components/Hours/hours.js'

class HelloWorld extends Component {
	render() {
		return (
			<div>
			<Hello />
			<h1>222Hello333 world</h1>
			<Button/>
			 <Leaderboard/>
			 <Hours/>
			</div>
		)
	}
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));