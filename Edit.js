import React, {useState} from 'react';
import {Alert, StyleSheet, Button, Text, View, TextInput} from 'react-native';
import {datasource} from './Data.js';

const styles = StyleSheet.create({
    bottonsbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10,
    },
});

const Edit = ({navigation, route}) => {
    const [letter, setLetter] = useState(route.params.key);

    return (
        <View>
            <Text>Letter:</Text>
            <TextInput
            value={letter} 
            style={{borderWidth: 1, maxLength: 1}}
            onChangeText={ (text) => setLetter(text)}>
            </TextInput>

            <View style={styles.bottonsbox}>
                <View style={{flex: 1, marginRight: 20}}>
                    <Button title='Save'
                    onPress={ () => {
                        let indexnum = 1;
                        if (route.params.type === 'Vowels') {
                            indexnum = 0;
                        }

                        datasource[indexnum].data[route.params.index].key = letter;
                        navigation.navigate("Home");
                    }}/>
                </View>
                
                <View style={{flex: 1}}>
                    <Button title='Delete'
                    onPress={() => {
                        let indexnum = 1;
                        if (route.params.type === 'Vowels') {
                            indexnum = 0;
                        }

                        Alert.alert("Are you sure?", '',
                        [{text: 'Yes', onPress: () => {
                            datasource[indexnum].data.splice(route.params.index, 1);
                            navigation.navigate("Home");
                        }},
                        {text: 'No'}]);
                    }}/>
                </View>
            </View>
        </View>
    );
};

export default Edit;