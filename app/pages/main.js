'use strict';
var React = require('react'),
	Router = require('react-router'),
	Link = Router.Link,
	RouteHandler = Router.RouteHandler;



var Main = React.createClass({
	render: function() {
		return (

			< RouteHandler params = {
				this.props.params
			}
			/>

		);
	}
});
module.exports = Main;
