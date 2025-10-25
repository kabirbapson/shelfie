import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>Contact</Text>
          <Link style={styles.link} href="/">Go to Home Page</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    link: {
        borderBottomWidth: 1,
        borderColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    }
})