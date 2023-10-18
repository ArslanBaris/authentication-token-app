import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthForm from './AuthForm'
import ButtonWhite from './ButtonWhite'
import { useNavigation } from '@react-navigation/native'

export default function AuthContent({ isLogin }) {

    const navigation = useNavigation()
    const switchScreen = () => {
       if(isLogin){
        navigation.navigate("SignUp")
       }else{
        navigation.navigate("Login")
       }
    }

    return (
        <View style={styles.container} >
            <AuthForm isLogin={isLogin} />
            <View style={styles.button} >
                <ButtonWhite onPress={switchScreen}>
                    {isLogin ?
                        "Sign Up" : "Sign In"}
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