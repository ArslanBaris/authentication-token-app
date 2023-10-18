import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({label,value,keyboardType,secure,onUpdateValue}) {
  return (
    <View style={styles.inputContainer} >
      <Text style={styles.labelContainer} >{label}</Text>
      <TextInput 
        style={styles.input}
        value={value}
        autoCapitalize='none'
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        secureTextEntry={secure}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginVertical:8
    },
    labelContainer:{
        color:"white",
        marginBottom:3,

    },
    input:{
        backgroundColor:"pink",
        paddingVertical:8,
        paddingHorizontal:10,
        borderRadius:20,
        fontSize:16,


    }
})