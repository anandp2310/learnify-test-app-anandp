import React, { useEffect, useState } from 'react'
import FormOTPVerifyPage from '../components/forms/formOTPVerifyPage';
 

export default function OTPVerifyPage(props: any) {
    const [num, setNum] = useState("")
    const [form, setForm] = useState({
        otp1: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: '',
                help: '',
                default: '+91',
            },
            value: '',
            validation: {
                required: false,
                minLength: 13,
            },
            valid: true,
            verified: false,
            touched: false,
        },
        otp2: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: '',
                help: '',
                default: '+91',
            },
            value: '',
            validation: {
                required: false,
                minLength: 13,
            },
            valid: true,
            verified: false,
            touched: false,
        },
        otp3: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: '',
                help: '',
                default: '+91',
            },
            value: '',
            validation: {
                required: false,
                minLength: 1,
            },
            valid: true,
            verified: false,
            touched: false,
        },
        otp4: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: '',
                help: '',
                default: '+91',
            },
            value: '',
            validation: {
                required: false,
                minLength: 1,
            },
            valid: true,
            verified: false,
            touched: false,
        },
        formIsValid: false,
    })
    

    const inputChangeHandler = (event: any, controlName: string) => {
        const updatedForm: any = {
            ...form,
        };

        const updatedControl = {
            ...updatedForm[controlName],
        };

        updatedControl.value = controlName === 'phone' ? event : event.nativeEvent.text;

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
       // props.navigation.navigate('OTPVerifyPage');
       
    };

    useEffect(() => {
      setNum(props.route.params.num);
    }, [props&&props.route&& props.route.params])
    
    return (
        <FormOTPVerifyPage
        formConfig={form}
        inputChangeHandler={inputChangeHandler}
        submitHandler={submitHandler}
        num={num}
        />
    );
};