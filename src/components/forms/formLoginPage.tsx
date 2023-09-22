import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ColorTheme } from '../../shared/Colors'
import Images from '../../shared/Image'
import { InputControl } from '../../shared/InputControl';
import Button from '../../shared/Button';

export default function formLoginPage(props: any) {
    let formElementArray: any[] = [];

    for (let [key, value] of Object.entries(props.formConfig)) {
        formElementArray.push({ name: key, config: value });
    }

    let formControlsJSX = formElementArray.map((item: any) => {
        return <InputControl key={item.name} name={item.name} config={item.config} onChange={props.inputChangeHandler} />;
    });
    return (
        <View style={styles.container}>
            <View style={styles.containerfull}>
                <View style={styles.header}>
                    <Text style={styles.headertxt}>Log in</Text>
                </View>
                <View style={styles.form}>
                    <Images style={styles.img} source={require('../../assets/Happystudent.gif')} />
                </View>
                <View style={styles.forminput}>
                    {formControlsJSX.slice(0, 1)}
                </View>
                <View>
                    <Button
                        disabled={!props.formConfig.formIsValid}
                        onPress={props.submitHandler}
                        style={props.formConfig.formIsValid?styles.btntrue:styles.btnfalse}
                        isLoading={props.loading}
                        text='Get OTP'/>
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

    },
    btntrue: {
        borderRadius: 30,
        backgroundColor: ColorTheme(0),
        padding: 18,
        marginTop: 30,
        fontSize: 20
    },
    btnfalse: {
        borderRadius: 30,
        backgroundColor: ColorTheme(3),
        padding: 18,
        marginTop: 30
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
    }
})