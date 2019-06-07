import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { LinkedInPopUp } from  'react-linkedin-login-oauth2';
import LinkedInPage from './Components/LandingPage/LinkedinLogin/LinkedInPage';

ReactDOM.render(<App />, document.getElementById('root'));

class Demo extends Component {
    render() {
      return (
        <BrowserRouter>
          <Switch >
            <Route exact path="/linkedin" component={LinkedInPopUp} />
            <Route path="/" component={LinkedInPage} />
          </Switch>
        </BrowserRouter>
      );
    }
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
