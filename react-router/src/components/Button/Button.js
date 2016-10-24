import React, {
  Component
} from 'react';
import "./Button.css";

class Button extends Component {
  handleClick() {
    alert('戳我干嘛！');
  }
  render() {
    // const style = require('./Button.less');

    return (
      <button className="my-button" onClick={this.handleClick.bind(this)}>
        快戳我
      </button>
    );
  }
}

export default Button;