import { NavigationContainer, RouteProp } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from '../Pages/Home'
import Setting from '../Pages/Settings'
import { MainPages } from './types'

interface Props {
    navigation:NativeStackNavigationProp<MainPages,'Home'>
    route:RouteProp<MainPages,'Home'>
}

const Stack = createNativeStackNavigator<MainPages>()

const MainRoutes:React.FC = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={Home}
                    options={({navigation,route}:Props)=>({
                        title:"RecargasApp",
                        headerRight:()=>(
                            <TouchableOpacity
                                onPress={()=> navigation.navigate('Settings')}
                                >
                                <Icon 
                                    name="cog"
                                    size={25}
                                    />
                            </TouchableOpacity>
                        )
                    })}
                    />
                <Stack.Screen
                    options={{
                        title:"Ajustes"
                    }} 
                    name="Settings" 
                    component={Setting}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoutes