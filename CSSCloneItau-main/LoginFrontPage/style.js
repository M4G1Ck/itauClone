import { StyleSheet } from "react-native";


export default StyleSheet.create({

      container:{
        //borderWidth:5,
        flexDirection:'column',
        justifyContent:'flex-start',
        //backgroundColor:'black',
        width: '100%',
        height: 720
      },   
      header:{
        justifyContent:'flex-start',
        backgroundColor:'#df6202',
        width: '100%',
        height: 220
      },
      textUser:{
        color: 'white',
        fontSize: 19,
        fontWeight:'bold',
        left: 50,
        bottom: 35
      },
      textSaldo:{
        left:40,
        bottom:60,
        color:'white'
      },

      textValor:{
        width:'95%',
        color:'white',
        fontSize:25,
        left: 5,
        bottom: 40, 
        fontWeight:'bold',
        borderWidth:1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth:0,
        borderBottomColor:'white'
      },
      textLis:{
        color:'white',
        left:5,
        bottom: 35,
      },
})