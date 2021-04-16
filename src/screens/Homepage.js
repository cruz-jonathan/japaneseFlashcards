import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const HomePage = ({ navigation }) => {
    return (<View>
        <TouchableOpacity
            style={styles.hiragana}
            onPress={() => navigation.navigate('HiraganaAlphabet')}
        >
            <Text style = {styles.buttonTitles}>Hiragana Alphabet</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style = {styles.katakana}
            onPress={() => navigation.navigate("KatakanaAlphabet")}
        >
            <Text style = {styles.buttonTitles}>Katakana Alphabet</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style = {styles.flashcards}
            onPress = {() => navigation.navigate("FlashCards")}
        >
            <Text style = {styles.buttonTitles}>Flash Cards</Text>
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
        alignItems: "center",
    },
    katakana:{
        backgroundColor: "#F56960",
        paddingVertical: 20,
        alignItems: "center",
    },
    flashcards:{
        backgroundColor: "#DAA588",
        paddingVertical: 20,
        alignItems: "center",
    },

})

export default HomePage;