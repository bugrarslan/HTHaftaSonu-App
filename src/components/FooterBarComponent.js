import React from "react";
import {Dimensions, Text, View} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FooterBarComponent = (props) => {
  return(
      <View style={{height:windowHeight/15, alignItems:"center", justifyContent:"center"}}>
        <Text style={{fontSize:10,}}>Copyright © 2020 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.</Text>
      </View>
  )
}

export default FooterBarComponent;
