import React from 'react';
import { Button } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';
import { ColorTheme } from './Colors';

const ButtonNB = (props: any) => {
    return (
        <Button
            size={props.size}
            style={props.style}
            variant={props.variant}
            onPress={props.onPress}
            colorScheme={props.color}
            disabled={props.disabled}
            isLoading={props.isLoading}
            isLoadingText={props.isLoadingText}
        >
            <View style={styles.container}>
                {props.icon}
                <Text style={{
                    marginLeft: 10, marginRight: 10, color: props.txtColor ? props.txtColor : ColorTheme(6), fontSize: 18,
                    fontWeight: "bold"
                }}>
                    {props.text}
                </Text>
            </View>
        </Button>
    );
};

export default ButtonNB;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    text: {
        marginLeft: 10,
        marginRight: 10,
        color: ColorTheme(6),
    },
});