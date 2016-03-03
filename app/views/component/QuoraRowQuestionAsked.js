var React = require('react');


var QuoraRowQuestionAsked = React.createClass({
  getInitialState: function() {
    return {
      isUped: this.props.quora.up ,
      isDowned : this.props.quora.down ,
      isPassed : this.props.quora.pass ,
      isAnswer : false,
      isFollowed : this.props.quora.isFollow

    };
  },

  handlePassClick: function() {
    this.setState({
      isPassed: !this.state.isPassed
    })
  },

  handleAnswerClick: function() {
    this.setState({
      isAnswer: !this.state.isAnswer
    })
  },
  handleFollowClick: function() {
    this.setState({
      isFollowed: !this.state.isFollowed
    })
  },
  render: function() {

    var answer = this.state.isAnswer?<form className="ui reply form">
    <div className="field">
      <textarea></textarea>
    </div>

  </form>:"";

  var followBtn= this.state.isFollowed?<a className="hide"  onClick={this.handleFollowClick}>UnFollow</a>:<a className="hide"  onClick={this.handleFollowClick}>Follow</a>;
var followNum =  this.state.isFollowed?<a className="hide"  >{this.props.quora.follow+1}</a>:<a className="hide"  >{this.props.quora.follow}</a>;
  return this.state.isPassed? (



    <div className="ui text container">

      <div className="ui items">
        <div className="item">

          <div className="content">
            <div className="meta">
              <span>You passed on answering this question</span>
              <a className="hide"  onClick={this.handlePassClick}>Undo</a>

            </div>
            <a className="header">{this.props.quora.title}</a>

            <div className="description">
              <p />
            </div>
            <div className="extra">
            </div>
          </div>
        </div>
      </div>
      <div className="ui divider"></div>

    </div>
  ):(
    <div className="ui text container">

      <div className="ui comments">
        <div className="comment">
          <a className="avatar">
          </a>
          <div className="content">

            <div className="actions">
              <a className="reply">

                {this.props.quora.subject}

              </a>
              <a className="reply">

                {this.props.quora.time}

              </a>
            </div>
            <a className="author">
              {this.props.quora.title}
            </a>


            <div >
              {answer}
            </div>
            <br></br>
            <div className="actions">
              <div className="ui blue button"  onClick={this.handleAnswerClick}>
                Answer
              </div>
              <a className="hide"  onClick={this.handlePassClick}>Pass</a>
              {followBtn}
              {followNum}


            </div>
          </div>
        </div>
      </div>
      <div className="ui divider"></div>
    </div>
  );
}




});

module.exports = QuoraRowQuestionAsked;
