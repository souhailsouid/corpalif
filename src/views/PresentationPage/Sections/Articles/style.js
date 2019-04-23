import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'card': {
    'background': 'white',
    'width': [{ 'unit': 'rem', 'value': 12 }],
    'display': ''flex''
  },
  // style={{ width: '22rem', display: 'flex', '&:hover': { color: '#337467 ' } }}
  'card:hover': {
    'backgroundColor': '#ece8e8',
    'color': '#337467'
  },
  'agenda': {
    'color': 'none'
  },
  'agenda:hover': {
    'color': '#cc4949',
    'fontWeight': '700'
  },
  // .icon {
  fill: none
}
  'icon:hover': {
    'fill': '#cc4949'
  },
  'cardTitleMSN': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 38 }],
    'left': [{ 'unit': 'px', 'value': 16 }]
  },
  'cardTitleMSN:hover': {
    'textDecorationLine': 'underline !important'
  },
  'cardContainerMSN': {
    'position': 'relative',
    'textAlign': 'center',
    'color': 'white'
  },
  'cardContainerMSN:hover': {
    'zIndex': '4',
    'position': 'relative',
    'textAlign': 'center',
    'color': 'white'
  },
  'cardArticle': {
    'width': [{ 'unit': 'rem', 'value': 22 }],
    'display': 'flex'
  },
  'cardArticle:hover': {
    'color': '#337467'
  },
  'article': {
    'display': 'block'
  },
  'caroussel': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  }
});
