import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

export default function Tarefa({ data, deleteItem }) {

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button}>
                <FontAwesome name="trash" size={20} color="#22272E" onPress={deleteItem}/>
            </TouchableOpacity>

            <Text>{data.item}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(196,196,196, 0.30)',
        // backgroundColor: 'rgba(207,207,207, 0.80)',
        marginTop: 12,
        padding: 12,
        borderRadius: 4,
        flexDirection: 'row'
    },

    button:{
        marginRight: 8,
    },
})