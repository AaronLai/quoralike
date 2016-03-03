var React = require('react');
var QuoraRowTopStoryNormal=require('./QuoraRowTopStoryNormal.js');

var QuoraRowQuestionAsked=require('./QuoraRowQuestionAsked.js');



var QuoraRow = React.createClass({
  getInitialState: function() {
    return {
      isUped: this.props.quora.up ,
      isDowned : this.props.quora.down ,
      isPassed : this.props.quora.pass ,
    };
  },
  handleUpClick: function() {
    this.setState({
      isUped: !this.state.isUped
    })
  },
  handlePassClick: function() {
    this.setState({
      isPassed: !this.state.isPassed
    })
  },
  handleDownClick: function(newState) {
    console.log("newState",newState);
    this.setState({
      isDowned: !newState
    })
  },
  render: function() {



    return(

      this.props.quora.isTS?<QuoraRowTopStoryNormal quora={this.props.quora}   />:<QuoraRowQuestionAsked quora={this.props.quora} callbackParentPass={this.handlePassClick}/>

  );




}
});


module.exports = QuoraRow;
