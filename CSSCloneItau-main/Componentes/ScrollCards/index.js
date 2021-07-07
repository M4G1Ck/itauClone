import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Divider } from 'react-native-elements'
import StyleCard from './style';
import Icon from 'react-native-vector-icons/FontAwesome/';

export default function ScrollCard() {

    return (

        <View style={StyleCard.mainContainer}>
            <ScrollView
                decelarationRate="normal"
                contentContainerStyle={StyleCard.contentContainer}
                showsVerticalScrollIndicator={true}>
                <Card containerStyle={{ height: 170 }}>
                    <Text style={StyleCard.cardMasterTitle}>Itaucard Universitario</Text>
                    <Text style={StyleCard.cardMasterTitle}>Mastercard International</Text>
                    <Text style={{ color: 'gray', left: 250, bottom: 40, fontSize: 13 }}>expandir</Text>
                    <Icon name="chevron-down" size={10} color='gray' style={{ left: 310, bottom: 55 }} />
                    <Image source={require('../../assets/master.png')} style={{ bottom: 25, right: 10 }} />
                    <Card.Divider />
                    <Text style={{ left: 60, bottom: 70, fontSize: 13, color: 'gray' }}> final 2785</Text>
                    <Text style={{ fontSize: 15, color: '#2c6e9e', bottom: 25, left: 5 }}>ver fatura</Text>
                    <Text style={{ fontSize: 15, color: '#2c6e9e', bottom: 45, left: 110 }}>cartão virtual</Text>
                </Card>
                <Card containerStyle={{ height: 170 }}>
                    <Text style={{ fontSize: 25, color: 'black' }}>crédito</Text>
                    <Text style={{ color: 'gray', left: 250, bottom: 30, fontSize: 13 }}>expandir</Text>
                    <Icon name="chevron-down" size={10} color='gray' style={{ left: 310, bottom: 45 }} />
                    <Text style={{ fontSize: 15, color: '#2c6e9e', top: 30, left: 5 }}>ver mais</Text>
                    <Card.Divider/>
                </Card>
                <Card containerStyle={{ height: 150,marginBottom:50}} >
                    <Text style={{ fontSize: 25, color: 'black', width: 200 }}>meus investimentos</Text>
                    <Text style={{ color: 'gray', left: 250, bottom: 60, fontSize: 13 }}>expandir</Text>
                    <Icon name="chevron-down" size={10} color='gray' style={{ left: 310, bottom: 75 }} />
                    <Card.Divider />
                    <Text style={{ fontSize: 15, color: '#2c6e9e', bottom: 10, left: 5 }}>ver detalhes</Text>
                </Card>
            </ScrollView>
            <View style={StyleCard.footer}>
                <Icon name='home' size={40} color={'#ff7200'} style={StyleCard.homeIcon} />
                <Icon name='list' size={20} color={'#ff7200'} style={{ left: 70, top: 15 }} />
                <Text style={{ fontSize: 12, top: 40, left: 40 }}>extrato</Text>
                <Icon name='btc' size={30} color={'#ff7200'} style={{ left: 100, top: 10 }} />
                <Text style={{ fontSize: 12, top: 40, left: 60 }}>transações</Text>
                <Icon name='th' size={25} color={'#ff7200'} style={{ left: 100, top: 15 }} />
                <Text style={{ fontSize: 12, top: 40, left: 65 }}>serviços</Text>
                <Icon name='info' size={25} color={'#ff7200'} style={{ left: 110, top: 15 }} />
                <Text style={{ fontSize: 12, top: 40, left: 90 }}>ajuda</Text>
            </View>
        </View>
    )
}