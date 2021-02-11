import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
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
    if (result1 <= 0) {
      result1 = 0;
    } 
    setResult(result1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Weight</Text>
        <TextInput
          style={styles.input}
          onChangeText={weight => setWeight(weight)}
          placeholder="in kilograms"
          keyboardType='numeric'></TextInput>
      </View>
        <Text>Bottles</Text>
        <DropDownPicker style={styles.bottles} items={[
          { label: '0 bottles', value: 0 },
          { label: '1 bottle', value: 1 },
          { label: '2 bottles', value: 2 },
          { label: '3 bottles', value: 3 }
        ]}
        defaultValue={bottles}
        onChangeItem={item => setBottles(item.value)}
        labelStyle={{color: '#000'}}
        >
        </DropDownPicker>
        <Text>Time</Text>
        <DropDownPicker style={styles.bottles} items={[
          { label: '0 hours', value: 0 },
          { label: '1 hour', value: 1 },
          { label: '2 hours', value: 2 },
          { label: '3 hours', value: 3 },
          { label: '4 hours', value: 4 },
          { label: '5 hours', value: 5 },
        ]}
        defaultValue={time}
        onChangeItem={item => setTime(item.value)}
        labelStyle={{color: '#000'}}
        >
        </DropDownPicker>
      <View style={styles.field}>
        <Text>Gender</Text>
        <RadioForm
        style={styles.radio}
        buttonSize = {10}
        radio_props={genders}
        initial={0}
        onPress={(value) => {setGender(value)}}
        />
        <Text>Promilles<br></br>{result.toFixed(2)}</Text>
      </View>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  },
  bottles: {
    margin: 0
  }
});