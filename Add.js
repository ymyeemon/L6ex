import React, {useState} from 'react';
import {Button, Text, View, TextInput} from 'react-native';
import {datasource} from './Data.js';
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const [letter, setLetter] = useState('');
    const [type, setType] = useState('');

    return (
        <View>
            <Text>Letter:</Text>
            <TextInput 
            style={{borderWidth: 1, maxLength: 1}}
            onChangeText={ (text) => setLetter(text)}>
            </TextInput>

            <RNPickerSelect
            onValueChange={(value) => setType(value)}
            items= {[
                {label: 'Vowels', value: 'vowels'},
                {label: 'Consonants', value: 'consonants'},
            ]}/>

            <Button title='Submit'
            onPress={ () => {
                let item = {key: letter};
                let indexnum = 1;
                if (type === 'vowels') {
                    indexnum = 0;
                }
                datasource[indexnum].data.push(item);
                navigation.navigate("Home");
            }}/>
        </View>
    );
};

export default Add;