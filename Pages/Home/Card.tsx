import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

interface Props {
    paq:{
        cod: string;
        description: string;
        duration: string;
        price: number;
        title: string;
    }
}

const Card:React.FC<Props> = ({paq}) => {

    return (
        <View style={style.card}>
            <Text>{paq.title}</Text>
            <Text>{paq.description}</Text>
            <Text>{paq.duration}</Text>
            <Text>{paq.price}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    card:{
        padding:10,
        backgroundColor:'white',
        elevation:1,
        borderRadius:10,
        margin:10
    }
})
export default Card