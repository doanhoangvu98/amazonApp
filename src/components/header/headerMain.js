import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import font from '../../constant/fonts';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SearchBar} from 'react-native-elements';
import * as Navigation from '../../navigation/navigation';

const HeaderMain = () => {
  const statusBarHeight = getStatusBarHeight();
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#83D4E3', '#A1E3CC']}
      style={styles.linearGradient}>
      <View
        style={[styles.actionBarContainer, {marginTop: statusBarHeight + 20}]}>
        <Icon
          name="arrow-back"
          size={28}
          color="#000"
          onPress={() => Navigation.goBack()}
        />
        <View style={styles.search}>
          <SearchBar
            placeholder="Search Amazon"
            containerStyle={styles.searchBar}
            inputContainerStyle={styles.inputSearchBar}
            inputStyle={styles.placeholderSearch}
            lightTheme
          />
          <Icon
            name="camera-alt"
            size={20}
            color="#839691"
            style={styles.iconSearchBarRight}
          />
          <Icon
            name="mic"
            size={28}
            color="#839691"
            style={styles.iconSearchBarRight}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 100,
    alignItems: 'flex-end',
  },
  actionBarContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginLeft: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B7C8C7',
  },
  searchBar: {
    flex: 3,
    backgroundColor: 'white',
    borderWidth: 0,
    shadowColor: 'white',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    padding: 0,
    borderRadius: 10,
  },
  iconSearchBarRight: {
    marginHorizontal: 4,
  },
  inputSearchBar: {
    height: 40,
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 10,
  },
  placeholderSearch: {
    fontSize: 16,
    alignItems: 'center',
    fontFamily: font.regular,
  },
});

export default HeaderMain;
