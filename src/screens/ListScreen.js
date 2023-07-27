import React, {useState} from "react";
import {
  Dimensions, Image,
  ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity,
  View
} from "react-native";
import Swiper from 'react-native-swiper'
import data from "../constants";
import { LinearGradient } from "expo-linear-gradient"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ListScreen = () => {
  return(
    <View style={{backgroundColor:"#FFF8EA", flex:1}}>
      <StatusBar/>
      <ImageBackground source={require("../../assets/Halkalar.png")} resizeMode="cover" style={{flex:1}}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>{/*hafta sonu yazısı ve liste butonunun bulunduğu tag*/}

          <View style={{height:88, width:137, borderBottomLeftRadius:50, borderBottomRightRadius:95, backgroundColor:"white", alignItems:"center", justifyContent:"center"}}>
            <Image source={require("../../assets/ht_hafta_sonu_siyah.png")} style={{width:63, height:35}}/>
          </View>
          <TouchableOpacity style={{marginTop:26, marginRight:18}}>
            <Image source={require("../../assets/list_logo.png")} style={{width:26, height:18}}/>
          </TouchableOpacity>
        </View>

        <Swiper
            loop={false}
            showsPagination={false}
            showsButtons={false}
            style={{marginTop:90, overflow: 'visible'}}
            pagingEnabled={false}
            loadMinimalSize={3}>
          {data.map((item, index) => {
            switch (item.itemType) {
              case 0:
                return (
                  <View style={styles.slider} key={item.id.toString()}>
                    <View style={styles.sideLineBox}>
                      <View style={styles.sideLine}/>
                      <View style={styles.sideLine}/>
                    </View>

                    <View style={styles.page}>
                      <Image source={item.images[0]}
                           resizeMode={"cover"}
                           style={{ width:windowWidth-70, maxHeight:windowHeight-650, marginTop:20}}
                      />
                      <Text style={{fontSize:14, marginVertical:15}}>{item.name}</Text>
                      <View style={{borderWidth:1, width:windowWidth/5}}/>
                      <Text style={{fontSize:22, margin:15, textAlign:'center'}}>{item.header}</Text>
                      <View style={{borderWidth:1, width:windowWidth/3}}/>
                      <Text style={{fontSize:16, margin:15, textAlign:"center"}}>{item.content}</Text>
                      <Text style={{fontSize:20, margin:15, textAlign:'center'}}>{item.date}</Text>
                      <TouchableOpacity style={{borderWidth:1, borderColor:"#000000", borderRadius:20, width:'55%', justifyContent:"center", alignItems:"center", height:"8%", marginBottom:20}}>
                        <Text style={{fontSize:25}}>GÖRÜNTÜLE</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.number}>
                      <Text style={{fontSize:74}}>{index+1}</Text>
                    </View>
                  </View>
                )
              case 1:
                return (
                  <View style={styles.slider} key={item.id.toString()}>
                    <View style={styles.sideLineBox}>
                      <View style={styles.sideLine}/>
                      <View style={styles.sideLine}/>
                    </View>

                    <View style={styles.page}>
                      <ImageBackground source={item.images[0]}
                             resizeMode={"cover"}
                             style={{flex:1, aspectRatio:11/16,alignItems:"center", justifyContent:"center"}}
                      >
                        <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.9)']} style={{position: 'absolute', width: '100%', height: '100%', top: 0}}/>
                        <View style={{position:"absolute", flex:1, justifyContent:"center",alignItems:"center", borderWidth:2, borderColor:"white", borderRadius:50}}>
                          <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.6)']} style={{position: 'absolute', width: '100%', height: '100%', top: 0,borderWidth:0, borderColor:"white", borderRadius:50}}/>
                          <Image source={require("../../assets/video2.png")} style={{marginVertical:15, width:30, height:30, marginRight:15, marginLeft:19}}/>
                        </View>

                        <View style={{ flex:1,width:"100%", alignItems:"center", justifyContent:"flex-end"}}>
                          <Text style={{fontSize:14, marginBottom:15, color:"white"}}>{item.name}</Text>
                          <View style={{borderWidth:1, width:windowWidth/5,borderColor:"white"}}/>
                          <Text style={{fontSize:22, margin:15, textAlign:'center', color:"white"}}>{item.header}</Text>
                          <TouchableOpacity style={{borderWidth:1, borderColor:"#FFFFFF", borderRadius:20, width:'55%', justifyContent:"center", alignItems:"center", height:"8%", marginBottom:'6%'}}>
                            <Text style={{fontSize:25, color:"white"}}>GÖRÜNTÜLE</Text>
                          </TouchableOpacity>
                        </View>
                      </ImageBackground>
                    </View>



                    <View style={styles.number}>
                      <Text style={{fontSize:74}}>{index+1}</Text>
                    </View>
                  </View>
                )
              case 2:
                return (
                  <View style={styles.slider} key={item.id.toString()}>
                    <View style={styles.sideLineBox}>
                      <View style={styles.sideLine}/>
                      <View style={styles.sideLine}/>
                    </View>

                    <View style={styles.page}>

                      <Text style={{fontSize:14, marginVertical:15}}>{item.name}</Text>
                      <View style={{borderWidth:1, width:windowWidth/5}}/>
                      <Text style={{fontSize:22, margin:15, textAlign:'center'}}>{item.header}</Text>
                      <View style={{borderWidth:1, width:windowWidth/3}}/>
                      <Text style={{fontSize:16, margin:15, textAlign:"center"}}>{item.content}</Text>
                      <Text style={{fontSize:20, margin:15, textAlign:'center'}}>{item.date}</Text>
                      <TouchableOpacity style={{borderWidth:1, borderColor:"#000000", borderRadius:20, width:'55%', justifyContent:"center", alignItems:"center", height:"8%"}}>
                        <Text style={{fontSize:25}}>GÖRÜNTÜLE</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.number}>
                      <Text style={{fontSize:74}}>{index+1}</Text>
                    </View>
                  </View>
                )
              case 3:
                return (
                  <View style={styles.slider} key={item.id.toString()}>
                    <View style={styles.sideLineBox}>
                      <View style={styles.sideLine}/>
                      <View style={styles.sideLine}/>
                    </View>

                    <View style={styles.page}>
                      <Image source={item.images[0]}
                             resizeMode={"cover"}
                             style={{width:'85%', height:'40%', aspectRatio:4/3.2, backgroundColor:"red"}}
                      />
                      <Text style={{fontSize:22, marginVertical:7}}>{item.name}</Text>
                      <Image source={item.images[1]}
                             resizeMode={"cover"}
                             style={{width:'85%', height:'40%', aspectRatio:4/3.2, backgroundColor:"red"}}
                      />
                    </View>

                    <View style={styles.number}>
                      <Text style={{fontSize:74}}>{index+1}</Text>
                    </View>
                  </View>
                )
              case 4:
                return (
                  <View style={styles.slider} key={item.id.toString()}>
                    <View style={styles.sideLineBox}>
                      <View style={styles.sideLine}/>
                      <View style={styles.sideLine}/>
                    </View>

                    <View style={styles.page}>

                      <ImageBackground source={item.images[0]}
                                       resizeMode={"cover"}
                                       style={{flex:1, aspectRatio:11/16, justifyContent: 'flex-end'}}
                      >
                        <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.9)']} style={{position: 'absolute', width: '100%', height: '100%', top: 0}}/>
                          <View style={{width:"100%", alignItems:"center", justifyContent:"center"}}>
                            <Text style={{fontSize:14, marginBottom:15, color:"white"}}>{item.name}</Text>
                            <View style={{borderWidth:1, width:windowWidth/5,borderColor:"white"}}/>
                            <Text style={{fontSize:22, margin:15, textAlign:'center', color:"white"}}>{item.header}</Text>
                            <TouchableOpacity style={{borderWidth:1, borderColor:"#FFFFFF", borderRadius:20, width:'55%', justifyContent:"center", alignItems:"center", height:"17%"}}>
                              <Text style={{fontSize:25, color:"white"}}>GÖRÜNTÜLE</Text>
                            </TouchableOpacity>
                          </View>
                      </ImageBackground>
                    </View>

                    <View style={styles.number}>
                      <Text style={{fontSize:74}}>{index+1}</Text>
                    </View>
                  </View>
                )
              case 5:
                return (
                  <View style={styles.slider} key={item.id.toString()}>
                    <View style={styles.sideLineBox}>
                      <View style={styles.sideLine}/>
                      <View style={styles.sideLine}/>
                    </View>

                    <View style={styles.page}>
                      <Image source={item.images[0]}
                             resizeMode={"cover"}
                             style={{flex:1, aspectRatio:11/16}}
                      />

                    </View>

                    <View style={styles.number}>
                      <Text style={{fontSize:74}}>{index+1}</Text>
                    </View>
                  </View>
                )
            }
          })}
        </Swiper>
      </ImageBackground>
      <Text style={{fontSize:10, textAlign:"center", height:40}}>Copyright © 2020 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  slider: {
    width:windowWidth,
    height:windowHeight-220,

  },
  page: {
    backgroundColor:"#FFFFFF",
    flex:1,
    marginLeft:20,
    marginRight:20,
    zIndex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  sideLineBox: {
    width:windowWidth,
    height:windowHeight-276,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    position:"absolute",
    zIndex:2
  },
  sideLine: {
    height:2,
    width:35,
    backgroundColor:"#E9D29E"
  },
  number: {
    width:windowWidth,
    alignItems:"center",
    position: "relative",
    zIndex:0,
    marginTop:-50
  }
})

export default ListScreen;

