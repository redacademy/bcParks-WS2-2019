import React from "react";
import { useLazyQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { withNavigation } from 'react-navigation';
import Login from "./Login";

const LOGIN_USER = gql`
  query login($id: ID, $email: String!, $password: String!) {
    User(Id: $ID) {
      id
      email
    }
  }
`;

const LoginContainer = ({ navigation }) => {
    const [{ loading, error, data }] = useLazyQuery(
        LOGIN_USER, { variables: { id, email, password } }
    )
    if (loading) return null;
    if (error) return 'Error!';

    return (
        <Login navigation={navigation} onClick={login} />
    )
}

export default withNavigation(LoginContainer);