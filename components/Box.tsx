import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

interface Props {

}

const Box:React.FC<Props> = ({children}) => {

    return (
        <View style={style.box}>
            {children}
        </View>
    )
}
const style = StyleSheet.create({
    box:{
        flex:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
})
export default Box