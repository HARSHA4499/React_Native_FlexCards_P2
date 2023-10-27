import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function FlatCards() {
  return (
    <View>
        <Text style={styles.headingText}>Flat Cards</Text>
        <View style={styles.container}>
            <View style={[styles.card,styles.cardOne]}>
                <Text style={styles.innerText}>Red</Text>
            </View>
            <View style={[styles.card,styles.cardTwo]}>
                <Text style={styles.innerText}>Blue</Text>
            </View>
            <View style={[styles.card,styles.cardThree]}>
                <Text style={styles.innerText}>Green</Text>
            </View>
            <View style={[styles.card,styles.cardOne]}>
                <Text style={styles.innerText}>Red</Text>
            </View> 
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10
    },
    
    container:{
        flex:1,
        flexDirection:'row',
        padding:8
    },

    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'20%',
        height:100,
        borderRadius:4,
        margin:8
    },

    cardOne:{
        backgroundColor:"#EF5354"
    },
    cardTwo:{
        backgroundColor:"#50DBB4"
    },
    cardThree:{
        backgroundColor:"#5DA3FA"
    },
    innerText:{
        color:'white'
    }
})