import { StyleSheet } from 'react-native';


export default StyleSheet.create({

    container:{
      //flex:1,
      //width: '100%',
      flexDirection:'column',
      height: 1000
    },
        
    text1:{
        fontSize: 25,
        fontFamily:'',
        color: '#ffffff',
        fontWeight:'bold'
    },

    text2:{
        fontSize: 20,
        color: '#ffffff',
        position: 'relative',
        top:7,
    },
    text3:{
        fontSize:15,
        color:'white',
        top: 140,
        left:130
    },
    textAec:{
        color:'white',
        top:73,
        right: 290,
        fontSize:15
    },

    inputText1:{
       width: 100,
       borderWidth:1,
       borderLeftWidth: 0,
       borderTopWidth: 0,
       borderRightWidth:0,
       borderBottomColor:'white',
       left: 20,
       top: 10,
       color: 'white'
    },

    inputText2:{
        width: 230,
        borderWidth:1,
        borderBottomColor:'white',
        left:20,
        top: 10,
        color: 'white',
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth:0
    },

    boxPix:{
        width: 345,
        height: 200,
        //borderWidth: 3,
        position: 'relative',
        top: 50,
        left: 20,
        right: 50,
    },

    boxLogin:{
        width: 400,
        height: 200,
        //borderWidth:3,
        //backgroundColor:'#ed9d21',
        flexDirection:'row',
        alignItems:'flex-start',
        position: 'relative',
        top: 170,
        left: 5,
    },

    logo:{
        resizeMode:'contain',
        width: 70,
        top: 0
    },
    button:{
        width: 340,
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: 10,
        top: 120,
        right: 520
    },

    viewLogos:{
        flexDirection:'row',
        justifyContent:'flex-start',
        top: 155,
        height: 100
    },
    styleSwitch:{
        top:70,
        right: 300
    }
})