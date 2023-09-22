import React, { useRef, useState } from 'react';
import PhoneInput from 'react-native-phone-number-input';
import { TextInput as PaperInput } from 'react-native-paper';
import { Text, StyleSheet, TextInput, Switch } from 'react-native';
import { Checkbox, FormControl, Select, View, WarningOutlineIcon } from 'native-base';
import { ColorTheme } from './Colors';

export const InputControl = (props: any) => {
  const [visiblePass, setVisiblePass] = useState(true);

  let inputElement: any = null;
  const inputRef = useRef<TextInput>(null);

  switch (props.config.elementType) {
    case 'input':
      if (props.config.elementConfig.type === 'text') {
        inputElement = (
          <PaperInput
            value={props.config.value}
            outlineColor={ColorTheme(0)}
            activeOutlineColor={ColorTheme(0)}
            style={props.config.elementConfig.style}
            disabled={props.config.elementConfig.disabled}
            placeholder={props.config.elementConfig.placeholder}
            onChange={(event: any) => props.onChange(event, props.name)}
          />
        );
      }

      if (props.config.elementConfig.type === 'date') {
        inputElement = (
          <PaperInput
            mode="outlined"
            value={props.config.value}
            showSoftInputOnFocus={false}
            outlineColor={ColorTheme(4)}
            activeOutlineColor={ColorTheme(0)}
            label={props.config.elementConfig.placeholder}
            onFocus={(event: any) => props.onChange(event, props.name)}
            style={
              props.config.elementConfig.style ? props.config.elementConfig.style : { backgroundColor: ColorTheme(6) }
            }
          />
        );
      } else if (props.config.elementConfig.type === 'number') {
        inputElement = (
          <PaperInput
            mode="outlined"
            keyboardType="numeric"
            value={props.config.value}
            outlineColor={ColorTheme(4)}
            activeOutlineColor={ColorTheme(4)}
            contentStyle={{alignSelf:"center", justifyContent:"center",fontSize:18,fontWeight:"bold"}}
            label={props.config.elementConfig.placeholder}
            disabled={props.config.elementConfig.disabled}
            onChange={(event: any) => props.onChange(event, props.name)}
            style={
              { backgroundColor: ColorTheme(6), borderRadius:20,width:80 }
            }
          />
        );
      } else if (props.config.elementConfig.type === 'password') {
        inputElement = (
          <PaperInput
            mode="outlined"
            textContentType="password"
            value={props.config.value}
            secureTextEntry={visiblePass}
            outlineColor={ColorTheme(3)}
            activeOutlineColor={ColorTheme(0)}
            label={props.config.elementConfig.placeholder}
            onChange={(event: any) => props.onChange(event, props.name)}
            style={
              props.config.elementConfig.style ? props.config.elementConfig.style : { backgroundColor: ColorTheme(6) }
            }
            right={
              <PaperInput.Icon icon={visiblePass ? 'eye' : 'eye-off'} onPress={() => setVisiblePass(!visiblePass)} />
            }
          />
        );
      } else if (props.config.validation.isEmail) {
        inputElement = (
          <PaperInput
            mode="outlined"
            keyboardType="email-address"
            value={props.config.value}
            outlineColor={ColorTheme(4)}
            activeOutlineColor={ColorTheme(0)}
            label={props.config.elementConfig.placeholder}
            onChange={(event: any) => props.onChange(event, props.name)}
            style={
              props.config.elementConfig.style ? props.config.elementConfig.style : { backgroundColor: ColorTheme(6) }
            }
          />
        );
      } else if (props.config.elementConfig.type === 'phone') {
        inputElement = (
          <View style={Styles.phone}>
            <PhoneInput
              layout="second"
              defaultCode="IN"
              ref={props.ref}
              withShadow={false}
              defaultValue={props.value}
              value={props.config.value}
              placeholder={props.config.elementConfig.placeholder}
              textContainerStyle={{ backgroundColor: ColorTheme(6) }}
              containerStyle={{ backgroundColor: ColorTheme(6), width: '86%' }}
              onChangeFormattedText={(event) => props.onChange(event, props.name)}
              
            // onChangeCountry={ ( e: any )=>props.onChangeCountry( e ) }
            // onChangeText={ ( event ) => props.onChange( event, props.name ) }
            />
          </View>
        );
      } else if (props.config.elementConfig.type === 'checkbox') {
        inputElement = (
          <Checkbox
            w="100%"
            style={Styles.checkbox}
            isChecked={props.config.checked}
            value={props.config.elementConfig.options[0].value}
            onChange={(event) => props.onChange(event, props.name)}
          // onChange={ ( event ) => console.log('check ', event ) }
          >
            <Text style={Styles.checkboxText}>{props.config.elementConfig.options[0].displayValue}</Text>
          </Checkbox>
        );
      } else if (props.config.elementConfig.type === 'checkboxlist') {
        inputElement = props.config.elementConfig.options.map((item: any, key: any) => (
          <Checkbox
            key={key}
            value={key}
            colorScheme="green"
            isChecked={item.value}
            onChange={(event) => props.onChange(item, props.name)}
          >
            {item.displayName}
          </Checkbox>
        ));
      } else {
        inputElement = (
          <PaperInput
            mode="outlined"
            value={props.config.value}
            outlineColor={ColorTheme(2)}
            activeOutlineColor={ColorTheme(2)}
            placeholder={props.config.elementConfig.placeholder}
            disabled={props.config.elementConfig.disabled}
            onChange={(event: any) => props.onChange(event, props.name)}
            style={
              props.config.elementConfig.style ? props.config.elementConfig.style : { backgroundColor: ColorTheme(6) }
            }
            right={
              props.config.elementConfig.rightIcon && (
                <PaperInput.Icon
                  name={props.config.elementConfig.rightIcon.name}
                  color={props.config.elementConfig.rightIcon.color}
                />
              )
            }
            onFocus={() => props.onFocus && props.onFocus(props.name)}
          />
        );
      }
      break;

    case 'textarea':
      inputElement = (
        <PaperInput
          multiline
          mode="outlined"
          numberOfLines={4}
          value={props.config.value}
          outlineColor={ColorTheme(4)}
          activeOutlineColor={ColorTheme(0)}
          label={props.config.elementConfig.placeholder}
          onChange={(event: any) => props.onChange(event, props.name)}
          style={
            props.config.elementConfig.style
              ? props.config.elementConfig.style
              : { backgroundColor: ColorTheme(1), maxHeight: 200 }
          }
        />
      );
      break;


    case 'select':
      let selectItem: any = props.config.elementConfig.options.map((item: any, key: any) => {
        // console.log(item,key)
        return <Select.Item key={key} style={Styles.selectItem} label={item.label.toString()} value={item.value.toString()} />;
      });

      inputElement = (
        <Select
          mt={1}
          selectedValue={props.config.value && props.config.value.toString()}
          placeholder={props.config.elementConfig.placeholder}
          onValueChange={(event: any) => props.onChange(event, props.name)}
          _selectedItem={{
            bg: ColorTheme(1),
            // endIcon: <CheckIcon size="5" />
          }}
          fontSize="md"
          bgColor={ColorTheme(5)}
        >
          {selectItem}
        </Select>
      );
      break;

    case 'switch':
      inputElement = <Switch value={props.config.value} onChange={(event: any) => props.onChange(event, props.name)} />;
      break;

    default:
      inputElement = <input onChange={(event: any) => props.onChange(event, props.name)} />;
  }

  let subtitleMessage: any;

  if (props.config.elementConfig.subtitle) {
    subtitleMessage = (
      <FormControl.HelperText marginLeft={1}>{props.config.elementConfig.subtitle}</FormControl.HelperText>
    );
  }

  let value: any;
  let invalid: any;
  let errorMessage: any;

  Array.isArray(props.config.value)
    ? props.config.value.length === 0
      ? (value = '')
      : (value = 'x')
    : (value = props.config.value);

  if (
    (props.config.validation.required && !value && props.config.touched) ||
    (props.config.validation.required && !value && props.validate)
  ) {
    invalid = true;
    errorMessage = (
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="sm" />}>{'Required'}</FormControl.ErrorMessage>
    );
  }

  let warningMessage: any;
  if (!props.config.valid && props.config.touched) {
    subtitleMessage = (
      <View style={Styles.warningMessage}>
        <WarningOutlineIcon size="sm" color="#FAC213" />
        <Text style={Styles.warningMessageText}>{props.config.elementConfig.warning}</Text>
      </View>
    );
  }

  let label: any;
  if (props.config.elementConfig.label) {
    label = (
      <View style={Styles.warningMessage}>
        <Text style={Styles.labelText}>{props.config.elementConfig.label}</Text>
      </View>
    );
  }

  return (
    <FormControl isRequired={props.config.validation.required} isInvalid={invalid}>
      <View style={Styles.formContainer}>
        {label}
        {inputElement}
        {subtitleMessage}
        {warningMessage}
        {errorMessage}
      </View>
    </FormControl>
  );
};

const Styles = StyleSheet.create({
  container: {},
  formContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  pickerContainer: {
    height: 53,
    borderRadius: 5,
    borderWidth: 0.9,
    borderColor: ColorTheme(4),
    justifyContent: 'center',
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: ColorTheme(2),
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.4,
    borderColor: 'purple',
    borderRadius: 8,
    color: ColorTheme('black'),
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  warning: {
    marginTop: 10,
    marginLeft: 10,
    color: '#ffcc00',
  },
  phone: {
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
    borderColor: ColorTheme(4),
  },
  hiddenInput: {
    width: 0,
    height: 0,
  },
  rightButtonsContainer: {
    height: 58,
    marginRight: 3,
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    backgroundColor: ColorTheme(6),
    borderColor: ColorTheme('gray'),
  },
  autocompleteContainer: {
    borderColor: 'purple',
    borderRadius: 20,
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxText: {
    fontSize: 12,
    marginLeft: 5,
    color: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningMessage: {
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  warningMessageText: {
    margin: 5,
    fontSize: 12,
    marginLeft: 4,
    color: '#FAC213',
  },
  labelText: {
    fontSize: 12,
    marginTop: 6,
    color: 'white',
    marginBottom: 1,
  },
  selectItem: {
    borderRadius: 5,
    marginBottom: 5,
  }
});