import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const guidelineBaseWidth = width > 500 ? 700 : 414;
const guidelineBaseHeight = height > 950 ? 1000 : 896;

const hScale = (size) => SCREEN_WIDTH / guidelineBaseWidth * size;
const vScale = (size) => SCREEN_HEIGHT / guidelineBaseHeight * size;

export {hScale, vScale};