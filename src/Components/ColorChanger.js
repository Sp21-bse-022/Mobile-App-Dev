import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,Button } from "react-native";
import { useState } from "react";

export default function ColorChanger(props) {
const[red, setRed] = useState(0);
const[green, setGreen] = useState(0);
const[blue, setBlue] = useState(0);

    return (
        <View>
            <Text>{props.color}</Text>
            <Button title="Increse"
            onPress={()=> props.onIncrease()}/>
            <Button title="Decrease"
            onPress={()=> props.onDecrese()}/>
        </View>
    )
}
    const styles = StyleSheet.create({


     } );