import React from 'react'
import './nav.css'

class Nav extends React.Component {
    render() {
        return(
            <div className='navBar'>
                 <button 
                onClick={this.props.handleClick} 
                className='navBtn'
                id='sideBtn'
                >
                    Side Bar
                </button>
                <button 
                onClick={this.props.handleClick} 
                className='navBtn'
                id='homeNav' 
                >
                    Home
                </button>
                
                <button 
                onClick={this.props.handleClick} 
                className='navBtn'
                id='aboutNav'
                >
                    About
                </button>
                <button 
                onClick={this.props.handleClick} 
                className='navBtn'
                id='socialNav'
                >
                    Social Contract
                </button>
                <button 
                onClick={this.props.handleClick} 
                className='navBtn' 
                id='profNav'
                >
                    Profile
                </button>
               
            </div>
        )
    }
}

export default Nav