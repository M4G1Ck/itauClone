import React, { useState } from 'react'
import {View, Text, TextInput, Image, TouchableOpacity, Switch  } from 'react-native'
import Estilo from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Home({handlePage}) {

    const [agencia, setAgencia] = useState('');
    const [conta, setConta] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
    
    <LinearGradient colors={["#df6202", "#f79c60"]}>
        <View style={Estilo.container}>
       
            <Image source={require('../assets/logoItau.png')} style={Estilo.logo} />
            <View style={Estilo.boxPix}>
                <Text style={Estilo.text1}>Quer pagar e receber a qualquer hora e de graça ? </Text>
                <Text style={Estilo.text2}>Chegou o Pix com um Itaú de Segurança. Cadastre-se!</Text>
            </View>
            <View>
        <LinearGradient style={Estilo.boxLogin} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors ={["#ec7200", "#f29502"]}>
                <TextInput style={Estilo.inputText1}
                    value={agencia}
                    onChange={(event) => setAgencia(event.nativeEvent.agencia)}
                    placeholder="agência"
                    placeholderTextColor = "white" 
                    />
                <TextInput style={Estilo.inputText2}
                    value={conta}
                    onChange={(event) => setConta(event.nativeEvent.setConta)}
                    placeholder="conta"
                    placeholderTextColor = "white"   //#ffffff
                />
                <Switch  
                    trackColor={{false: "#ffffff", true: "#e06714" }}
                    thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={Estilo.styleSwitch}/>
                <Text style = {Estilo.textAec}>lembrar agência e conta</Text>
                    
                <TouchableOpacity
                    style={Estilo.button}
                    onPress={() => handlePage()}
                >
                    <Text>ok</Text>
                </TouchableOpacity>
                </LinearGradient>
                <Text style ={Estilo.text3}>acessar outra conta</Text>
<LinearGradient style={Estilo.viewLogos}
    start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
    colors ={["#be6c23", "#e06714"]}>
    
        <View>
            <Icon name = "gg" size={30} color ='white'
            style ={{left: 45, top:20}}/> 
                <Text style={{
                    left: 50,
                    top:25,
                    color:'white',
                    fontSize:17,
                    fontWeight:'bold'}}>Pix</Text>
        <Icon name="usb" size={30} color ='white'
            style = {{left:177,bottom:30}}/>
                <Text style={{
                    left:175,
                    bottom:25,
                    color:'white',
                    fontSize:15,
                    fontWeight:'bold'}}>iToken</Text>
        <Icon name = "info-circle" size={30} color ='white'
                style={{left:332,bottom: 80}}/>
            <Text style={{
                left:325,
                bottom: 75, 
                color:'white',
                fontSize:15,
                fontWeight:'bold'}}>ajuda</Text>
    </View>
    </LinearGradient>    
            </View>
        </View>
    </LinearGradient>
    )
}