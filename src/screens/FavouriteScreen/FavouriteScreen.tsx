import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../constants/fontFamily';
import {RootState} from '../../store';
import {useSelector} from 'react-redux';

const FavouriteScreen = (props: any) => {
  const {navigation} = props;
  const favouriteProductData = useSelector(
    (state: RootState) => state?.homeReducer?.favouriteProductData,
  );

  const [favouriteProducts, setFavouriteProducts] = useState([]);

  useEffect(() => {
    const favData = favouriteProductData?.data;
    setFavouriteProducts(favData);
  }, []);

  return (
    <>
      <FlatList
        data={favouriteProducts}
        contentContainerStyle={{marginTop: 20}}
        keyExtractor={item => item}
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() => {
                navigation?.navigate('ProductViewScreen', {
                  productData: item,
                });
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 90,
                  marginBottom: 10,
                  alignItems: 'center',
                  backgroundColor: colors?.white,
                  borderRadius: 10,
                  marginHorizontal: 10,
                  shadowColor: colors?.black,
                  shadowOffset: {width: -1, height: -1},
                  shadowOpacity: 0.2,
                  shadowRadius: 10,
                  elevation: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 5,
                      alignItems: 'center',
                    }}>
                    <Image
                      source={item?.image?.[0]}
                      height={80}
                      width={80}
                      style={{height: 80, width: 80}}
                      resizeMode={'contain'}
                    />
                    <View style={{marginLeft: 20}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: -3,
                        }}>
                        <Image
                          source={imagePath?.starIcon}
                          height={18}
                          width={18}
                          style={{height: 18, width: 18, marginTop: 1}}
                        />
                        <Text
                          style={{
                            marginLeft: 3,
                            fontFamily: fontFamily?.primaryFont?.medium,
                          }}>
                          Rating: ({item?.rating})
                        </Text>
                      </View>
                      <Text
                        style={{
                          marginTop: 5,
                          fontFamily: fontFamily?.primaryFont?.regular,
                        }}>
                        {item?.name}
                      </Text>
                      <Text
                        style={{
                          fontFamily: fontFamily?.primaryFont?.medium,
                          fontSize: 16,
                        }}>
                        {item?.companyName}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{marginRight: 5}}>
                  <TouchableOpacity onPress={() => {}}>
                    <View
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={imagePath?.categoryIcon}
                        height={18}
                        width={18}
                        style={{height: 18, width: 18}}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {}}>
                    <View
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={imagePath?.saveIconFilled}
                        height={18}
                        width={18}
                        style={{height: 18, width: 18}}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
          );
        }}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                alignItems: 'center',
                marginTop: 100,
              }}>
              <Image
                source={imagePath?.illustrationIcon8}
                height={200}
                width={200}
                style={{height: 200, width: 200}}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontFamily: fontFamily?.primaryFont?.medium,
                  fontSize: 16,
                }}>
                Nothing added to favourites
              </Text>
            </View>
          );
        }}
      />
    </>
  );
};
export default FavouriteScreen;
