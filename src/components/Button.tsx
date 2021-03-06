import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '../../styles/colors';

interface ButtonProps extends TouchableOpacityProps{
    title: string
}

export function Button({title}:ButtonProps){
  
    return(
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        marginBottom: 10,
        width: 56,
        height: 56,
    },
    buttonText: {
        fontSize: 24,
        color: colors.white,
        textAlign: 'center',
    },
})