import React from 'react'
import SocialContractPng from "./socialContract.png";

class SocialContract extends React.Component {
    render() {
        return(
            <div>
                <img src = {SocialContractPng} width = "50%" height = "50%"/>
                <br></br>
                <button width = "300%" height="300%">I AGREE</button>
                
            </div>
        )
    }
}

export default SocialContract