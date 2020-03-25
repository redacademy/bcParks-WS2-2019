import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  HeaderCont,
  Heading,
  SubHeading,
  PrimaryBtn,
  theme,
} from '../../../globalStyles';
import {
  FormCont,
  InputCont,
  InputLabel,
  StyledInput,
  LoginBtnCont,
  LinkCont,
  TextLink,
} from '../styles';
import LinearGradient from 'react-native-linear-gradient';
import {useLazyQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import BackButton from '../../../components/BackButton';

const FIND_USER = gql`
  query Users($data: UserWhereInput) {
    users(where: $data) {
      id
      email
    }
  }
`;

const LoginScreen = ({navigation, setUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getUser] = useLazyQuery(FIND_USER, {
    onCompleted: userData => {
      console.log('setting user', userData.users[0]);
      setUser({
        id: userData.users[0].id,
        email: userData.users[0].email,
      });
      navigation.navigate('Tabs');
    },
  });
  const handleLogin = () => {
    console.log('logging in');
    getUser({variables: {data: {email, password}}});
  };

  return (
    <LinearGradient colors={['#FFFFFF', '#8CBE82']} height={theme.fullHeight}>
      <BackButton to="Onlanding" />
      <HeaderCont>
        <Heading>Login</Heading>
      </HeaderCont>
      <SubHeading>Let's continue your journey!</SubHeading>
      <FormCont>
        <InputCont>
          <InputLabel>Email</InputLabel>
          <StyledInput
            onChangeText={text => {
              setEmail(text);
            }}
          />
        </InputCont>
        <InputCont>
          <InputLabel>Password</InputLabel>
          <StyledInput
            secureTextEntry={true}
            onChangeText={text => {
              setPassword(text);
            }}
          />
        </InputCont>
      </FormCont>
      <LoginBtnCont>
        <TouchableOpacity onPress={handleLogin}>
          <PrimaryBtn>start</PrimaryBtn>
        </TouchableOpacity>
      </LoginBtnCont>
      <LinkCont>
        <TouchableOpacity onPress={() => navigation.push('SignUp')}>
          <TextLink>Create an Account</TextLink>
        </TouchableOpacity>
      </LinkCont>
    </LinearGradient>
  );
};

export default LoginScreen;
