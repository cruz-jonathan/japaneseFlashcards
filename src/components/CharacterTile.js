import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const CharacterTile = ({value}) => 
{
    return (<View>
        <Text style = {styles.tile}>{value}</Text>
    </View>)
}

const styles = StyleSheet.create({
    tile:{
        fontSize: 60,
        borderWidth: 1,
        width:70,
        textAlign: 'center'
    }
});

export default CharacterTile