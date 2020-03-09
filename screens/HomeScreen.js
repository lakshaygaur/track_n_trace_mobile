import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          
          {/* ---- welcome card image --- */}
        <View style={styles.welcomeContainer}>
          <Image
            source={
              require('../assets/images/farm.png')              
            }
            style={styles.welcomeImage }
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',
        alignItems: 'stretch',}}>
        <View style={styles.progressLink} />
        </View>
          {/* ---- Next card image --- */}

        <View style={styles.welcomeContainer}>
          <Image
            source={
              require('../assets/images/milk.png')              
            }
            style={styles.nextImage }
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',
        alignItems: 'stretch',}}>
        <View style={styles.progressLink} />
        </View>
        {/* ---- Next card image --- */}

        <View style={styles.welcomeContainer}>
          <Image
            source={
              require('../assets/images/customer.png')              
            }
            style={styles.nextImage }
          />
        </View>
        {/* <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',
        alignItems: 'stretch',}}>
        <View style={styles.progressLink} />
        </View> */}

      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
       Asset ID 
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
          mJrZBxOoEX77Ezv9zwW7WV8DdluouRKNY
          </MonoText>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        GARVITA BABY IS SUCH A CUTIE{learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        GARVITA BABY IS SUCH A CUTIE
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  progressLink: {width: 15, height: 45, backgroundColor: 'powderblue'},
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 0,    
  },
  welcomeImage: {
    width: 100,
    height: 80,
    marginTop: 3,
    marginLeft: -10,
    borderColor: 'powderblue',
    backgroundColor:'powderblue',
    borderRadius: 50,
    borderWidth: 5
  },
  nextImage: {
    width: 100,
    height: 80,
    marginTop: -10,
    marginLeft: -10,
    borderColor: 'powderblue',
    backgroundColor:'powderblue',
    borderRadius: 50,
    borderWidth: 5,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
