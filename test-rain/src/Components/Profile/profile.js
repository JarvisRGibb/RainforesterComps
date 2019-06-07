import React from 'react'

class Profile extends React.Component {
    render() {
        const user = {
            "firstName":{
               "localized":{
                  "en_US":"Bob"
               },
               "preferredLocale":{
                  "country":"US",
                  "language":"en"
               }
            },
            "localizedFirstName": "Bob",
            "headline":{
               "localized":{
                  "en_US":"API Enthusiast at LinkedIn"
               },
               "preferredLocale":{
                  "country":"US",
                  "language":"en"
               }
            },
            "localizedHeadline": "API Enthusiast at LinkedIn",
            "vanityName": "bsmith",
            "id":"yrZCpj2Z12",
            "lastName":{
               "localized":{
                  "en_US":"Smith"
               },
               "preferredLocale":{
                  "country":"US",
                  "language":"en"
               }
            },
            "localizedLastName": "Smith",
            "profilePicture": {
                 "displayImage": "https://media.licdn.com/dms/image/C4D03AQGeDQNVm9S0gw/profile-displayphoto-shrink_200_200/0?e=1565222400&v=beta&t=D2-2mfJnbfDnDZyLTUtGFqr0Z5e-d8R8EjUfUwvo_08"
            }
         }
        return(
            <div className = 'profile'>
                <img 
                className='profilePicture'
                src={user.profilePicture['displayImage']}
                ></img>
                <h1>
                {user.firstName['localized']['en_US']} 
                {user.lastName['localized']['en_US']}
                </h1>
                <h2>
                {user.vanityName}
                </h2>
                <h3>
                {user.localizedHeadline}
                </h3>
            </div>
        )
    }
}

export default Profile