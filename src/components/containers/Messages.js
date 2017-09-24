import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { AddMessage } from '../presentation/'
import Turbo from 'turbo360'
import config from '../../config'

class Messages extends Component {

    constructor() {
        super()
        this.state = {
            messages: [
            ]
        }
    }

    componentDidMount(){
        Turbo({site_id: config.TURBO_APP_ID}).fetch('message')
        .then((data)=>{
            this.setState({
                messages: data
            })
        })
    }

    addMessage(){
        Turbo({site_id: config.TURBO_APP_ID}).create('message', { id: 5, from: 'Trump', content: 'Youre really really fucked' })
        .then((data)=>{
            let newMessages = Object.assign([], this.state.messages)
            newMessages.push(data)
            this.setState({
                messages: newMessages

            })
        })
        .catch((err)=>{
            alert(err.message)
        })
    
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