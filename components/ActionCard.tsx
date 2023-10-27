import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in JavaScript 21 -ES12
            </Text>
        </View>
        <Image
            source={{
                uri:'https://images.unsplash.com/photo-1698041383729-38eb70ce7a08?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text  style={{color:'black',fontSize:14}} numberOfLines={3}>
                If the app is already open, the app is foregrounded and a Linking 'url' event is fired
                You can handle these events with Linking.addEventListener('url', callback) - it calls callback with the linked URL
                If the app is not already open, it is opened and the url is passed in as the initialURL
                handle these events with Linking.getInitialURL() - it returns a Promise that resolves to the URL, if there is one.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={()=>{
                openWebsite('https://www.w3schools.com')
            }}
            >
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
                openWebsite('https://www.google.com')
            }}
            >
                <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:360,
        height:400,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:12
    },
    elevatedCard:{
        backgroundColor:'#95A5A6',
        elevation:3,
        shadowOffset: {
            height:1,
            width:1
        },
        shadowColor:"#333",
        shadowOpacity:0.5,
        shadowRadius:3
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'#000000',
        fontSize:16,
        fontWeight:'600'
    },
    cardImage:{
        height:250,
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        padding:0,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinks:{
        color:'black',
        fontSize:16,
        backgroundColor:"white",
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6
    }
})