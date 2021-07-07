import React from 'react';
import { View, Text, FixedBottom } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import HeaderStyle from './style';
import Icon from 'react-native-vector-icons/FontAwesome/';
import Scroll from '../Componentes/ScrollView/index';
import ScrollCard from '../Componentes/ScrollCards/index';



export default function FrontPage({ navigation }) {

    /* const cards = [
        {nome:"icons",key:"1"},
        {nome:"pic",key:"2"},
        {nome:"mastercard", key:"3"},
        {nome:"credito", key:"4"},
        {nome:"myinvest", key:"5"},
    ]; */

    return (

        <View style={HeaderStyle.container}>
            <View style={HeaderStyle.header}>
                <Icon name="user-circle" size={40} color="white" />
                <Text style={HeaderStyle.textUser}>Jaiminho</Text>
                <Icon name="search" size={20} color='white'
                    style={{ left: 310, bottom: 60 }} />
                <Icon name="bell-o" size={20} color='white'
                    style={{ left: 350, bottom: 80 }} />
                <Icon name="angle-down" size={20} color='white'
                    style={{ left: 135, bottom: 100 }} />
                <Icon name="eye-slash" size={20} color='white'
                    style={{ left: 5, bottom: 40 }} />
                <Text style={HeaderStyle.textSaldo}>saldo em conta</Text>
                <Text style={HeaderStyle.textValor}>R$ 100,00</Text>
                <Icon name="repeat" size={15} color='white'
                    style={{ left: 360, bottom: 70 }} />
                <Text style={HeaderStyle.textLis}>cheque especial disponível R$ 1.000,00</Text>
                <Icon name='chevron-right' size={10} color='white'
                    style={{ left: 360, bottom: 50 }} />
            </View>
            <Scroll/>
                <ScrollCard/>
        </View>
    )
}