import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Modal } from 'react-native'
import { AddMessage } from '../presentation/'
import Turbo from 'turbo360'
import config from '../../config'

class Messages extends Component {

    constructor() {
        super()
        this.state = {
            messages: [
            ],
            modalVisible: true
        }
    }

    componentDidMount(){
        Turbo({site_id: config.TURBO_APP_ID}).fetch('message', {for: 'Trump'})
        .then((data)=>{
            this.setState({
                messages: data,

            })
        })
    }

    addMessage(){
        Turbo({site_id: config.TURBO_APP_ID}).create('message', { id: 5, for: 'Puppet', from: 'Trump', content: 'Youre really really fucked' })
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
                <Modal
                  transparent={true}
                  visible={this.state.modalVisible}>
                  <View style={styles.modal}>
                      <View style={styles.login}>

                      </View>

                  </View>
                 </Modal>
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

    },
    modal: {
        width:100+'%',
        height:100+'%',
        backgroundColor:'rgba(0,0,0,.85)'
    },
    login: { 
        width:90+'%',
        height:50+'%',
        backgroundColor: 'rgb(225,255,255)'
    }
})

export default Messages