import { View, Text } from 'react-native'
import React from 'react'
var data =require('./Card.json')

const App = () => {
  return (
    <View>

    {data.map((items)=>{
        return(
            <View>
            <Text
       style={{marginTop:50,
      fontSize:20,
      textAlign:"center"}}>
     {items.body}
      </Text>

      <Text
       style={{marginTop:50,
      fontSize:20,
      textAlign:"center"}}>
     {items.title}
      </Text>
      </View>

        )
    })}
      
    </View>
  )
}

export default App