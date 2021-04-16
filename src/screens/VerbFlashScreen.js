import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VerbFlashScreen = () => {
    const ngrokUrl = "http://91e48720f328.ngrok.io";

    const [data, setData] = useState(null);

    const getData = () => {
        axios.get(ngrokUrl+"/dictionary/verbs")
            .then(response => {
                console.log("getting data", response.data);
                setTimeout(() => {
                    setData(response.data);
                }, 2000)
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        getData()
    }, [])

    return (<View>
        <Text>This is the verb flash screen</Text>
    </View>)
}

const styles = StyleSheet.create({});

export default VerbFlashScreen;