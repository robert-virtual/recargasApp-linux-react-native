import React from 'react'
import {Button, Text } from 'react-native'
import Box from '../components/Box'
import Input from '../components/Input'

interface Props {

}

const Setting:React.FC<Props> = ({}) => {

    return (
        <Box>
            <Input 
                placeholder="Pin"/>
                
            <Button 
                title="Guardar" 
                onPress={()=>''}/>
        </Box>
    )
}

export default Setting