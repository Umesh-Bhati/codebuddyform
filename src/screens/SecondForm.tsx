import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useForm} from '../context/FormContext';
import {FormButton, FormInput} from '../components';
import {isValidAddress, isValidName} from '../utils/formValidation';

const SecondForm = ({navigation}: any) => {
  const initialValus = {firstName: '', lastName: '', address: ''};
  const {dispatch} = useForm();
  const [userData, setUserData] = useState(initialValus);
  const [errorData, setErrorData] = useState(initialValus);

  const handleFormHandle = (isNext = false) => {
    const {firstName, lastName, address} = userData;
    if (isValidName(firstName)) {
      setErrorData(old => ({...old, firstName: isValidName(firstName)}));
    }
    if (isValidName(lastName, false)) {
      setErrorData(old => ({...old, lastName: isValidName(lastName, false)}));
    }
    if (isValidAddress(address)) {
      setErrorData(old => ({...old, address: isValidAddress(address)}));
    }
    if (
      !isValidName(firstName) &&
      !isValidName(lastName, false) &&
      !isValidAddress(address)
    ) {
      dispatch({type: 'UPDATE_FORM', payload: userData});
      setErrorData(initialValus);
      isNext && navigation.navigate('ThirdForm');
    }
  };

  const onChange = (value: any, key: keyof typeof initialValus) => {
    setUserData(old => ({...old, [key]: value}));
    setErrorData(initialValus);
  };

  return (
    <View style={styles.container}>
      <FormInput
        placeholder="First Name"
        value={userData?.firstName}
        onChangeText={val => onChange(val, 'firstName')}
        errorMsg={errorData?.firstName}
        maxLength={50}
      />
      <FormInput
        placeholder="Last Name"
        value={userData?.lastName}
        onChangeText={val => onChange(val, 'lastName')}
        errorMsg={errorData?.lastName}
        maxLength={50}
      />
      <FormInput
        placeholder="Address"
        value={userData?.address}
        onChangeText={val => onChange(val, 'address')}
        errorMsg={errorData?.address}
        maxLength={50}
      />

      <FormButton
        backPress={() => navigation.goBack()}
        savePress={() => handleFormHandle()}
        saveNextPress={() => handleFormHandle(true)}
      />
    </View>
  );
};

export default SecondForm;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});
