import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

class Messages extends Component {

    constructor() {
        super()
        this.state = {
            messages: [
                { id: 1, from: 'Mom', content: 'How are you' },
                { id: 2, from: 'Father', content: 'Hello' },
                { id: 3, from: 'Puppet', content: 'Let me get that' },
                { id: 4, from: 'Lydia', content: 'what up' },
                { id: 5, from: 'Trump', content: 'Youre fucked' }
            ]
        }
    }

    _renderMessage(item) {
        return (
            <View>
                <Text style={[{paddingTop:3}, styles.messageText]}>
                    From: {item.from}
                </Text>
                <Text style={[{paddingBottom:5}, styles.messageText]}>
                    {item.content}
                </Text>
            </View>
        )
    }



    render() {
        return (
            <FlatList
                style={StyleSheet.main}
                data={this.state.messages}
                renderItem={({ item }) => this._renderMessage(item)}
            />

        )
    }
}

const styles=StyleSheet.create({
    main:{

    },
    message:{
        width:100+'%',
        borderBottomWidth:1,
        borderColor: 'rgb(71,77,89)'
    },
    messageText:{
        color: 'rgb(71,77,89)'
    }
})

export default Messages