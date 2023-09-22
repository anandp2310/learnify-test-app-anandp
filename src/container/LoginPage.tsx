import React, { useEffect, useState } from 'react'
import FormLoginPage from '../components/forms/formLoginPage';
import { Toast } from '../shared/toast';
import { Keyboard } from 'react-native';


export default function LoginPage(props: any) {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        phone: {
            elementType: 'input',
            elementConfig: {
                type: 'phone',
                placeholder: 'Phone Number',
                warning: 'Enter Valid PhoneNumber',
                help: '',
                default: '+91',
            },
            value: '',
            validation: {
                required: true,
                minLength: 13,
            },
            valid: false,
            verified: false,
            touched: false,
        },
        formIsValid: false,
    })

    const checkValidity = (value: string, rules: any) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        return isValid;
    };

    const inputChangeHandler = (event: any, controlName: string) => {
        const updatedForm: any = {
            ...form,
        };

        const updatedControl = {
            ...updatedForm[controlName],
        };

        updatedControl.value = controlName === 'phone' ? event : event.nativeEvent.text;

        updatedControl.valid = checkValidity(updatedControl.value, updatedControl.validation);
        updatedControl.touched = true;

        updatedForm[controlName] = updatedControl;

        let formIsValid = true;
        for (const formControl in updatedForm) {
            if (formControl !== 'formIsValid') {
                formIsValid = updatedForm[formControl].valid && formIsValid;
            }
        }
        updatedForm.formIsValid = formIsValid;
        setForm(updatedForm);
    };

    const submitHandler = (value: string, rules: any) => {
        setLoading(true);
        Keyboard.dismiss();
        setTimeout(function () {
            setLoading(false);
            Toast("OTP send successfull",1);
            props.navigation.navigate('OTPVerifyPage', { num: form.phone.value });
        }, 1000); 
        

    };

    return (
        <FormLoginPage
            formConfig={form}
            inputChangeHandler={inputChangeHandler}
            submitHandler={submitHandler}
            loading={loading}
        />
    );
};