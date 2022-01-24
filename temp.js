
class GOEFTTappingApp extends Component {

  
  
    constructor(props){
      super(props);
      this.state = {
        song: 'assets/audio/Audio B_2022 01 21.mp3' //navigation.getParam('songid')
      };
    }
  
    render() {
      const TRACKS = [
        {
          title: 'Stressed Out',
          artist: 'Twenty One Pilots',
        //  albumArtUrl: "https://cdn-images-1.medium.com/max/1344/1*fF0VVD5cCRam10rYvDeTOw.jpeg",
          audioUrl: this.state.song
        }
      ];
      return <Player tracks={TRACKS} />
      /*
      return (
  
        <View style={styles.root}>
        <View style={styles.titleBar}>
          <Image style={styles.qbutton} source={require('./assets/Info.png')} />
          
          <View style={styles.slider}>
        
            {/*Slider with max, min, step and initial value*/}
          /*  <Slider
              maximumValue={100}
              minimumValue={0}
              minimumTrackTintColor="#307ecc"
              maximumTrackTintColor="#000000"
              step={1}
              value={this.state.sliderValue}
              onValueChange={(sliderValue) => this.setState({ sliderValue })}
              style={{ width: '100%', height: 40 }}
            />
                {/*Text to show slider value*//*}
                <View style={styles.progressText}>
                <Text style={styles.nowText}>{this.state.sliderValue} </Text>
                <Text style={styles.allText}> 02:00</Text>
                </View>
  
          </View>
        </View>
  
        <ImageBackground style={styles.imgBackground} source={require('./assets/eng_bg.png')} />
  
      </View>
  
      
      );*/
    }
  
    
  
  
  
  
  export default GOEFTTappingApp;
  
  
  const styles = StyleSheet.create({
    root: {
      minHeight: '100vh',
    },
    titleBar: {
      width: '100%',
      height: 80,
      display: 'flex',
      
      justifyContent: 'flex-start',
      flexDirection: 'row',
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: 'black'
    },
    qbutton: {
      margin: 10,
      width: 50,
      height: 50,
    },
    slider:{
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 80,
      width: '100%',
      
      height: 80,
    },
    nowText: {
      textAlign: "right",
      margin: 10,
      color: 'white',
      //fontWeight: "bold"
    },
    allText:{
      textAlign: "right",
      margin: 10,
      color: 'gray',
     // fontWeight: "bold"
    },
    progressText:{
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    logo: {
      width: 66,
      height: 58,
    },
    imgBackground: {
      paddingTop: 80,
      resizeMode: 'cover',
      width: '100%',
      height: '100%'
    }
  });