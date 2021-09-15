import React from 'react'
import { Button, StyleSheet, Text } from 'react-native'
import Box from '../../components/Box'
import Input from '../../components/Input'

interface Props {

}

const Recargas:React.FC<Props> = ({}) => {

    const handleEnviar = ()=>{
        
    }
    return (
        <Box>
            <Text style={style.title}>Recarga</Text>
            <Input title="Telefono"/>
            <Input 
                title="Monto" 
                maxLength={3}/>
            <Button title="Enviar" onPress={handleEnviar}/>
        </Box>
    )
}
const style = StyleSheet.create({
    title:{
        fontSize:25
    }
})
export default Recargas