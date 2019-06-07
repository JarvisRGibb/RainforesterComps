import React from 'react'
import './landingPage.css'
import LinkedInPage from './LinkedinLogin/LinkedInPage'

class LandingPage extends React.Component {
    render() {
        return(
            <div className='landingMain'>
                <h1>Hello World From Landing Page</h1>
                <LinkedInPage/>
            </div>
        )
    }
}

export default LandingPage