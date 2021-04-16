import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button, Modal} from 'react-native'

import Alphabet from '../dictionaries/JapaneseAlphabet'
import Consonants from '../dictionaries/Consonants'
import CharacterTile from './CharacterTile'

//Args: Database being used
const FlashCards = ({ alphabetUsed }) => {
    const [character, setCharacter] = useState(null);
    const [romanji, setRomanji] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [buttons, setButtons] = useState([]);
    const [modalVisible, setModalVisible] = useState(false); 

    //Goal.. have function generate everything at once, then return everything

    //arg1: key - alphabet to be used
    const generateCharacter = (key) =>{
        var newCharacter = [];
        newCharacter[1] = Consonants[Math.floor(Math.random() * Consonants.length)];        //generate consonant
        newCharacter[2] = Math.floor(Math.random() * 5);   //generate vowel
        newCharacter[0] = Alphabet[key][newCharacter[1]][newCharacter[2]];

        if (!newCharacter[0])
        {
            newCharacter = generateCharacter(key);  //in case we get a blank, reroll new character
        }
        if (key == alphabetUsed)  //Check to see if its the main character
        {
            //Need to set first element of newCharacter because if "", it returns an array when evaluting a question character
            setCharacter(newCharacter[0]);
            console.log(newCharacter);  //DEBUG
            return [newCharacter[0], newCharacter[1], newCharacter[2]];
        }
        return newCharacter[0];

    }

    //Check if answers are same
    const checkSame = (answers, answerLoc) =>
    {
        var checkedArray = answers
        for (var i = 0; i < answers.length -1; i ++)
        {
            for (var j = i + 1; j < answers.length; j++)
            {
                if (answers[i] == answers[j] && i != answerLoc)
                {
                    checkedArray[i] = generateCharacter('Romanji');
                }
                else if (answers[i] == answers[j] && i == answerLoc)
                {
                    checkedArray[j] == generateCharacter('Romanji');
                }
            }
        }
        return checkedArray;
    }

    const checkAnswer = (value) => {
        if (value == answer)
        {
            //ding
            flashcard(); 
        }
        else{
            setModalVisible(true);
        }
    }

    //Main game function
    const flashcard = () => {
        //Generate Question
        var answerCharacter = generateCharacter(alphabetUsed);
        var answerLocation = Math.floor(Math.random() * 4);
        //Generate Random Answers
        var randomAnswers = [];
        randomAnswers[answerLocation] = Alphabet['Romanji'][answerCharacter[1]][answerCharacter[2]];
        for (var i =0; i < 4; i++)
        {
            if (!randomAnswers[i])
            {
                randomAnswers[i] = generateCharacter('Romanji');
            }
        }
        randomAnswers = checkSame(randomAnswers);
        console.log(randomAnswers)  //DEBUG
        setButtons(randomAnswers);
        setAnswer(answerLocation);
        setRomanji(randomAnswers[answerLocation]);
        
    }


    useEffect(() => {
        flashcard();
    }, [])

    return (<View>
        <View style = {styles.tile}>
            <CharacterTile value = {character}/>
        </View>

        <Button title = "Refresh" onPress = {flashcard} />

        <TouchableOpacity style = {styles.button} onPress = {() => checkAnswer(0)}>
            <Text style = {styles.text}>{buttons[0]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button} onPress = {() => checkAnswer(1)}>
            <Text style = {styles.text}>{buttons[1]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button} onPress = {() => checkAnswer(2)}>
            <Text style = {styles.text}>{buttons[2]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button} onPress = {() => checkAnswer(3)}>
            <Text style = {styles.text}>{buttons[3]}</Text>
        </TouchableOpacity>

        <Modal 
            animationType = "none"
            transparent = {true}
            visible = {modalVisible}
        >
            <TouchableOpacity style= { styles.modalView} onPress = {()=> {setModalVisible(!modalVisible); flashcard()}}>
                <Text style = {styles.modalIncorrect}>Incorrect</Text>
                <Text style = {styles.modalText}>{character} = {romanji}</Text>
            </TouchableOpacity>

        </Modal>
        
    </View>)
}

const styles = StyleSheet.create({
    tile: {
        alignItems: 'center',
        margin: 20
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        borderWidth: 1,
        margin: 10,
        padding: 10
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalText:{
        fontSize: 25
    },
    modalIncorrect:{
        fontSize:20
    }
});

export default FlashCards