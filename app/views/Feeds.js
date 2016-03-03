'use strict';
var React = require('react');
var Router = require('react-router'),
  RouteHandler = Router.RouteHandler;
  var QuoraList=require('./component/QuoraList.js');
var Quoras =[
  {
    title:"Business: What's the craziest excuse you have had a employee/coworker tell you showing up to late to work?",
    asker:"Maura Rudd, Office Admin = Office Mom",
    profile:"https://qph.is.quoracdn.net/main-thumb-2610890-50-zP1em5XUO0mrkzXNfFKxNJO8eU7FYAuE.jpeg",
    content:"In my office there was an employee who was fired 20 years ago, but his excuses for being late or staying home still live on. <br>He had dozens of dead relatives, and multiple ongoing problems with his car.  He even was late one day because he backed up over a cat and was too upset to drive.<br>But I think my favorite one was when he was waxing his kitchen floor, and waxed himself into a corner.  Apparently he had to stand there for an hour until the wax dried.<br>I've never met him but I feel that I know him well from his excuses.",
    meta:"196.4k Views • Upvoted by Alex Sergeev",
    car:"Answer written",
    subject:"Business",
    time:"3h",
    pass:false,
    up:false,
    down:false,
    comments:123,
    share:3,
    follow:1,

    noUp:100,
    isTS:true,
    isQA:false,
    isFollow:false
  },
  {
    title:"Does Capitalism encourage greed?",
    asker:"Erik Fair, Software Engineer, Investor, skier.",
    profile:"https://qph.is.quoracdn.net/main-thumb-2610890-50-zP1em5XUO0mrkzXNfFKxNJO8eU7FYAuE.jpeg",
    content:"No. <br>Capitalism encourages you (and everyone else) to satisfy the Wants and Needs of your fellow man (and woman), and profit thereby. Customers buy because they're happy with the exchange of their money for whatever goods or services any business is offering, in competition with all other businesses.",
    meta:"true",
    cat:'Answer written ',
    subject:false,
    time:"1h",
    pass:false,
    up:false,
    down:false,
    comments:123,
    share:3,
    noUp:100,

    follow:1,
    isTS:true,
    isQA:false,
    isFollow:false


  },
  {
    title:"Where could a person feel the maximum gravity on earth?",
    asker:"Erik Fair, Software Engineer, Investor, skier.",
    profile:"https://qph.is.quoracdn.net/main-thumb-2610890-50-zP1em5XUO0mrkzXNfFKxNJO8eU7FYAuE.jpeg",
    content:"See that  pin.  A boat, there, on the surface of the Arctic Ocean, would be at the location that is regarded as having the highest gravitational acceleration on Earth.<br>The coordinates are Latitude 86.71 Longitude 61.29.<br>At that location, the gravitational acceleration is 9.8337 m/s^2.",
    meta:"5.1k Views • Todd has 1,510+ answers in Physics.",
    cat:'Answer written ',
    subject:"Gravity",
    time:"4h",
    pass:false,
    up:false,
    down:false,
    comments:123,
    share:3,
    follow:1,
    noUp:2,
    isTS:true,
    isQA:false,
    isFollow:false

  },
  {
    title:"Who recommend me to follow if I want to learn how to put a system that bring people that search a business opportunity at me?",
    asker:"",
    profile:"",
    content:"",
    meta:"5.1k Views • Todd has 1,510+ answers in Physics.",
    cat:'Question asked ',
    subject:"Gravity",
    time:"4h",
    pass:false,
    up:false,
    down:false,
    comments:0,
    share:3,
    follow:1,
    noUp:3,
    isTS:false,
    isQA:true,
    isFollow:false


  },
  {
    title:"How can having cell phone service help build a good credit score?",
    asker:"",
    profile:"",
    content:"",
    meta:"5.1k Views • Todd has 1,510+ answers in Physics.",
    cat:'Mobile Phone',
    subject:"Gravity",
    time:"4h",
    pass:false,
    up:false,
    down:false,
    comments:0,
    share:3,
    follow:1,
    isTS:false,
    isQA:true,
    isFollow:false


  },
  {
    title:"How can having cell phone service help build a great credit score?",
    asker:"",
    profile:"",
    content:"",
    meta:"5.1k Views • Todd has 1,510+ answers in Physics.",
    cat:'Mobile Phone',
    subject:"Gravity",
    time:"4h",
    pass:false,
    up:false,
    down:false,
    comments:0,
    share:3,
    follow:1,
    isTS:false,
    isQA:true,
    isFollow:false


  }

];







var Feeds = React.createClass({
  render: function() {
    return (

    <div>

      <QuoraList
        Quoras={Quoras}

      />

      <RouteHandler params={this.props.params}/>

    </div>
    );
  }
});



module.exports = Feeds;
