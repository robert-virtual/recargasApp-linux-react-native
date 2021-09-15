import React from 'react'
import { View,Text, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native'

interface Props {
    placeholder?:string
    title?:string
    maxLength?:number
    keyboardType?:KeyboardTypeOptions
}

const Input:React.FC<Props> = ({
    placeholder,
    keyboardType,
    title,
    maxLength
}) => {

    return (
        <View style={style.box}>
            <Text 
                style={style.title}>
                {title || placeholder || 'Valor'}
            </Text>
            <TextInput
                maxLength={maxLength || 8}
                keyboardType={keyboardType || 'numeric'}
                placeholder={placeholder || 'Escriba aqui...'} 
                style={style.input}/>
        </View>
    )
}

const style = StyleSheet.create({
    box:{
        marginHorizontal:10,
        width:'80%',
        marginVertical:10
    },
    title:{
        color:'#444'
    },
    input:{
        backgroundColor:'white',
        padding:10,
        width:'100%',
        fontSize:20
    }
})
export default Input