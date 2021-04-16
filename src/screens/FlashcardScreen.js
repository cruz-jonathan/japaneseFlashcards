import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const FlashcardScreen = ({navigation}) =>
{
    return (<View>
        <TouchableOpacity style={styles.hiragana} onPress = {() =>navigation.navigate('HiraganaFlash')}>
            <Text style = {styles.buttonTitles}>Test Hiragana</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.katakana} onPress = {() =>navigation.navigate('KatakanaFlash')}>
        <Text style = {styles.buttonTitles}>Test Katakana</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.verbs} onPress = {() =>navigation.navigate('VerbFlash')}>
        <Text style = {styles.buttonTitles}>Test Verbs</Text>
        </TouchableOpacity>
    </View>)
}


const styles = StyleSheet.create({
    buttonTitles: {
        fontSize: 20
    },
    hiragana:{
        backgroundColor: "#9CF6F6",
        paddingVertical: 20,
        alignItems: "center"
    },
    katakana:{
        backgroundColor: "#F56960",
        paddingVertical: 20,
        alignItems: "center"
    },
    verbs:{
        backgroundColor: "#FFDAC1",
        paddingVertical: 20,
        alignItems: "center"
    }
})

FlashcardScreen.navigationOptions =  {
    title: 'Flashcard Screen'
}

export default FlashcardScreen