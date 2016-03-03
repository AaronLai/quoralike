'use strict';
var React = require('react'),
	Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

var Trend = React.createClass({
	render: function() {
		return (
			/* jshint ignore: start */

			<div className="ui text container">
				<RouteHandler params={this.props.params}/>

	      <div className="ui items">
	        <div className="item">

	          <div className="content">
	            <div className="meta">

	            </div>
	            <a className="header">Directed to Trend Page!</a>

	            <div className="description">
	              <p />
	            </div>
	            <div className="extra">
	            </div>
	          </div>
	        </div>
	      </div>

	    </div>

			/* jshint ignore: end */
		);
	}

});

module.exports = Trend;
