import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
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

export default Demo
