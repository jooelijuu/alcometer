import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default function App() {
  const [weight,setWeight] = useState('');
  const [bottles,setBottles] = useState(0);
  const [time,setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  const genders = [
    {label: 'Male', value: 'male' },
    {label: 'Female', value: 'female' }
  ];

  function calculate() {
    let result1 = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsleft = grams - burning * time;

    if (gender === 'male') {
      result1 = gramsleft /(weight * 0.7);
    }
    else {
      result1 = gramsleft /(weight * 0.6);
    }
    if (result1 <= 0 || weight <= 0) {
      result1 = 0;
    } 
    setResult(result1);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.field}>Weight</Text>
        <TextInput
          style={styles.input}
          onChangeText={weight => setWeight(weight)}
          placeholder="Enter weight in kilograms"
          keyboardType='numeric'>
        </TextInput>
        <Text style={styles.dropdowntext}>Bottles</Text>
        <DropDownPicker zIndex={5000} style={styles.dropdown} items={[
          { label: '0 bottles', value: 0 },
          { label: '1 bottle', value: 1 },
          { label: '2 bottles', value: 2 },
          { label: '3 bottles', value: 3 },
          { label: '4 bottles', value: 4 },
          { label: '5 bottles', value: 5 },
          { label: '6 bottles', value: 6 },
          { label: '7 bottles', value: 7 },
          { label: '8 bottles', value: 8 },
          { label: '9 bottles', value: 9 },
          { label: '10 bottles', value: 10 },
          { label: '11 bottles', value: 11 },
          { label: '12 bottles', value: 12 },
          { label: '13 bottles', value: 13 },
          { label: '14 bottles', value: 14 },
          { label: '15 bottles', value: 15 }
        ]}
        containerStyle={{height: 40}}
        defaultValue={bottles}
        onChangeItem={item => setBottles(item.value)}
        labelStyle={{color: '#000'}}
        >
        </DropDownPicker>
        <Text style={styles.dropdowntext}>Time</Text>
        <DropDownPicker zIndex={4000} style={styles.dropdown} items={[
          { label: '0 hours', value: 0 },
          { label: '1 hour', value: 1 },
          { label: '2 hours', value: 2 },
          { label: '3 hours', value: 3 },
          { label: '4 hours', value: 4 },
          { label: '5 hours', value: 5 },
          { label: '6 hours', value: 6 },
          { label: '7 hours', value: 7 },
          { label: '8 hours', value: 8 },
          { label: '9 hours', value: 9 },
          { label: '10 hours', value: 10 },
          { label: '11 hours', value: 11 },
          { label: '12 hours', value: 12 },
          { label: '13 hours', value: 13 },
          { label: '14 hours', value: 14 },
          { label: '15 hours', value: 15 },
          { label: '16 hours', value: 16 },
          { label: '17 hours', value: 17 },
          { label: '18 hours', value: 18 },
          { label: '19 hours', value: 19 },
          { label: '20 hours', value: 20 },
          { label: '21 hours', value: 21 },
          { label: '22 hours', value: 22 },
          { label: '23 hours', value: 23 },
          { label: '24 hours', value: 24 }
        ]}
        containerStyle={{height: 40}}
        defaultValue={time}
        onChangeItem={item => setTime(item.value)}
        labelStyle={{color: '#000'}}
        >
        </DropDownPicker>
        <Text style={styles.field}>Gender</Text>
        <RadioForm
        style={styles.input}
        buttonSize = {10}
        radio_props={genders}
        initial={0}
        onPress={(value) => {setGender(value)}}
        />
        <Text style={styles.field}>Promilles{"\n"}{result.toFixed(2)}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
  },
  input: {
    margin: 5,
    marginLeft: 10,
  },
  field: {
    margin: 5,
    marginLeft: 10,
  },
  dropdowntext: {
    marginLeft: 10,
  },
  dropdown: {
    marginLeft: 10,
  }
});