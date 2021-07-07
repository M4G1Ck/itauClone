import { StyleSheet } from "react-native"


export default StyleSheet.create({

    mainContainer:{
        flex:1,
        backgroundColor:'#ede9e5',
        //borderWidth:3,
        width: '100%',
        //height: 380
    },
    
    contentContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:10,
        marginBottom:10
    },

    viewPadrao:{
        borderWidth:1,
        height: 100,
        backgroundColor:'white'
    },
 
    footer:{
        //borderWidth:3,
        height:60,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'flex-start'
    },

    cardMasterTitle:{
        fontSize:15,
        marginRight:40,
        fontWeight:'bold',
    },
    homeIcon:{
        width:40,
        height: 50,
        left: 20,
        top:10,
    },
})