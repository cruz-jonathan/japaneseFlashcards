import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import FlashCards from '../components/FlashCards'

const HiraganaFlashScreen = () =>
{
    return (<View>
        <FlashCards alphabetUsed = {'Hiragana'}/>
    </View>)
}


const styles = StyleSheet.create({});


HiraganaFlashScreen.navigationOptions =  {
    title: 'Hiragana Flashcards'
}

export default HiraganaFlashScreen