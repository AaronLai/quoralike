var React = require('react');
var QuoraRow=require('./QuoraRow.js');



var QuoraList = React.createClass({


  render: function() {
    var rows = [];
    this.props.Quoras.forEach(function(quora) {

      rows.push(<QuoraRow quora={quora} key={quora.title}/>);


    }.bind(this));
    return (
      <div>
        {rows}
      </div>


    );
  }
});


module.exports = QuoraList;
