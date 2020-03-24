import React, { useState } from "react"
import { withNavigation } from 'react-navigation';
import Goal from "./Goal"
import AuthContext from "../../context/AuthContext";


const GoalContainer = ({ navigation }) => {
    return (
        <AuthContext.Consumer>
          {({ setUser }) => {
            return <Goal navigation={navigation} setUser={setUser} />
          }}
        </AuthContext.Consumer>
    
      )
}

export default withNavigation(GoalContainer);