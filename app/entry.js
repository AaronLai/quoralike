'use strict';

require('muicss/lib/css/mui.min.css');
require('./assets/mui.min.js');

require('./assets/layout.js');
require('semantic-ui/dist/semantic.js')
require('semantic-ui/dist/semantic.css')
require('./assets/style.css');

var React = require('react');
var ReactDOM = require('react-dom');
var SideBar = require('./assets/sideBar.js')



var Router = require('react-router'),
Route = Router.Route,
NotFoundRoute = Router.NotFoundRoute,
DefaultRoute = Router.DefaultRoute,
MainPage = require('./pages/main.js'),
Feeds = require('./views/Feeds.js'),
Trend = require('./views/Trend.js'),
NotFound = require('./pages/404.js'),
Message =  require('./views/Message.js'),
Full =  require('./views/Full.js'),

Routes;

React.render(
  < SideBar/ > ,
  document.getElementById('sideBar-content')
)
;

Routes = (
  < Route
  path = "/"
  handler = {
    MainPage
  } >
  < DefaultRoute
  handler = {
    Feeds
  }/> < NotFoundRoute
  handler = {
    NotFound
  }
  / >
  < Route
  name = "feeds"
  handler = {
    Feeds
  } >
  < / Route >
  < Route
  name = "full"
  handler = {
    Full
  } >
  < / Route >
  < Route
  name = "trend"
  handler = {
    Trend
  } >

  < /Route >
  < /
  Route >
)
;

Router.run(Routes, function (Handler, state) {
  React.render(
    < Handler
    params = {
      state.params}/>, document.getElementById('content')
)
;
});
