import React, { Component } from 'react'
import { Image } from 'react-native'

export default class Corpo extends Component{
    render(){
        let img = {uri:'https://i.pinimg.com/236x/56/cc/4a/56cc4afe5b46ba2e089c8e2ba2bbe897.jpg'}
        return(
            <Image
                source={img}
                style={ {width:100, height:100} }
            />
        )
    }
}