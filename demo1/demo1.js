var App = React.createClass({
	render: function() {
		return (
			<PaymentForm/>
		)
	}
});


var PaymentForm = React.createClass({
	getInitialState: function() {
		return ({
			price: 320.00,
			duration: 5
		});
	},


	handleChange: function(e) {
		console.log(e.target.value);
		this.setState({
			duration: e.target.value
		})
	},

	render: function() {
		return (
			<div className="PaymentForm">
				<form>
					<div className="Title">hrer are title</div>
					<BasicInput name='name' label='name on credit cart' type='text' placeholder='hahhah'></BasicInput>
					<BasicInput name='card' label='name on credit number' type='number' placeholder='0000 0000 0000 0000'></BasicInput>
					<ExpiryDate/>
					<CheckoutButton/>
				</form>

				<Header  onChange={this.handleChange}/>
				<TableContainer duration={this.state.duration} price={this.state.price}/>
 

			</div>
		)
	}
});

var Header = React.createClass({

	render: function() {
		return (
			<header>
				<input onChange={this.props.onChange} type="range" max="100" min="1" step="1" />
			</header>
		);
	}
});

var BasicInput = React.createClass({
	render: function() {
		return (
			<div className="BasicInput">
				<label htmlFor="{this.props.name}">{this.props.label}</label>
				<input id={this.props.name} type={this.props.type} placeholder={this.props.placeholder}/>
			</div>
		)
	}
});

var ExpiryDate = React.createClass({
	render: function() {
		return (
			<div className="ExpiryDate">
				<div>
					<label htmlFor="">Expires</label>
					<div className="Expiry">
						<select name="" id="">
							<option value="">January</option>
							<option value="">February</option>
							<option value="">March</option>
							<option value="">April</option>
							<option value="">May</option>
							<option value="">June</option>
							<option value="">July</option>
							<option value="">August</option>
							<option value="">September</option>
							<option value="">October</option>
							<option value="">November</option>
							<option value="">December</option>
						</select>
						<select name="" id="">
							<option value="">2016</option>
							<option value="">2017</option>
							<option value="">2018</option>
							<option value="">2019</option>
							<option value="">2020</option>
							<option value="">2021</option>
						</select>
					</div>
				</div>

				<div className="CVCField">
					<label htmlFor=""></label>
					<input type="number" placeholder='000'/>
				</div>
			</div>
		)
	}
});
var CheckoutButton = React.createClass({
	render: function() {
		return (
			<div className="CheckoutButton">
				<button>Book securely</button>
				<span><i className="fa fa-fw fa-lock"></i> Your credit card information is encrypted</span>
			</div>
		);
	}
});


var TableContainer = React.createClass({
	render: function() {
		return (
			<div className="OrderSummary">
				<table>
				<tbody>
					<tr>
						<td>{this.props.duration}</td>
						<td> GBP{this.props.price}</td>
					</tr>

					</tbody>
				</table>
			</div>
		)
	}
})

ReactDOM.render(
	<App/>,
	document.getElementById("app")
)