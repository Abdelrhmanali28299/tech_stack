import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = ({ headerText }) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 8,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});

export default Header;