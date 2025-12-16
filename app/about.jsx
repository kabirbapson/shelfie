import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'

const About = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>About Us</Text>
          <ThemedView>Hello</ThemedView>
          <Link style={styles.link} href="/">
              <Text>
                  
              Go to Home Page
              </Text>
          </Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    link: {
        borderBottomWidth: 1,
        borderColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    }
})