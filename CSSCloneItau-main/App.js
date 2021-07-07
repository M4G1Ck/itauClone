import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import Home from './Home/index'
import FrontPage from './LoginFrontPage/index';
import Page from './LoginFrontPage/index'

// import { Container } from './styles';

function App () {

  const [page, setPage] = useState(false)

  function handlePage(){
    setPage(true)
  }
  return(
  
  <View>
       <StatusBar
      barStyle = "default"
      hidden = {false}
      backgroundColor = "#df6202"
      />
      {
        page ? <FrontPage/> : <Home handlePage={handlePage}/>

      }
    </View>
  )
}
export default App;