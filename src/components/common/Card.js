import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Card = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.3,
        elevation: 2,
        marginHorizontal: 5,
        marginTop: 10
    }
});

export default Card;