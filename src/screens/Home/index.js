import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header, ListItem} from '../../components';
import {
  colors,
  fonts,
  IC_Search,
  IL_House_01,
  IL_House_02,
  IL_House_03,
  IL_House_04,
  IL_House_05,
} from '../../res';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header */}
        <Header />
        {/* welcome text */}
        <View style={styles.wrapperWelcome}>
          <Text style={styles.textWelcome}>Find</Text>
          <Text style={styles.textWelcome}>Your Dream Home</Text>
        </View>
        {/* search section */}
        <View style={styles.wrapperSearch}>
          <View style={styles.wrapperTxtInput}>
            <TextInput
              placeholder="Find your dream home"
              style={styles.txtInput}
            />
            {/* btn search */}
            <View style={styles.wrapperBtnSearch}>
              <TouchableOpacity>
                <IC_Search />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* content */}
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.wrapperContent}>
            <ListItem
              type="main"
              name="Modern House"
              city="Bandung"
              image={IL_House_01}
              onPress={() => navigation.navigate('Detail')}
            />
            <ListItem
              type="main"
              name="White House"
              city="Bandung"
              image={IL_House_02}
            />
            <ListItem
              type="main"
              name="Wooden House"
              city="Bandung"
              image={IL_House_05}
            />
          </ScrollView>
          {/* recommend section */}
          <View style={styles.wrapperRecommend}>
            <Text style={styles.textTitleRecommend}>Recommended For You</Text>
            <ListItem name="Wooden House" city="Bandung" image={IL_House_05} />
            <ListItem
              name="Triangle House"
              city="Bandung"
              image={IL_House_03}
            />
            <ListItem name="Hill House" city="Bandung" image={IL_House_04} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: 'white'},
  wrapperWelcome: {paddingHorizontal: 20},
  textWelcome: {
    fontSize: 30,
    fontFamily: fonts.SemiBold,
  },
  wrapperSearch: {
    paddingHorizontal: 20,
    marginTop: 30,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  wrapperTxtInput: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: 55,
    width: '100%',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  txtInput: {fontSize: 14, fontFamily: fonts.Regular},
  wrapperBtnSearch: {
    backgroundColor: colors.primary,
    height: 39,
    width: 39,
    borderRadius: 39 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperContent: {
    marginTop: 30,
    paddingLeft: 20,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  wrapperRecommend: {marginTop: 30, paddingHorizontal: 20},
  textTitleRecommend: {fontSize: 16, fontFamily: fonts.SemiBold},
});
