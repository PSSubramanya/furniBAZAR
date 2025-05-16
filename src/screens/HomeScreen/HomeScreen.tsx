import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import FBAppHeaderText from '../../components/FBAppHeaderText/FBAppHeaderText';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import colors from '../../constants/colors';

interface HomeScreenProps {}

const HomeScreen = (props: any) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={imagePath?.menuIcon4}
                height={30}
                width={30}
                style={{
                  height: 30,
                  width: 30,
                  marginRight: 20,
                }}
              />
            </TouchableOpacity>
            <FBAppHeaderText iconSize={24} fontsize={16} />
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={imagePath?.bagIcon}
              height={30}
              width={30}
              style={{
                height: 30,
                width: 30,
                marginRight: 20,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            // backgroundColor: colors?.darkBlueGrey,
            height: 100,
            marginBottom: -40,
            backgroundColor: colors?.white,
            borderTopWidth: 0.5,
            borderColor: colors?.greyColor,
            shadowColor: colors?.black,
            shadowOffset: {width: -1, height: -10},
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
              paddingLeft: 20,
            }}>
            <Image
              source={imagePath?.homeIcon}
              height={30}
              width={30}
              style={{
                height: 30,
                width: 30,
                marginRight: 20,
              }}
            />
            <Image
              source={imagePath?.favouriteIcon}
              height={30}
              width={30}
              style={{
                height: 30,
                width: 30,
                marginRight: 20,
              }}
            />
            <Image
              source={imagePath?.ordersIcon}
              height={30}
              width={30}
              style={{
                height: 30,
                width: 30,
                marginRight: 20,
              }}
            />
            <Image
              source={imagePath?.settingsIcon}
              height={30}
              width={30}
              style={{
                height: 30,
                width: 30,
                marginRight: 20,
              }}
            />
            <Image
              source={imagePath?.profileIcon}
              height={30}
              width={30}
              style={{
                height: 30,
                width: 30,
                marginRight: 20,
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

/*
    Home
    Favourite
    Booking/Orders
    Settings
    Profile
*/
