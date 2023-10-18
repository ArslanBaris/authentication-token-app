import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthForm from './AuthForm'
import ButtonWhite from './ButtonWhite'

export default function AuthContent({ isLogin }) {
    return (
        <View style={styles.container} >
            <AuthForm isLogin={isLogin} />
            <View style={styles.button} >
                <ButtonWhite>
                    {isLogin ?
                        "New User" : "Login"}
                </ButtonWhite>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"blueviolet",
        marginTop:50,
        marginHorizontal:30,
        padding:15,
        borderRadius:20,
        elevation:20,
        shadowColor:"black",
        shadowOpacity:1,
        shadowRadius:4,
        shadowOffset:{ width:1, height:2 }
    },
    button:{
        marginTop:10
    }
})