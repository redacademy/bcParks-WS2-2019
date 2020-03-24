import React from "react";
import { useLazyQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { withNavigation } from 'react-navigation';
import Login from "./Login";
import AuthContext from "../../../context/AuthContext";


const LoginContainer = ({ navigation }) => {

  return (
    <AuthContext.Consumer>
      {({ user, setUser }) => {
        return <Login navigation={navigation} setUser={setUser} />
      }}
    </AuthContext.Consumer>

  )
}

export default withNavigation(LoginContainer);