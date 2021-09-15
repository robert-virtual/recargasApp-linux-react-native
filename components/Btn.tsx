import React from 'react'
import { View, Button, StyleSheet, NativeSyntheticEvent, NativeTouchEvent } from 'react-native'

interface Props {
    title:string
    onClick:(e:NativeSyntheticEvent<NativeTouchEvent>)=>void
}

const Btn:React.FC<Props> = ({title,onClick}) => {

    return (
        <View style={style.btn}>
            <Button 
                onPress={onClick}
                title={title}/>
        </View>
    )
}
const style = StyleSheet.create({
    btn:{
        margin:10
    }
})
export default Btn