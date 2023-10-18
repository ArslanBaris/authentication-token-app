import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({label,value,keyboardType,secure,onUpdateValue}) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput 
        value={value}
        autoCapitalize='none'
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        secureTextEntry={secure}
      />
    </View>
  )
}

const styles = StyleSheet.create({})