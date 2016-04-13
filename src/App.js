//In production deploy use browserHistory in place of hashHistory
import React from 'react';
import { Router, Route, Link, hashHistory} from 'react-router';

const Home = () => <div><h1>Home</h1><Links /></div>;
const About = () => <div><h1>About</h1><Links /></div>;
const Contact = () => <div><h1>Contact</h1><Links /></div>;

const Links = () =>
  <nav>
    <Link activeStyle={{color: 'pink'}} to="/">Home</Link>
    <Link activeStyle={{color: 'pink'}} to="/about">About</Link>
    <Link activeClassName="active" to="/contact">Contact</Link>
  </nav>

class App extends React.Component{
  render (){
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
      </Router>
    );
  }
}

export default App;
