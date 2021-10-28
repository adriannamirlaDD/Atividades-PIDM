import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Aluno extends Component{
    render(){
        return(
            <View>
                <Text>Nome: <strong>{this.props.nome}</strong></Text>
                <Text>Curso: <strong>{this.props.curso}</strong></Text>
                <Text>Cidade: <strong>{this.props.cidade}</strong></Text>
                <Text>Idade: <strong>{this.props.idade}</strong></Text>
            </View>
        )
    }
}