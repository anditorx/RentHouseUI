import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../res';

const Button = ({text}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.primary,
        paddingHorizontal: 58,
        paddingVertical: 15,
        borderRadius: 30,
      }}>
      <Text
        style={{
          fontFamily: fonts.SemiBold,
          fontSize: 16,
          color: colors.white,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
