import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FirstForm, SecondForm, ThirdForm} from '../screens';
import {FormProvider} from '../context/FormContext';

const Form = createNativeStackNavigator();

const FormNavigator = () => {
  return (
    <FormProvider>
      <Form.Navigator
        initialRouteName="FirstForm"
        screenOptions={{headerShown: false}}>
        <Form.Screen name="FirstForm" component={FirstForm} />
        <Form.Screen name="SecondForm" component={SecondForm} />
        <Form.Screen name="ThirdForm" component={ThirdForm} />
      </Form.Navigator>
    </FormProvider>
  );
};

export default FormNavigator;
