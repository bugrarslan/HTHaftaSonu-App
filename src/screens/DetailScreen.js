import React, {useEffect, useState} from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text, TextInput, TouchableOpacity,
  View
} from "react-native";
import HeaderBarComponent from "../components/HeaderBarComponent";
import NavigationBarComponent from "../components/NavigationBarComponent";
import details from "../data/details.json";
import databases from "../data/databases.json"
import imageUtils from "../constants/imageUtils";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailScreen = (props) => {

  const itemId = props.route.params
  const [imageData, setImageData] = useState([])
  const [commentButtonClicked, setCommentButtonClicked] = useState(false)

  useEffect(() => {
    setImageData(details.body.items[itemId].imageOptions.images);
  }, []);
  const renderItem = ({item}) => {
    let firstDetailImage = null;
    let secondDetailImage = null;
    let thirdDetailImage = null;
    let fourthDetailImage = null;
    if (imageUtils.hasOwnProperty(item.firstImage)) {
      firstDetailImage = imageUtils[item.firstImage];
    }
    if (imageUtils.hasOwnProperty(item.secondImage)) {
      secondDetailImage = imageUtils[item.secondImage];
    }
    if (imageUtils.hasOwnProperty(item.thirdImage)) {
      thirdDetailImage = imageUtils[item.thirdImage];
    }
    if (imageUtils.hasOwnProperty(item.fourthImage)) {
      fourthDetailImage = imageUtils[item.fourthImage];
    }

    return (
        <View style={{width: windowWidth / 1.3, height: windowHeight / 4, marginRight: windowWidth / 20,}}>
          {firstDetailImage ? <Image source={firstDetailImage} resizeMode={"cover"}
                                     style={{width: windowWidth / 1.3, height: windowHeight / 4}}/> : null}
          {secondDetailImage ? <Image source={secondDetailImage} resizeMode={"cover"}
                                      style={{width: windowWidth / 1.3, height: windowHeight / 4}}/> : null}
          {thirdDetailImage ? <Image source={thirdDetailImage} resizeMode={"cover"}
                                     style={{width: windowWidth / 1.3, height: windowHeight / 4}}/> : null}
          {fourthDetailImage ? <Image source={fourthDetailImage} resizeMode={"cover"}
                                      style={{width: windowWidth / 1.3, height: windowHeight / 4}}/> : null}
        </View>
    )
  };

  const linkRenderItem = ({item}) => {
    return (
        <TouchableOpacity><Text
            style={{marginHorizontal: 10, textDecorationLine: "underline"}}>{item}</Text></TouchableOpacity>
    )
  }

  return (
      <SafeAreaView style={{backgroundColor: "#FFFFFF", flex: 1}}>
        <StatusBar/>
        <HeaderBarComponent navigation={props.navigation}/>
        {details.body.items.map((item, index) => {
          return (
              <ScrollView key={index} contentContainerStyle={{
                alignItems: "flex-start",
                marginHorizontal: windowWidth / 20
              }}>
                {
                    item.itemId === itemId &&
                    <View>
                      <Text style={{fontSize: 27, fontWeight: "bold", marginVertical: 5}}>{item.title}</Text>
                      <Text style={{fontSize: 15, fontWeight: "bold", marginVertical: 5}}>{item.desp}</Text>
                      <Text style={{
                        fontSize: 10,
                        fontWeight: "bold",
                        color: "gray",
                        marginVertical: 5
                      }}>{item.dateTime} - {item.time} |
                        Güncelleme: {item.updatedDateTime} - {item.updatedTime}</Text>
                      <View style={{borderWidth:0.5, borderStyle:"dashed", borderColor:"#F1F1F1", marginVertical:5}}/>
                      <View style={{flexDirection: "row", marginVertical: 5}}>
                        <View style={{
                          backgroundColor: "#F1F1F1",
                          marginRight: 10,
                          width: windowWidth / 9,
                          height: windowHeight / 19,
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 21
                        }}>
                          <Image source={require("../../assets/1x1/agency.png")}
                                 style={{width: windowWidth / 12, height: windowHeight / 22}}/>
                        </View>
                        <View style={{justifyContent: "center"}}>
                          <View>
                            <Text style={{fontSize: 10, fontWeight: "bold"}}>{item.writerOptions.writerName}</Text>
                          </View>
                          <Text style={{fontSize: 10, color: "gray"}}>{item.writerOptions.writerNameDesp}</Text>
                        </View>
                      </View>
                      <View style={{borderWidth:0.5, borderStyle:"dashed", borderColor:"#F1F1F1", marginVertical:5}}/>
                      <FlatList data={imageData} renderItem={renderItem} horizontal={true} style={{marginVertical: 5}}/>
                      <Text style={{
                        fontSize: 10,
                        fontWeight: "bold",
                        color: "gray", marginVertical: 5
                      }}>{item.imageOptions.imageDetails}</Text>
                      <View style={{borderWidth:0.5, borderStyle:"dashed", borderColor:"#707070", marginVertical:5}}/>
                      <FlatList data={item.links} renderItem={linkRenderItem} horizontal={true}
                                style={{marginVertical: 5}}
                                showsHorizontalScrollIndicator={false}/>
                      <View style={{borderWidth:0.5, borderStyle:"dashed", borderColor:"#707070", marginVertical:5}}/>
                      <View style={{
                        borderStyle: "dashed",
                        borderWidth: 1,
                        borderColor: "#707070",
                        height: windowHeight / 7,
                        justifyContent: "space-evenly",
                        paddingHorizontal: 20,
                        marginVertical: 5
                      }}>
                        <Text style={{fontSize: 15}}>“Günün manşetlerini ve en çok okunan haberlerini her sabah
                          e-postanızdan takip etmek için bültene üye olun.”</Text>
                        <View style={{
                          flexDirection: "row",
                          backgroundColor: "#F1F1F1",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingHorizontal: 5
                        }}>
                          <TextInput style={{height: windowHeight / 20, paddingHorizontal: 20}}
                                     placeholder={"E-posta adresinizi yazınız!"}/>
                          <TouchableOpacity style={{
                            backgroundColor: "white",
                            width: windowWidth / 5,
                            height: windowHeight / 24,
                            alignItems: "center",
                            justifyContent: "center"
                          }}><Text>KAYDOL</Text></TouchableOpacity>
                        </View>
                      </View>

                      <View style={{backgroundColor: "#F1F1F1", padding: 20, marginVertical: 5}}>
                        <View style={{}}>
                          <Text style={{fontSize: 18, fontWeight: "bold"}}>YORUMLAR</Text>
                          <Text style={{fontSize: 13}}>Yorum kurallarını okumak için tıklayınız</Text>
                        </View>
                        <View style={{
                          backgroundColor: "#F1F1F1",
                          height: windowHeight / 10,
                          justifyContent: "space-evenly"
                        }}>
                          <View style={{
                            flexDirection: "row",
                            backgroundColor: "#FFFFFF",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingHorizontal: 5
                          }}>
                            <TextInput style={{height: windowHeight / 20, paddingHorizontal: 20}}
                                       placeholder={"Sende düşüncelerini paylaş!"}/>
                            <TouchableOpacity style={{
                              backgroundColor: "#F1F1F1",
                              width: windowWidth / 5,
                              height: windowHeight / 24,
                              alignItems: "center",
                              justifyContent: "center"
                            }}><Text>GÖNDER</Text></TouchableOpacity>
                          </View>
                        </View>
                        <View>
                          {item.comments.map((commentItem, index) =>
                              (commentButtonClicked === false && index < 2) ?
                                  <View style={{flexDirection: "row", marginBottom: 20}} key={index}>
                                    <View style={{
                                      width: 50,
                                      height: 50,
                                      backgroundColor: "white",
                                      borderRadius: 50,
                                      alignItems: "center",
                                      justifyContent: "center",
                                      marginRight: 20
                                    }}>
                                      <Text style={{fontSize: 15}}>KG</Text>
                                    </View>
                                    <View style={{justifyContent: "center"}}>
                                      <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 13
                                      }}>{commentItem.commentHeader}</Text>
                                      <Text style={{color: "#666666", fontSize: 15}}>{commentItem.comment}</Text>
                                    </View>
                                  </View>
                                  : commentButtonClicked === true ?
                                      <View style={{flexDirection: "row", marginBottom: 20}} key={index}>
                                        <View style={{
                                          width: 50,
                                          height: 50,
                                          backgroundColor: "white",
                                          borderRadius: 50,
                                          alignItems: "center",
                                          justifyContent: "center",
                                          marginRight: 20
                                        }}>
                                          <Text style={{fontSize: 15}}>KG</Text>
                                        </View>
                                        <View style={{justifyContent: "center"}}>
                                          <Text style={{
                                            fontWeight: "bold",
                                            fontSize: 13
                                          }}>{commentItem.commentHeader}</Text>
                                          <Text style={{color: "#666666", fontSize: 15}}>{commentItem.comment}</Text>
                                        </View>
                                      </View>
                                      : null)
                          }
                          <View style={{height: windowHeight / 15}}/>
                        </View>
                        <View style={{alignItems: "center", position: "relative", margin: -40}}>
                          <TouchableOpacity
                              style={{
                                borderWidth: 1,
                                borderColor: "#DEDEDE",
                                height: windowHeight / 20,
                                width: windowWidth / 1.4,
                                backgroundColor: "#FFFFFF",
                                justifyContent: "center"
                              }}
                              onPress={() => setCommentButtonClicked(true)}
                          >
                            <Text style={{textAlign: "center", fontSize: 16, fontWeight: "bold"}}>TÜM YORUMLARI
                              GÖSTER</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={{height: windowHeight / 15}}/>
                      <View style={{borderWidth:0.5, borderColor:"#F1F1F1", marginVertical:5}}/>
                      <Text style={{fontSize:21, fontWeight:"bold"}}>BAKMADAN GEÇME</Text>
                      <View style={{borderWidth:0.5, borderColor:"#F1F1F1", marginVertical:5}}/>
                      <View>
                        {databases.body.items.map((item, index) =>
                            index < 3 &&
                            <View style={{height:windowHeight/10, flexDirection:"row", alignItems:"center", width:windowWidth/1.11, justifyContent:"space-between"}} key={index}>
                              <Image source={imageUtils.car} resizeMode={"cover"} style={{aspectRatio:16/9, width:windowWidth/3}}/>
                              <Text style={{width:windowWidth/1.9}}>{item.lineOptions.desp}</Text>
                            </View>
                        )}
                      </View>

                    </View>
                }
              </ScrollView>
          )
        })}
        <NavigationBarComponent/>
      </SafeAreaView>
  )
}

export default DetailScreen;
