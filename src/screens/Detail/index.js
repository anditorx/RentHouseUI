import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Gap, Header, ListItem} from '../../components';
import {
  colors,
  fonts,
  IC_Call,
  IC_Chat,
  IC_Star,
  IC_Star_Half,
  IL_BedRoom,
  IL_Garage,
  IL_House_01,
  IL_Pool,
  IL_User_01,
} from '../../res';

const Detail = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <ScrollView>
        {/* header */}
        <Header
          type="transparent-with-back"
          onPress={() => navigation.goBack()}
        />
        {/* image */}
        <Image
          source={IL_House_01}
          style={{
            height: 300,
            width: '100%',
            resizeMode: 'stretch',
            zIndex: -1,
          }}
        />
        {/* content */}
        <View
          style={{
            top: -50,
            width: '100%',
            backgroundColor: colors.white,
            zIndex: 99,
            bottom: 0,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}>
          {/* section name */}
          <View
            style={{
              flexDirection: 'row',
              padding: 20,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 18, fontFamily: fonts.SemiBold}}>
                Modern House
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.Regular,
                  color: colors.grey,
                }}>
                KBP Bandung, Indonesia
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
          {/* section agent */}
          <View style={{paddingHorizontal: 20}}>
            <Text style={{fontSize: 14, fontFamily: fonts.SemiBold}}>
              Listing Agent
            </Text>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                source={IL_User_01}
                style={{height: 50, width: 50, borderRadius: 50 / 2}}
              />
              <View style={{flex: 1, paddingLeft: 15}}>
                <Text style={{fontSize: 14, fontFamily: fonts.Medium}}>
                  Samarinda Kita
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: fonts.Regular,
                    color: colors.grey,
                  }}>
                  House Owner
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <IC_Chat />
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity>
                  <IC_Call />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* house facilities */}
          <View style={{marginTop: 20}}>
            <Text
              style={{
                fontFamily: fonts.SemiBold,
                fontSize: 14,
                paddingLeft: 20,
              }}>
              House Facilities
            </Text>
            {/* house facilities item */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{paddingVertical: 10, paddingLeft: 20}}>
              <ListItem
                type="facilities-item"
                image={IL_Pool}
                name="Swimming Pool"
              />
              <ListItem
                type="facilities-item"
                image={IL_BedRoom}
                name="4 Bedroom"
              />
              <ListItem
                type="facilities-item"
                image={IL_Garage}
                name="Garage"
              />
            </ScrollView>
          </View>
          {/* description */}
          <View style={{padding: 20}}>
            <Text style={{fontSize: 14, fontFamily: fonts.SemiBold}}>
              Description
            </Text>
            <Text
              style={{
                fontFamily: fonts.Regular,
                color: colors.grey,
                fontSize: 12,
              }}>
              Luxury homes at affordable prices with Bandung's hilly atmosphere.
              Located in a strategic location, flood free.
            </Text>
          </View>
        </View>
      </ScrollView>
      {/* book */}
      <View
        style={{
          height: 100,
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
          }}>
          <View>
            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.SemiBold,
                color: colors.grey,
              }}>
              Price
            </Text>
            <Text
              style={{
                fontFamily: fonts.Bold,
                fontSize: 20,
                color: colors.primary,
              }}>
              $7,500
            </Text>
          </View>
          {/* button */}
          <Button text="Book Now" />
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
