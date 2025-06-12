import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import styles from './styles';
import fontFamily from '../../constants/fontFamily';
import imagePath from '../../constants/imagePath';
import colors from '../../constants/colors';
import {
  CommentsDataProps,
  ProductListProps,
  VarietyDataProps,
} from '../HomeScreenContent/typesFile';
const ProductViewScreen = (props: any) => {
  const {navigation, route} = props;
  const {params} = route;
  const {productData} = params;

  const [productDetails, setProductDetails] = useState<ProductListProps>();
  const [productVarietyDetails, setProductVarietyDetails] = useState<
    VarietyDataProps[]
  >([]);
  const [selectedVariant, setSelectedVariant] = useState<VarietyDataProps>();
  const [commentsArray, setCommentsArray] = useState<
    CommentsDataProps[] | undefined
  >([]);
  const [commentsDictionary, setCommentsDictionary] = useState([{}]);

  useEffect(() => {
    const varietyData = productData?.varieties;
    setProductDetails(productData); //Before fixing this check other cases
    setProductVarietyDetails(varietyData);
    setSelectedVariant(varietyData?.[1]);
  }, []);

  useEffect(() => {
    const commentsArrayData =
      productVarietyDetails?.length > 0
        ? selectedVariant?.commentsData
        : productDetails?.commentsData;
    setCommentsArray(commentsArrayData);
  }, [selectedVariant, productDetails]);

  useEffect(() => {
    if (commentsArray?.length > 0) {
      const flattenedComments = commentsArray.flatMap((obj: any) =>
        obj?.comments?.map((data: any) => data?.comment),
      );

      console.log('flattenedComments', flattenedComments?.length);

      /** Use this to build the rating bar ui via percentage calculation */
    }
  }, [commentsArray]);

  return (
    <View
      style={{
        justifyContent: 'center',
        paddingBottom: 100,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          marginLeft: 15,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation?.goBack();
          }}>
          <Image
            source={imagePath?.leftChevron}
            height={30}
            width={30}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <Text
          style={{fontFamily: fontFamily?.primaryFont?.medium, fontSize: 18}}>
          Product Details
        </Text>
      </View>

      <ScrollView>
        <View
          style={{
            marginTop: 30,
            zIndex: 1,
            alignItems: 'center',
          }}>
          <FlatList
            data={
              productVarietyDetails?.length > 0
                ? selectedVariant?.image
                : productDetails?.image
            }
            keyExtractor={item => item}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: 300, // width: 380, -> need this much for smooth sliding
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    backgroundColor: colors?.greyishBlue2, //greyColorLight2, greyColorLight3
                    marginHorizontal: 45,
                  }}>
                  <Image
                    source={item}
                    height={250}
                    width={250}
                    style={{
                      height: 260,
                      width: 260,
                      zIndex: 1,
                    }}
                    resizeMode="contain"
                    // testID={testID?.saveIcon}
                  />
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            width: 350,
            height: 300,
            // paddingBottom: 300,
            borderRadius: 10,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            justifyContent: 'center',
            backgroundColor: colors?.white,
            marginTop: -200,
            alignSelf: 'center',
          }}>
          <View style={{flexDirection: 'row', marginTop: 200}}>
            <Text
              style={{
                fontFamily: fontFamily?.primaryFont?.semiBold,
                fontSize: 18,
                color: colors.black,
                width: 140, //140,
                marginLeft: 16,
              }}>
              {productVarietyDetails?.length > 0
                ? selectedVariant?.name
                : productDetails?.name}
            </Text>
            <View
              style={{
                backgroundColor: colors?.darkBluegrey4,
                minWidth: 100,
                height: 50,
                marginLeft: 60,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: fontFamily?.primaryFont?.medium,
                  fontSize: 18,
                  color: colors.appBackgroundColor,
                  textAlign: 'center',
                  paddingHorizontal: 10,
                }}>
                ₹{' '}
                {productVarietyDetails?.length > 0
                  ? selectedVariant?.price
                  : productDetails?.price}
              </Text>
            </View>
          </View>
        </View>
        {productVarietyDetails?.length > 0 && (
          <View
            style={{
              height: 60,
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 16,
            }}>
            <FlatList
              data={productVarietyDetails}
              keyExtractor={item => item?.id}
              horizontal={true}
              contentContainerStyle={{alignItems: 'center'}}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <Pressable
                    onPress={() => {
                      setSelectedVariant(item);
                    }}>
                    <View
                      style={{
                        height: 35,
                        width: 35,
                        backgroundColor: item?.color,
                        marginLeft: 10,
                        borderRadius: 40,
                        borderWidth:
                          JSON.stringify(item) ===
                          JSON.stringify(selectedVariant)
                            ? 3
                            : 0,
                        borderColor: colors?.appBackgroundColor3,
                      }}></View>
                  </Pressable>
                );
              }}
            />
            <Text></Text>
          </View>
        )}
        {/* RATING SECTION: */}
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: fontFamily?.primaryFont?.medium,
              fontSize: 16,
              color: colors.black,
              marginLeft: 24,
              marginTop: 16,
            }}>
            Ratings:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
              marginLeft: 16,
            }}>
            <Image
              source={imagePath?.starIcon}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              // testID={testID?.starIcon}
            />
            <Image
              source={imagePath?.starIcon}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              // testID={testID?.starIcon}
            />
            <Image
              source={imagePath?.starIcon}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              // testID={testID?.starIcon}
            />
            <Image
              source={imagePath?.halfStarIcon}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              // testID={testID?.starIcon}
            />
            <Image
              source={imagePath?.emptyStarIcon}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              // testID={testID?.starIcon}
            />
            <Text
              style={{
                fontFamily: fontFamily?.primaryFont?.medium,
                fontSize: 12,
                color: colors.black,
                marginLeft: 5,
              }}>
              (
              {productVarietyDetails?.length > 0
                ? selectedVariant?.rating
                : productDetails?.rating}
              )
            </Text>
          </View>
        </View>
        <View style={{marginLeft: 20, marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={imagePath?.starIcon}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              // testID={testID?.starIcon}
            />
            <Text
              style={{
                fontFamily: fontFamily?.primaryFont?.medium,
                fontSize: 14,
                marginLeft: 5,
                marginTop: 1,
                color: colors.black,
              }}>
              5
            </Text>
            <View
              style={{
                borderWidth: 3,
                width: 250,
                height: 1,
                marginLeft: 5,
                marginTop: 2,
                borderColor: colors?.darkBluegrey4,
                borderRadius: 5,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Image
              source={imagePath?.starIcon}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              // testID={testID?.starIcon}
            />
            <Text
              style={{
                fontFamily: fontFamily?.primaryFont?.medium,
                fontSize: 14,
                marginLeft: 5,
                marginTop: 1,
                color: colors.black,
              }}>
              4
            </Text>
            <View
              style={{
                borderWidth: 3,
                width: 35,
                height: 1,
                marginLeft: 5,
                marginTop: 2,
                borderColor: colors?.darkBluegrey4,
                borderRadius: 5,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Image
              source={imagePath?.starIcon}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              // testID={testID?.starIcon}
            />
            <Text
              style={{
                fontFamily: fontFamily?.primaryFont?.medium,
                fontSize: 14,
                marginLeft: 5,
                marginTop: 1,
                color: colors.black,
              }}>
              3
            </Text>
            <View
              style={{
                borderWidth: 3,
                width: 20,
                height: 1,
                marginLeft: 5,
                marginTop: 2,
                borderColor: colors?.darkBluegrey4,
                borderRadius: 5,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Image
              source={imagePath?.starIcon}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              // testID={testID?.starIcon}
            />
            <Text
              style={{
                fontFamily: fontFamily?.primaryFont?.medium,
                fontSize: 14,
                marginLeft: 5,
                marginTop: 1,
                color: colors.black,
              }}>
              2
            </Text>
            <View
              style={{
                borderWidth: 3,
                width: 0,
                height: 1,
                marginLeft: 5,
                marginTop: 2,
                borderColor: colors?.darkBluegrey4,
                borderRadius: 5,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Image
              source={imagePath?.starIcon}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              // testID={testID?.starIcon}
            />
            <Text
              style={{
                fontFamily: fontFamily?.primaryFont?.medium,
                fontSize: 14,
                marginLeft: 5,
                marginTop: 1,
                color: colors.black,
              }}>
              1
            </Text>
            <View
              style={{
                borderWidth: 3,
                width: 20,
                height: 1,
                marginLeft: 5,
                marginTop: 2,
                borderColor: colors?.darkBluegrey4,
                borderRadius: 5,
              }}
            />
          </View>
        </View>

        {/* DESCRIPTION SECTION: */}
        <Text
          style={{
            fontFamily: fontFamily?.primaryFont?.medium,
            fontSize: 16,
            color: colors.black,
            marginLeft: 24,
            marginTop: 16,
          }}>
          Description:
        </Text>
        <Text
          style={{
            fontFamily: fontFamily?.primaryFont?.regular,
            fontSize: 14,
            color: colors.black,
            marginHorizontal: 24,
            marginTop: 10,
          }}>
          {productVarietyDetails?.length > 0
            ? selectedVariant?.description
            : productDetails?.description}
        </Text>
      </ScrollView>
    </View>
  );
};
export default ProductViewScreen;
