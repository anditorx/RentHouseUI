import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, IC_ArrowLeftBlack, IC_Drawer} from '../../../res';

const Header = ({type, onPress}) => {
  if (type == 'transparent-with-back') {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: 30,
          width: 30,
          backgroundColor: colors.white,
          borderRadius: 30 / 2,
          position: 'absolute',
          top: 50,
          left: 20,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 99,
        }}>
        <IC_ArrowLeftBlack />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={{padding: 20}}>
      <IC_Drawer />
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({});
