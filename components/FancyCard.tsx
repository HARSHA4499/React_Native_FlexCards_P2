import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
         source={{
            uri:'https://images.unsplash.com/photo-1629201072581-ec24e9802629?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhaiUyMG1haGFsfGVufDB8fDB8fHww'
         }}
         style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>Green City,Agra</Text>
            <Text style={styles.cardDescription}> The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.</Text>            
            <Text style={styles.cardFooter}>20 km, 40 minutes away</Text>            
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        paddingVertical:8
    },
    card:{
        height:350,
        width:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16

    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:200,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,

    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:8
    },
    cardTitle:{
        color:"#242B2E",
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4
    },
    cardLabel:{
        color:"#242B2E",
        fontSize:14,
        marginBottom:6,

    },
    cardDescription:{
        color:"#242B2E",
        fontSize:13, 
        marginBottom:12,
        flexShrink:1,
        marginTop:6,
        textAlign:'justify'
    },
    cardFooter:{
        color:"#242B2E",
        fontSize:13
    }


})