'use strict';

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var






HelloWorld=function(_React$Component){babelHelpers.inherits(HelloWorld,_React$Component);function HelloWorld(){babelHelpers.classCallCheck(this,HelloWorld);return babelHelpers.possibleConstructorReturn(this,(HelloWorld.__proto__||Object.getPrototypeOf(HelloWorld)).apply(this,arguments));}babelHelpers.createClass(HelloWorld,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Text,{style:styles.hello},'Hello, World')));


}}]);return HelloWorld;}(_react2.default.Component);

var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
justifyContent:'center'},

hello:{
fontSize:20,
textAlign:'center',
margin:10}});



_reactNative.AppRegistry.registerComponent('HelloWorld',function(){return HelloWorld;});