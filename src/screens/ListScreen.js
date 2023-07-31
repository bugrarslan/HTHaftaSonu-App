import React, {useCallback, useEffect, useState} from "react";
import {Dimensions, FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { LinearGradient } from "expo-linear-gradient"
import database from "../data/databases.json"
import SideLineComponent from "../components/SideLineComponent";
import imageUtils from "../constants/imageUtils";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ListScreen = (props) => {

  const [data, setData] = useState([])

  useEffect(() => {
    setData(database.body.items);
  }, []);

  const getNews = ({item, index}) => {
    let coverImageObject = null;
    let headerImageObject = null;
    if(imageUtils.hasOwnProperty(item.coverImage)){
      coverImageObject = imageUtils[item.coverImage]
    }

    if(imageUtils.hasOwnProperty(item.headerImage)){
      headerImageObject = imageUtils[item.headerImage]
    }

    return(
        <View style={{width:windowWidth-80, height:windowHeight-280, backgroundColor:"#FFFFFF", justifyContent: item.coverImage ? 'flex-end' : 'space-evenly', alignItems:"center"}}>
          {coverImageObject != null ?
              <View style={{width:windowWidth-80, height:windowHeight-280, position:"absolute"}}>
                <ImageBackground source={coverImageObject} style={{width:windowWidth-80, height:windowHeight-280, position:"absolute"}}/>
                <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.9)']} style={{position: 'absolute', width: '100%', height: '100%', top: 0}}/>
              </View>
              : null}
          {headerImageObject != null ? <Image source={headerImageObject} style={{width:windowWidth-120, height:windowHeight/5}} resizeMode={"cover"}/> : null}

          {
            item.videoButton &&
                <TouchableOpacity style={{justifyContent:"center",alignItems:"center", borderWidth:2, borderColor:"white", borderRadius:50, marginBottom:30}}>
                  <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.6)']} style={{position: 'absolute', width: windowWidth/6, height: '100%', top: 0,borderWidth:0, borderColor:"white", borderRadius:50}}/>
                  <Image source={require("../../assets/1x1/video2.png")} style={{marginVertical:15, width:30, height:30, marginRight:15, marginLeft:19}}/>
                </TouchableOpacity>
          }

          <Text style={{fontSize:14, color:`${item.textColor}`}}>{item.lineOptions.title}</Text>

          {
            item.lineOptions.titleLine === true ? <View style={{borderWidth:0.6, width:windowWidth/5, borderColor:`${item.textColor}`}}/> : null
          }

          <Text style={{fontSize:22, color:`${item.textColor}`, textAlign:"center"}}>{item.lineOptions.desp}</Text>

          {
            item.lineOptions.despLine === true ? <View style={{borderWidth:0.6, width:windowWidth/3}}/> : null
          }

          {
            item.desp !== "" ? <Text style={{fontSize:16, textAlign:"center", color:`${item.textColor}`}}>{item.desp}</Text> : null
          }

          {
            item.lineOptions.time !== "" && item.lineOptions.dateTime !== "" ? <Text style={{fontSize:14, textAlign:"center"}}>{item.dateTime} - {item.time}</Text> : null
          }
          {
            item.buttonActive === true ?
                    <TouchableOpacity style={{borderWidth:1, borderColor:`${item.textColor}`, borderRadius:20, width:'55%', justifyContent:"center", alignItems:"center", height:"8%", marginBottom:20}}>
                      <Text style={{fontSize:25, color:`${item.textColor}`}}>{item.buttonTitle}</Text>
                    </TouchableOpacity> : null
          }

        </View>

    )
  }

  const getAds = ({item, index}) => {
    let firstImageObject = null;
    let secondImageObject = null;
    let coverAdImage = null;

    if(imageUtils.hasOwnProperty(item.adImages.firstAdImage)){
      firstImageObject = imageUtils[item.adImages.firstAdImage]
    }

    if(imageUtils.hasOwnProperty(item.adImages.secondAdImage)){
      secondImageObject = imageUtils[item.adImages.secondAdImage]
    }

    if(imageUtils.hasOwnProperty(item.coverAdImage)){
      coverAdImage = imageUtils[item.coverAdImage]
    }

    return(
        <View style={{width:windowWidth-80, height:windowHeight-280, backgroundColor:"#FFFFFF", justifyContent: item.coverImage ? 'flex-end' : 'space-evenly', alignItems:"center"}}>
          {coverAdImage === null ?
              <View>
                {firstImageObject != null && <Image source={firstImageObject} style={{width:windowWidth-120, height:windowHeight/3.5}} resizeMode={"cover"}/>}

                <Text style={{fontSize:14, color:`${item.textColor}`, textAlign:"center", fontWeight:"bold"}}>{item.lineOptions.title}</Text>
                {secondImageObject != null && <Image source={secondImageObject} style={{width:windowWidth-120, height:windowHeight/3.5}} resizeMode={"cover"}/>}
              </View>



            : coverAdImage != null &&
              <ImageBackground source={coverAdImage} style={{width:windowWidth-80, height:windowHeight-280, position:"absolute"}}/>}
        </View>
    )
  }


  const renderItem = useCallback(({item, index}) => {
    return(
        <View style={{width:windowWidth-40, alignItems:"center", justifyContent:"center"}}>
          <SideLineComponent/>

          {item.type === "news" ? getNews({item, index}):
              item.type === "ads" ? getAds({item, index}):
              null}

          <View style={styles.number}>
            <Text style={{fontSize:74}}>{index+1}</Text>
          </View>
        </View>
    )
  }, []);

  return(
    <SafeAreaView style={{backgroundColor:"#FFF8EA", flex:1}}>
      <View style={{flexDirection:"row", justifyContent:"space-between", height:windowHeight/10}}>

        <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={{ borderBottomLeftRadius:50, borderBottomRightRadius:100, backgroundColor:"white", alignItems:"center", justifyContent:"center", width:windowWidth/3, height:"100%"}}>
          <Image source={require("../../assets/1x1/ht_hafta_sonu_siyah.png")} style={{ height:'45%', width:"100%"}} resizeMode={"contain"}/>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop:'6%', marginRight:'6%'}}>
          <Image source={require("../../assets/1x1/list_logo.png")} resizeMode={"contain"} style={{width:30, height:30}}/>
        </TouchableOpacity>
      </View>

      <ImageBackground source={require("../../assets/1x1/Halkalar.png")} resizeMode="cover" style={{flex:1}}>
        <FlatList data={data}
                  renderItem={renderItem}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  windowSize={11}
                  disableVirtualization={true}
                  maxToRenderPerBatch={15}
                  contentContainerStyle={{ alignItems:"center", marginTop:windowHeight/10}}
                  />
      </ImageBackground>
      <View style={{height:windowHeight/15, alignItems:"center", justifyContent:"center"}}>
        <Text style={{fontSize:10,}}>Copyright © 2020 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  number: {
    width:windowWidth,
    alignItems:"center",
    marginTop:- (windowHeight/20),
    zIndex:-1,
  },
})

export default ListScreen;

