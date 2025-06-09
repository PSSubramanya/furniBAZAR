import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import FBAppHeaderText from '../../components/FBAppHeaderText/FBAppHeaderText';
import {useSelector} from 'react-redux';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import colors from '../../constants/colors';
import FBBottomDrawerImage from '../../components/FBBottomDrawerImage/FBBottomDrawerImage';
import HomeScreenContent from '../HomeScreenContent/HomeScreenContent';
import FavouriteScreen from '../FavouriteScreen/FavouriteScreen';
import OrdersScreen from '../OrdersScreen/OrdersScreen';
import SettingsScreen from '../SettingsScreen/SettingsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import {RootState} from '../../store';

interface HomeScreenProps {}

const HomeScreen = (props: any) => {
  const {navigation} = props;
  const cartData = useSelector(
    (state: RootState) => state?.homeReducer?.cartData,
  );

  const [selectTab1, setSelectTab1] = useState(true);
  const [selectTab2, setSelectTab2] = useState(false);
  const [selectTab3, setSelectTab3] = useState(false);
  const [selectTab4, setSelectTab4] = useState(false);
  const [selectTab5, setSelectTab5] = useState(false);
  const [selectedTabNumber, setSelectedTabNumber] = useState(3);

  const addedToCartItems = cartData?.data; //NOTE: This value should come from Redux(From HomeScreenContent) which is also stored in backend for different screens

  useEffect(() => {
    selectBottomTab();
  }, [selectedTabNumber]);

  const selectBottomTab = () => {
    if (selectedTabNumber === 1) {
      setSelectTab1(true);
    } else {
      setSelectTab1(false);
    }
    if (selectedTabNumber === 2) {
      setSelectTab2(true);
    } else {
      setSelectTab2(false);
    }
    if (selectedTabNumber === 3) {
      setSelectTab3(true);
    } else {
      setSelectTab3(false);
    }
    if (selectedTabNumber === 4) {
      setSelectTab4(true);
    } else {
      setSelectTab4(false);
    }
    if (selectedTabNumber === 5) {
      setSelectTab5(true);
    } else {
      setSelectTab5(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        {/* Header */}
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
          <TouchableOpacity
            onPress={() => {
              navigation?.navigate('CartProductsScreen');
            }}>
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
            {addedToCartItems?.length > 0 && (
              <View style={styles?.addedCartItemsContainer}>
                <Text style={styles?.addedCartItems}>
                  {addedToCartItems?.length}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <ScrollView>
          {selectTab1 && <HomeScreenContent />}
          {selectTab2 && <FavouriteScreen />}
          {selectTab3 && <OrdersScreen />}
          {selectTab4 && <SettingsScreen />}
          {selectTab5 && <ProfileScreen />}
        </ScrollView>

        {/* Bottom Drawer */}
        <View
          style={{
            height: 60,
            marginBottom: -20,
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
              marginTop: 10,
              marginHorizontal: 20,
            }}>
            <FBBottomDrawerImage
              selected={selectTab1}
              icon={imagePath?.homeIcon}
              selectedIcon={imagePath?.homeFilledIcon}
              text={'Home'}
              onPress={() => {
                setSelectedTabNumber(1);
              }}
            />
            <FBBottomDrawerImage
              selected={selectTab2}
              icon={imagePath?.favouriteIcon}
              selectedIcon={imagePath?.favouriteFilledIcon}
              text={'Fav'}
              onPress={() => {
                setSelectedTabNumber(2);
              }}
            />
            <FBBottomDrawerImage
              selected={selectTab3}
              icon={imagePath?.ordersIcon}
              selectedIcon={imagePath?.orderFilledIcon}
              text={'Orders'}
              onPress={() => {
                setSelectedTabNumber(3);
              }}
            />
            <FBBottomDrawerImage
              selected={selectTab4}
              icon={imagePath?.settingsIcon}
              selectedIcon={imagePath?.settingsFilledIcon}
              text={'Settings'}
              onPress={() => {
                setSelectedTabNumber(4);
              }}
            />
            <FBBottomDrawerImage
              selected={selectTab5}
              icon={imagePath?.profileIcon}
              selectedIcon={imagePath?.profileFilledIcon}
              text={'Profile'}
              onPress={() => {
                setSelectedTabNumber(5);
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
