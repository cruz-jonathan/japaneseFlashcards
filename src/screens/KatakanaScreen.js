import React from 'react'
import { View, StyleSheet } from 'react-native'

import Alphabet from '../dictionaries/JapaneseAlphabet';
import AlphabetLayout from '../components/AlphabetLayout';

const KatakanaScreen = () => {
    return (<View>
        <AlphabetLayout value = {Alphabet['Katakana']}/>
    </View>)
}

KatakanaScreen.navigationOptions =  {
    title: 'Katakana Alphabet'
}


const styles = StyleSheet.create({})

export default KatakanaScreen;