import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React, { useState, useRef } from 'react';
import { ColorTheme } from '../../shared/Colors';
import Images from '../../shared/Image';
import Button from '../../shared/Button';

export default function formOTPVerifyPage(props: any) {
  const [active, setActive] = useState(false);

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  function addPlusAndSpacesToNumber(number: any) {
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

  const handlePinChange = (pin: string, ref: React.MutableRefObject<any>, nextRef: React.MutableRefObject<any> | null) => {
    if (pin.length === 1 && nextRef) {
      nextRef.current.focus();
    }
    switch (ref) {
      case pin1Ref:
        setPin1(pin);
        break;
      case pin2Ref:
        setPin2(pin);
        break;
      case pin3Ref:
        setPin3(pin);
        break;
      case pin4Ref:
        setPin4(pin);
        break;
      default:
        break;
    }
    if (pin1 != '' && pin2 != '' && pin3 != '' && pin4 == '') {
      setActive(true);
    }
  };

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
            <TextInput
              ref={pin1Ref}
              keyboardType={'number-pad'}
              maxLength={1}
              style={styles.textinput}
              onChangeText={(pin1) => handlePinChange(pin1, pin1Ref, pin2Ref)}
            />
          </View>
          <View style={styles.input1}>
            <TextInput
              ref={pin2Ref}
              keyboardType={'number-pad'}
              maxLength={1}
              style={styles.textinput}
              onChangeText={(pin2) => handlePinChange(pin2, pin2Ref, pin3Ref)}
            />
          </View>
          <View style={styles.input1}>
            <TextInput
              ref={pin3Ref}
              keyboardType={'number-pad'}
              maxLength={1}
              style={styles.textinput}
              onChangeText={(pin3) => handlePinChange(pin3, pin3Ref, pin4Ref)}
            />
          </View>
          <View style={styles.input1}>
            <TextInput
              ref={pin4Ref}
              keyboardType={'number-pad'}
              maxLength={1}
              style={styles.textinput}
              onChangeText={(pin4) => handlePinChange(pin4, pin4Ref, null)}
            />
          </View>
        </View>
        <View>
          <Button
            disabled={!active}
            onPress={props.submitHandler}
            style={active ? styles.formbtn : styles.btnfalse}
            isLoading={props.loading}
            text='Verify OTP' />
        </View>

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
  btnfalse: {
    borderRadius: 30,
    backgroundColor: ColorTheme(3),
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
  },
  textinput: {
    height: 50,
    borderWidth: 1,
    width: 70,
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 20,
    borderColor: ColorTheme(4),
    backgroundColor: ColorTheme(6)
  }
})