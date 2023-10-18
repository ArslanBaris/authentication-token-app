import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'

export default function AuthForm({ isLogin }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const updateInput = (key, value) => {
        switch (key) {
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)
                break;
            default:
                break;
        }
    }

    return (
        <View>
            <Input
                label="Email"
                value={email}
                keyboardType="email-address"
                onUpdateValue={() => { updateInput("email") }}
            />
            <Input
                label="Password"
                value={password}
                secure
                onUpdateValue={() => { updateInput("password") }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})