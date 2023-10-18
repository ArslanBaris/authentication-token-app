import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthForm from './AuthForm'
import ButtonWhite from './ButtonWhite'

export default function AuthContent({ isLogin }) {
    return (
        <View>
            <AuthForm isLogin={isLogin} />
            <View>
                <ButtonWhite>
                    {isLogin ?
                        "Sign Up" : "Login"}
                </ButtonWhite>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})