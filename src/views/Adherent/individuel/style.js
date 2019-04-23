import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'exampleexample2': {
    'backgroundColor': '#fff'
  },
  'exampleexample2 *': {
    'fontFamily': 'Source Code Pro, Consolas, Menlo, monospace',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': '500'
  },
  'exampleexample2 row': {
    'display': '-ms-flexbox',
    'display': 'flex',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }]
  },
  'exampleexample2 field': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'exampleexample2 fieldhalf-width': {
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'exampleexample2 fieldquarter-width': {
    'width': [{ 'unit': '%H', 'value': NaN }]
  },
  'exampleexample2 baseline': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#cfd7df',
    'transition': 'background-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)'
  },
  'exampleexample2 label': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 8 }],
    'color': '#cfd7df',
    'overflow': 'hidden',
    'textOverflow': 'ellipsis',
    'whiteSpace': 'nowrap',
    'transformOrigin': '0 50%',
    'cursor': 'text',
    'transitionProperty': 'color, transform',
    'transitionDuration': '0.3s',
    'transitionTimingFunction': 'cubic-bezier(0.165, 0.84, 0.44, 1)'
  },
  'exampleexample2 input': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 7 }],
    'color': '#32325d',
    'backgroundColor': 'transparent'
  },
  'exampleexample2 input::-webkit-input-placeholder': {
    'color': 'transparent',
    'transition': 'color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)'
  },
  'exampleexample2 input::-moz-placeholder': {
    'color': 'transparent',
    'transition': 'color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)'
  },
  'exampleexample2 input:-ms-input-placeholder': {
    'color': 'transparent',
    'transition': 'color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)'
  },
  'exampleexample2 inputStripeElement': {
    'opacity': '0',
    'transition': 'opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
    'willChange': 'opacity'
  },
  'exampleexample2 inputfocused': {
    'opacity': '1'
  },
  'exampleexample2 input:not(empty)': {
    'opacity': '1'
  },
  'exampleexample2 inputfocused::-webkit-input-placeholder': {
    'color': '#cfd7df'
  },
  'exampleexample2 input:not(empty)::-webkit-input-placeholder': {
    'color': '#cfd7df'
  },
  'exampleexample2 inputfocused::-moz-placeholder': {
    'color': '#cfd7df'
  },
  'exampleexample2 input:not(empty)::-moz-placeholder': {
    'color': '#cfd7df'
  },
  'exampleexample2 inputfocused:-ms-input-placeholder': {
    'color': '#cfd7df'
  },
  'exampleexample2 input:not(empty):-ms-input-placeholder': {
    'color': '#cfd7df'
  },
  'exampleexample2 inputfocused + label': {
    'color': '#aab7c4',
    'transform': 'scale(0.85) translateY(-25px)',
    'cursor': 'default'
  },
  'exampleexample2 input:not(empty) + label': {
    'color': '#aab7c4',
    'transform': 'scale(0.85) translateY(-25px)',
    'cursor': 'default'
  },
  'exampleexample2 inputfocused + label': {
    'color': '#24b47e'
  },
  'exampleexample2 inputinvalid + label': {
    'color': '#ffa27b'
  },
  'exampleexample2 inputfocused + label + baseline': {
    'backgroundColor': '#24b47e'
  },
  'exampleexample2 inputfocusedinvalid + label + baseline': {
    'backgroundColor': '#e25950'
  },
  'exampleexample2 input': {
    'WebkitAppearance': 'none',
    'MozAppearance': 'none',
    'appearance': 'none',
    'outline': 'none',
    'borderStyle': 'none'
  },
  'exampleexample2 button': {
    'WebkitAppearance': 'none',
    'MozAppearance': 'none',
    'appearance': 'none',
    'outline': 'none',
    'borderStyle': 'none'
  },
  'exampleexample2 input:-webkit-autofill': {
    'WebkitTextFillColor': '#e39f48',
    'transition': 'background-color 100000000s',
    'WebkitAnimation': '1ms void-animation-out'
  },
  'exampleexample2 StripeElement--webkit-autofill': {
    'background': 'transparent !important'
  },
  'exampleexample2 input': {
    'WebkitAnimation': '1ms void-animation-out'
  },
  'exampleexample2 button': {
    'WebkitAnimation': '1ms void-animation-out'
  },
  'exampleexample2 button': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': NaN }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'margin': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }],
    'backgroundColor': '#24b47e',
    'borderRadius': '4px',
    'color': '#fff',
    'textTransform': 'uppercase',
    'fontWeight': '600',
    'cursor': 'pointer'
  },
  'exampleexample2 input:active': {
    'backgroundColor': '#159570'
  },
  'exampleexample2 error svg': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'exampleexample2 error svg base': {
    'fill': '#e25950'
  },
  'exampleexample2 error svg glyph': {
    'fill': '#fff'
  },
  'exampleexample2 error message': {
    'color': '#e25950'
  },
  'exampleexample2 success icon border': {
    'stroke': '#abe9d2'
  },
  'exampleexample2 success icon checkmark': {
    'stroke': '#24b47e'
  },
  'exampleexample2 success title': {
    'color': '#32325d',
    'fontSize': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': '!important' }]
  },
  'exampleexample2 success message': {
    'color': '#8898aa',
    'fontSize': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'string', 'value': '!important' }]
  },
  'exampleexample2 success reset path': {
    'fill': '#24b47e'
  }
});
