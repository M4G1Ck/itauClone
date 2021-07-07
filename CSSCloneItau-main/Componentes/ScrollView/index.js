import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import ScrollStyle from './style'
import Icon from 'react-native-vector-icons/FontAwesome/'; 

export default function Scroll(){

    return(

        <View style = {ScrollStyle.contentContainer}>
            <ScrollView
            decelarationRate="normal"
            horizontal={true}
            contentContainerStyle = {ScrollStyle.contentContainer}
            showsVerticalScrollIndicator = {true}
            //pagingEnabled ={true}
            >
            <View style = {ScrollStyle.logoPix}>
            <Icon name = 'gg' size ={30} color = 'white'
                style={{left:12,top:10}}  />
                 <Text style = {{
                        fontSize: 13,
                        top:30,
                        left:20,
                    }}>Pix</Text>
            </View>
      
            <View style = {ScrollStyle.allViews}>
            <Icon name = 'barcode' size ={30} color = '#ec9034'
                style={{left:15,top: 10}}/>
                <Text style = {{
                        fontSize: 13,
                        top:30,
                        left:10,
                        marginHorizontal: -15
                    }}>pagar conta</Text>
            </View>

            <View style = {ScrollStyle.allViews}>
                <Icon name = 'file-text-o' size ={30} color = '#ec9034'
                    style={{left:15,top:8}}/>
                    <Text style = {{
                        fontSize: 13,
                        top:30,
                        left:5,
                        marginHorizontal: -15
                    }}>comprovantes</Text>
            </View>

            <View style = {ScrollStyle.allViews}>
                <Icon name = 'openid' size ={30} color = '#ec9034'
                    style={{left:15,top:10}}/>
                    <Text style = {{
                        fontSize: 13,
                        top:30,
                        left:10,
                    }}>câmbio</Text>
            </View>

            <View style = {ScrollStyle.allViews}>
            <Icon name = 'mobile' size ={30} color = '#ec9034'
                    style={{left:22,top:10}}/>
                     <Text style = {{
                        fontSize: 13,
                        top:30,
                        left:7,
                    }}>Recarga</Text> 
            </View>

            <View style = {ScrollStyle.allViews}>
                <Icon name = 'plus' size ={30} color = '#ebe8e5'
                style = {{left:17,top:10}}/>
                    <Text style = {{
                        fontSize: 13,
                        top:30,
                        left:10,
                        marginLeft:-15
                    }}>novo atalho</Text>
            </View>               
            </ScrollView>
        </View>
    )
}