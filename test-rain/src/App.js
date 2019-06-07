import React from 'react'
import Nav from './Components/NavBar/nav'
import Profile from './Components/Profile/profile'
import LandingPage from './Components/Landing Page/landingPage'
import About from './Components/About/about'
import SocialContract from './Components/SocialContract/socialContract'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
       disp:''
    }
  }
  handleClick = (event) => {
     if (event.target.id === 'profNav') {
        this.setState({disp: <Profile />})
     } else if (event.target.id === 'homeNav') {
        console.log('Home Clicked')
        this.setState({disp: <LandingPage />})
     } else if (event.target.id === 'aboutNav') {
      console.log('About Clicked')
      this.setState({disp: <About />})
     } else if (event.target.id === 'socialNav') {
      console.log('Social Contract Clicked')
      this.setState({disp: <SocialContract />})
     } else if (event.target.id === 'sideNav') {
      console.log('Side Bar Clicked')
     }
  }
  render() {
    return(
      <div>
         <Nav handleClick = {this.handleClick}/>
         {this.state.disp}
      </div>
    )
  }
}

export default App