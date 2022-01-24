import React, {Component} from 'react';
//import { Image, View, StyleSheet,ImageBackground } from "react-native";
//import { AppRegistry, Text,  Platform } from 'react-native';
//import Slider from '@react-native-community/slider';
import {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import helpaudio from './assets/audio/Audio B_2022 01 21.mp3';
//import Sound from 'react-native-sound';
import Ionicons from 'react-native-vector-icons/Ionicons';

var Sound = require('react-native-sound');

Sound.setCategory('Playback');


var audio = new Sound(helpaudio, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // if loaded successfully
  console.log(
    'duration in seconds: ' +
      audio.getDuration() +
      'number of channels: ' +
      audio.getNumberOfChannels(),
  );
});

const App = () => {
  useEffect(() => {
    audio.setVolume(1);
    return () => {
      audio.release();
    };
  }, []);
  const playPause = () => {
    audio.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.playBtn} onPress={playPause}>
        <Ionicons name={'ios-play-outline'} size={36} color={'#fff'} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  playBtn: {
    padding: 20,
  },
});
export default App;

