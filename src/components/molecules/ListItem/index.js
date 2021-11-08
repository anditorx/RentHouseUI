import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  colors,
  fonts,
  IC_ArrowRightBlack,
  IC_Star,
  IC_Star_Half,
} from '../../../res';

const ListItem = ({type, onPress, image, name, city}) => {
  if (type == 'facilities-item') {
    return (
      <View
        style={{
          backgroundColor: colors.white,
          height: 110,
          width: 100,
          borderRadius: 20,
          marginRight: 20,

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}>
        <Image
          source={image}
          style={{
            height: 80,
            width: 100,
            resizeMode: 'stretch',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 110 - 80,
          }}>
          <Text style={{fontSize: 10, fontFamily: fonts.Medium}}>{name}</Text>
        </View>
      </View>
    );
  }

  if (type == 'main') {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: 209,
          width: 231,
          backgroundColor: colors.white,
          borderRadius: 20,
          marginRight: 20,
          shadowColor: colors.black,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}>
        <Image
          source={image}
          style={{
            height: 150,
            width: '100%',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            resizeMode: 'stretch',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 15,
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{fontSize: 14, fontFamily: fonts.SemiBold}}>
              {name}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontFamily: fonts.Regular,
                color: colors.grey,
              }}>
              {city}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IC_Star />
            <IC_Star />
            <IC_Star />
            <IC_Star />
            <IC_Star_Half />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginVertical: 10,
        backgroundColor: colors.white,
        borderRadius: 20,

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View>
          <Image
            source={image}
            style={{
              height: 60,
              width: 60,
              borderRadius: 10,
              resizeMode: 'stretch',
            }}
          />
        </View>
        <View style={{flex: 1, paddingLeft: 20}}>
          <Text style={{fontSize: 14, fontFamily: fonts.SemiBold}}>{name}</Text>
          <Text
            style={{
              fontSize: 10,
              fontFamily: fonts.Regular,
              color: colors.grey,
            }}>
            {city}
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <IC_Star />
            <IC_Star />
            <IC_Star />
            <IC_Star />
            <IC_Star_Half />
          </View>
        </View>
        <TouchableOpacity>
          <IC_ArrowRightBlack />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
