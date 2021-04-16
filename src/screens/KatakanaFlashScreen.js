import React from 'react'
import {View, StyleSheet} from 'react-native'

import FlashCards from '../components/FlashCards'

const KatakanaFlashScreen = () => 
{
    return (<View>
        <FlashCards alphabetUsed = {'Katakana'}/>
    </View>)
}

const styles = StyleSheet.create({});

KatakanaFlashScreen.navigationOptions =  {
    title: 'Katakana Flashcards'
}

export default KatakanaFlashScreen;