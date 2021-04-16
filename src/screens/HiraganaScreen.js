import React from 'react'
import { View, StyleSheet} from 'react-native'

import Alphabet from '../dictionaries/JapaneseAlphabet';
import AlphabetLayout from '../components/AlphabetLayout';

const HiraganaScreen = () => {
    return (<View>
        <AlphabetLayout value = {Alphabet['Hiragana']}/>
    </View>)
}

HiraganaScreen.navigationOptions =  {
    title: 'Hiragana Alphabet'
}


const styles = StyleSheet.create({})

export default HiraganaScreen;
