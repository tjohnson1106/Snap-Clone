import React, { Component } from 'React';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import config from '../../config';

class AddMessage extends Component{
    render(){
        return(
            <TouchableOpacity 
            onPress={this.props.AddMessage}
            style={styles.circle}>
                <Image source={config.images.plus}/>
             </TouchableOpacity>
            
        )
    }
}

const styles = StyleSheet.create({
    circle: {
        width:70,
        height: 70,
        borderRadius:40,
        backgroundColor: 'rgb(98,195,112)',
        position: 'absolute',
        bottom:10,
        right:10,
        alignItems:'center',
        justifyContent:'center'

    }
})

export default AddMessage
