import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

const Header = () => {
    return(
      <ScrollView>
        <View>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerDiv : {
        width:'100%',
        height:1000,
        backgroundColor:"green",
  },
  container : {
    flex : 1
  }
  });

export default Header