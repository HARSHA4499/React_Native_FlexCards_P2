import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts = [
    {
      uid:1,
      name:'Harsha',
      status:'Software Engineer',
      imageUrl:'https://cdn.pixabay.com/photo/2023/10/17/19/29/pumpkins-8322245_1280.jpg'
    },
    {
      uid:2,
      name:'Teja',
      status:'Software Engineer 2',
      imageUrl:'https://cdn.pixabay.com/photo/2023/10/21/22/01/wood-8332732_1280.jpg'
    },
    {
      uid:3,
      name:'Hanuman',
      status:'Lead Engineer',
      imageUrl:'https://cdn.pixabay.com/photo/2023/05/17/10/20/hanuman-7999727_1280.png'
   },
   {
    uid:4,
    name:'Sai Baba',
    status:'Lead Architect',
    imageUrl:'https://media.istockphoto.com/id/1644382785/nl/foto/a-little-sculpture-of-indian-god-sai-baba.webp?b=1&s=612x612&w=0&k=20&c=KnKLp6kUjbZ8Z2QkkBN9z-sP68AG5gjm4nar04ngNVI='
  }
  ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView 
      style={styles.container}
      scrollEnabled={true} >
        {contacts.map(({uid,name,status,imageUrl})=>(
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri:imageUrl
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,
  },
  container:{
    paddingHorizontal:16,
    marginBottom:4,
    marginTop:4
  },
  userCard:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#c7ecee',
    margin:4,
    padding:4,
    borderRadius:10

  },
  userImage:{
    height:60,
    width:60,
    borderRadius:30,
    marginRight:14,
  },
  userName:{
    fontSize:16,
    fontWeight:'600',
    color:"#000000"
  },
  userStatus:{
    fontSize:12,
    fontWeight:'300',
    color:'black'
  }
})