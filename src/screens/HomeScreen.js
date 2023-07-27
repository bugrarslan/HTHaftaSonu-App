import React from "react";
import {Image, ImageBackground, SafeAreaView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = (props) => {
  return(
    <SafeAreaView style={{backgroundColor:"#FFF8EA", flex:1}}>{/*en dıştaki tag*/}
      <StatusBar/>
      <ImageBackground source={require("../../assets/Halkalar.png")} resizeMode="cover" style={{flex:1}}>{/*tüm sayfayı kapsayan background*/}

        <View style={{flexDirection:"row", justifyContent:"space-between"}}>{/*hafta sonu yazısı ve liste butonunun bulunduğu tag*/}

          <View style={{height:88, width:137, borderBottomLeftRadius:50, borderBottomRightRadius:95, backgroundColor:"white", alignItems:"center", justifyContent:"center"}}>
            <Image source={require("../../assets/ht_hafta_sonu_siyah.png")} style={{width:63, height:35}}/>
          </View>
          <TouchableOpacity style={{marginTop:26, marginRight:18}}>
            <Image source={require("../../assets/list_logo.png")} style={{width:26, height:18}}/>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems:"center", marginTop:180}}>{/*renkli hafta sonu yazısının olduğu tag*/}

          <Image source={require("../../assets/hafta_sonu_renkli.png")} resizeMode="center" style={{width:windowWidth-100, height:windowHeight-650}}/>
        </View>

        <View style={{flexDirection:"row", marginLeft:50}}>{/*butonların bulunduğu tag*/}

          <TouchableOpacity
              style={{backgroundColor:"#FFF8EA", borderWidth:2, borderColor:"#E9D29E", borderRadius:25, width:150, height:50, justifyContent:"center", alignItems:"center"}}
              onPress={() => props.navigation.navigate("List")}
          >
            <Text style={{textAlign:"center", fontWeight:"bold", color:"#000000", fontSize:21}}>görüntüle</Text>
          </TouchableOpacity>
          <View style={{width:10}}/>
          <TouchableOpacity
              style={{backgroundColor:"#FFF8EA", borderWidth:2, borderColor:"#E9D29E", borderRadius:50, width:50, height:50, justifyContent:"center", alignItems:"center"}}
              onPress={() => props.navigation.navigate("List")}
          >
            <Image source={require("../../assets/saga_ok_siyah.png")} resizeMode={"center"} style={{width:20, height:10}}/>
          </TouchableOpacity>
        </View>

        <Text style={{fontSize:10, marginTop:290, textAlign:"center"}}>Copyright © 2020 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.</Text>
      </ImageBackground>
    </SafeAreaView>
  )

}

export default HomeScreen;
