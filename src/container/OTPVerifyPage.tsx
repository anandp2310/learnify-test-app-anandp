import React, { useEffect, useState } from 'react'
import FormOTPVerifyPage from '../components/forms/formOTPVerifyPage';
import { Alert, Keyboard } from 'react-native';


export default function OTPVerifyPage(props: any) {
    const [num, setNum] = useState("");
    const [loading, setLoading] = useState(false);

    const showAlert = () => {
        Alert.alert(
            'Login Successfull',
            'Your details has been submitted',
            [
                {
                    text: 'OK',
                    onPress: () => props.navigation.navigate('LoginPage', { clear: true }),
                },
            ],
            { cancelable: false }
        );
    };

    const submitHandler = () => {
        setLoading(true);
        Keyboard.dismiss();
        setTimeout(async function () {
            setLoading(false);
            showAlert();
        }, 1000);
    };

    useEffect(() => {
        setNum(props.route.params.num);
    }, [props && props.route && props.route.params])

    return (
        <FormOTPVerifyPage
            submitHandler={submitHandler}
            num={num}
            loading={loading}
        />
    );
};