import React, { useState } from 'react'
import { View,ScrollView, Text, FlatList, StyleSheet} from 'react-native'
import {data} from "../../assets/data.json";
import Btn from '../../components/Btn';
import Input from '../../components/Input';
import Card from './Card';
interface Props {

}

const Paquetes:React.FC<Props> = ({}) => {
    const [category, setCategory] = useState(data[0].data)
    return (
        <View>
            <ScrollView horizontal>
                {
                    data.map(({name,data})=> (
                        <Btn title={name} onClick={()=> setCategory(data)}/>
                    ))
                }
            </ScrollView>
            {/* <FlatList
            contentContainerStyle={style.list}
                data={category}
                renderItem={({item:paq})=> <Card key={paq.cod} paq={paq}/>}
            /> */}
            <ScrollView>
                {
                    category.map(paq => <Card key={paq.cod} paq={paq}/>)
                }
            </ScrollView>
        </View>
    )
}
const style = StyleSheet.create({
    list:{
        // paddingBottom:10,
    }
})
export default Paquetes