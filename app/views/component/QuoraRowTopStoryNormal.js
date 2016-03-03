var React = require('react');

var QuoraRowTopStoryNormal = React.createClass({
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
    });

  },
  handlePass: function() {
    this.setState({
      isPassed: !this.state.isPassed
    })
  },
  handleDownClickInNormal: function() {
    this.setState({
      isDowned: !this.state.isDowned
    });

  },

  render: function() {

    var upBtn = this.state.isUped ?
    <div className="ui labeled button"  onClick={this.handleUpClick}>
      <div className="ui  button">
        UpVote
      </div>
      <a className="ui  left pointing  label">
        {this.props.quora.noUp+1}
      </a>
    </div>
    :
    <div className="ui labeled button"  onClick={this.handleUpClick}>
      <div className="ui teal button">
        UpVote
      </div>
      <a className="ui basic left pointing teal label">
        {this.props.quora.noUp}
      </a>
    </div>
    ;
    return this.state.isDowned?
    (
      <div className="ui text container">

        <div className="ui items">
          <div className="item">

            <div className="content">
              <div className="meta">
                <span>You downvoted this answer</span>
              </div>
              <a className="header">{this.props.quora.title}</a>

              <div className="description">
                <p />
              </div>
              <div className="extra">
                <a className="" onClick={this.handleDownClickInNormal}>Undo</a>
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
              <img src="https://qph.is.quoracdn.net/main-thumb-2610890-50-zP1em5XUO0mrkzXNfFKxNJO8eU7FYAuE.jpeg" />
            </a>
            <div className="content">
              <a className="author">
                {this.props.quora.title}
              </a>
              <div className="actions">
                <a className="reply">

                  {this.props.quora.meta}

                </a>

              </div>

              <div className="text" dangerouslySetInnerHTML={{__html: this.props.quora.content}}>
              </div>

              <a className="reply" href="#/full">
                (more...)
              </a>


              <div className="actions">
                {  upBtn}
                <a className="" onClick={this.handleDownClickInNormal}>DownVote</a>
              </div>
            </div>
          </div>
        </div>
        <div className="ui divider"></div>
      </div>
    );
  }


});



module.exports = QuoraRowTopStoryNormal;
