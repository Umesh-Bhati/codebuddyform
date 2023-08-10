import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useForm} from '../context/FormContext';
import {FormButton, FormInput} from '../components';
import DropDownPicker from 'react-native-dropdown-picker';

const ThirdForm = ({navigation}: any) => {
  const {dispatch} = useForm();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('+91');
  const [items, setItems] = useState([
    {label: '(+91)', value: '+91'},
    {label: '(+1)', value: '+1'},
  ]);

  const [accptTerm, setAccptTerm] = useState(false);

  const handleFormHandle = () => {
    if (phoneNumber?.length === 0) {
      setError('phone number is requred.');
    }
    if (phoneNumber.length < 10) {
      setError('phone number must be valid');
    }
    if (phoneNumber?.length === 10) {
      dispatch({
        type: 'UPDATE_FORM',
        payload: {phoneNumber: value + phoneNumber},
      });
      setError('');
      Alert.alert('You your saved your data', 'your data is saved');
    }
  };

  const onChange = (value: any) => {
    setPhoneNumber(value);
    setError('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          containerStyle={{width: '25%'}}
        />
        <FormInput
          placeholder="Phone number"
          value={phoneNumber}
          onChangeText={onChange}
          errorMsg={error}
          maxLength={10}
          containerStyle={styles.formStyle}
          inputStyle={styles.input}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.acceptContainer}>
        <TouchableOpacity
          onPress={() => setAccptTerm(old => !old)}
          style={[styles.selectBox, accptTerm && styles.selectedBox]}
        />
        <Text style={styles.term}>Accept term & condition</Text>
      </View>
      <FormButton
        backPress={() => navigation.goBack()}
        saveDisabled={!accptTerm}
        saveNextDisabled
        savePress={handleFormHandle}
      />
    </View>
  );
};

export default ThirdForm;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    height: '25%',
    justifyContent: 'center',
    width: '100%',
    overflow: 'hidden',
  },
  formStyle: {
    width: '70%',
    marginBottom: 0,
  },
  input: {
    aspectRatio: 5,
  },
  selectBox: {
    width: '5%',
    aspectRatio: 1,
    borderWidth: 1,
    marginRight: '5%',
  },
  selectedBox: {
    backgroundColor: 'dodgerblue',
    borderColor: 'white',
  },
  term: {
    color: 'black',
  },
  acceptContainer: {
    flexDirection: 'row',
    bottom: '10%',
  },
});
