import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface IFormButton {
  backDisabled?: boolean;
  saveDisabled?: boolean;
  saveNextDisabled?: boolean;
  backPress?: () => void;
  savePress?: () => void;
  saveNextPress?: () => void;
}

const FormButton: FC<IFormButton> = props => {
  return (
    <View style={styles.container}>
      <Pressable
        disabled={props.backDisabled}
        onPress={props.backPress}
        style={[styles.btn, props.backDisabled && styles.btnDisabled]}>
        <Text style={styles.txt}>Back</Text>
      </Pressable>
      <Pressable
        disabled={props.saveDisabled}
        onPress={props.savePress}
        style={[styles.btn, props.saveDisabled && styles.btnDisabled]}>
        <Text style={styles.txt}>Save</Text>
      </Pressable>
      <Pressable
        disabled={props.saveNextDisabled}
        onPress={props.saveNextPress}
        style={[styles.btn, props.saveNextDisabled && styles.btnDisabled]}>
        <Text style={styles.txt}>Save and Next</Text>
      </Pressable>
    </View>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  btn: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'dodgerblue',
  },
  txt: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  btnDisabled: {
    backgroundColor: 'lightgrey',
  },
});
