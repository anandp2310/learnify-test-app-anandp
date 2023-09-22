import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ColorTheme } from '../../shared/Colors'
import Images from '../../shared/Image';
import { InputControl } from '../../shared/InputControl';
import OTPInputView from '@twotalltotems/react-native-otp-input'
export default function formOTPVerifyPage(props: any) {
  let formElementArray: any[] = [];

  for (let [key, value] of Object.entries(props.formConfig)) {
    formElementArray.push({ name: key, config: value });
  }

  let formControlsJSX = formElementArray.map((item: any) => {
    return <InputControl key={item.name} name={item.name} config={item.config} onChange={props.inputChangeHandler} />;
  });

  function addPlusAndSpacesToNumber(number:any) {
    if (typeof number !== 'string') {
      number = String(number);
    }
  
    if (number.length !== 13) {
      return 'Invalid input: 13 digits required';
    }
  
    const part1 = number.substring(0, 3);
    const part2 = number.substring(3, 8);
    const part3 = number.substring(8);
  
    const formattedNumber = `${part1} ${part2} ${part3}`;
    return formattedNumber;
  }
  
  const originalNumber = props.num; 
  const formattedNumber = addPlusAndSpacesToNumber(originalNumber);
  
  return (
    <View style={styles.container}>
      <View style={styles.containerfull}>
        <View style={styles.header}>
          <Text style={styles.headertxt}>OTP Verify</Text>
        </View>
        <View style={styles.form}>
          <Images style={styles.img} source={require('../../assets/Happystudent.gif')} />
        </View>
        <View style={styles.numbertxt}>
          <Text style={styles.ftrtxt}>OTP send to</Text>
          <Text style={styles.number}>{formattedNumber}</Text>
        </View>
        <View style={styles.forminput}>
          <View style={styles.input1}>
          {formControlsJSX.slice(0, 1)}
          </View>
          <View style={styles.input1}>
          {formControlsJSX.slice(1, 2)}
          </View>
          <View style={styles.input1}>
          {formControlsJSX.slice(2, 3)}
          </View>
          <View style={styles.input1}>
          {formControlsJSX.slice(3, 4)}
          </View>
        </View>
        
        <TouchableOpacity
          onPress={props.submitHandler}
          style={styles.formbtn}>
          <Text style={styles.btntxt}>Verify OTP</Text>
        </TouchableOpacity>
        <View style={styles.footrtxt}>
          <Text style={styles.ftrtxt}>By signing up, you are agree with our Terms and Conditions</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorTheme(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerfull: {
    width: "90%"
  },
  header: {
    width: "auto",
    alignItems: 'center',
    marginTop: 30
  },
  headertxt: {
    fontSize: 20,
    fontWeight: "900",
    color: ColorTheme(5)
  },
  img: {
    resizeMode: "contain"
  },
  form: {
    marginTop: -20
  },
  forminput: {
    justifyContent: "space-around",
    flexDirection: 'row',
    marginTop: 20
  },
  formbtn: {
    borderRadius: 30,
    backgroundColor: ColorTheme(0),
    padding: 18,
    marginTop: 60
  },
  btntxt: {
    fontSize: 18,
    color: ColorTheme(1),
    fontWeight: "bold",
    alignSelf: "center"
  },
  footrtxt: {
    marginTop: 20
  },
  ftrtxt: {
    color: ColorTheme(4),
    alignSelf: "center",
    textAlign: "center"
  },
  input1: {
    height: 20
  },
  numbertxt: {
    marginTop: -50
  },
  number: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center"
  }
})

function useRef(arg0: null) {
    throw new Error('Function not implemented.');
  }
