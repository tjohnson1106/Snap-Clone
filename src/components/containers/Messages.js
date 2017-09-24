import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { AddMessage } from '../presentation/';

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

    addMessage(){
        alert('Message Added')
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
            <View style={styles.main}>
            <FlatList
                keyExtractor={(item)=>item.id}
                style={StyleSheet.main}
                data={this.state.messages}
                renderItem={({ item }) => this._renderMessage(item)}
            />
            <AddMessage addMessage={()=>this.addMessage()}/>
            </View>

        )
    }
}

const styles=StyleSheet.create({
    main:{
        width:100+'%', 
        height:100+'%'
    },
    message:{
        width:100+'%',
        borderBottomWidth:1,
        borderColor: 'rgb(71,77,89)'
    },
    messageText:{
        color: 'rgb(12,0,51)',
        fontFamily:'helvetica',
        fontSize: 14

    }
})

export default Messages