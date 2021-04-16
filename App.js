import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


//Screens
import HomePage from './src/screens/Homepage.js';
import KatakanaScreen from './src/screens/KatakanaScreen.js';
import HiraganaScreen from './src/screens/HiraganaScreen.js';
import FlashcardScreen from './src/screens/FlashcardScreen.js';
import KatakanaFlashScreen from './src/screens/KatakanaFlashScreen.js';
import HiraganaFlashScreen from './src/screens/HiraganaFlashScreen.js';
import VerbFlashScreen from './src/screens/VerbFlashScreen.js';

const navigator = createStackNavigator({
  Home: HomePage,
  HiraganaAlphabet: HiraganaScreen,
  KatakanaAlphabet: KatakanaScreen,
  FlashCards: FlashcardScreen,
  KatakanaFlash: KatakanaFlashScreen,
  HiraganaFlash: HiraganaFlashScreen,
  VerbFlash: VerbFlashScreen

}, {
  initialRouteName: 'Home',
  defaultNavigationOptions:{
    title: "Japanese"
  }
});

export default createAppContainer(navigator);