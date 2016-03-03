var React = require('react');
var Router = require('react-router'),
  Link = Router.Link;
var SideBar = React.createClass({
  render() {
    return (
      /* jshint ignore: start*/


           <div>
             <ul>
               <li>
                 < a    href = "#/feeds" > Feeds < /a >

               </li>
               <li>
                 < a    href = "#/trend" > Trend < /a >

               </li>
             </ul>

           </div>
    );
  }
});

module.exports = SideBar;
