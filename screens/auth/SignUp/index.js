import React from 'react';
import {View} from 'react-native';
import AuthHeader from '../../../components/AuthHeader/authHeader';
import Input from '../../../components/Input/input';
import {styles} from './styles';
import Checkbox from '../../../components/CheckBox/checkbox';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="John Doe" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="**********" />
      <View>
        <Checkbox />
      </View>
    </View>
  );
};

export default SignUp;
