import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Consonants from '../dictionaries/Consonants'
import CharacterTile from '../components/CharacterTile'


const AlphabetLayout = ({value}) =>
{
    return (<FlatList
        data={Consonants}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
            return (
                <View style = {styles.rows}>
                    <FlatList
                        horizontal
                        data={value[item]}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return (<CharacterTile value={item} />)
                        }}
                    />
                </View>
            )
        }}
    />)
}

const styles = StyleSheet.create({
    rows: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 30
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default AlphabetLayout