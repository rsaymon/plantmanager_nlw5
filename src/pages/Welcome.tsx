import React, { useState } from 'react';
import { Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {Button} from '../components/Button';

import wateringImage from '../assets/watering.png'

export function Welcome(){
    return(
    <SafeAreaView style={styles.container}> 
        <Text style={styles.title}>
            Gerencie
            {'\n'}
            suas plantas{'\n'}
            de forma fácil!
      
        </Text>
        
        <Image source={wateringImage}/>
        
        <Text style={styles.subtitle}>
            Não esqueça mais de regar suas plantas!
            Nós cuidamos de lembrar você sempre que precisar!
        </Text>

        
        <Button title='>'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38

    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.heading,
        paddingHorizontal: 20
    },
    button: {
        backgroundColor: colors.green,
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        padding: 20
    },
    image:{
        width: 292,
        height: 284
    },
    buttonText: {
        fontSize: 24,
        color: colors.white,
        textAlign: 'center',
    },


})