import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, textButton }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.buttonStyle}
        >
            <Text style={styles.textStyle}>
                {textButton}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginHorizontal: 5,
        marginVertical: 5
    },
    textStyle: {
        fontSize: 16,
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '600',
        paddingVertical: 10
    }
})

export default Button;