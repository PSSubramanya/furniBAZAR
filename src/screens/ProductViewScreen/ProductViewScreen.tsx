import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ImageSourcePropType,
  Animated,
  Linking,
} from 'react-native';
import styles from './styles';
import fontFamily from '../../constants/fontFamily';
import imagePath from '../../constants/imagePath';
import colors from '../../constants/colors';
import {FAQItems, colorsForCommentNames} from '../../utils/mockData';
import {
  CommentsDataProps,
  ProductListProps,
  RatingDataProp,
  VarietyDataProps,
} from '../HomeScreenContent/typesFile';
import FBPagination from '../../components/FBPagination/FBPagination';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const ProductViewScreen = (props: any) => {
  const {navigation, route} = props;
  const {params} = route;
  const {productData} = params;
  const ratingCarLength = 300;

  const translateX = useRef(new Animated.Value(0)).current;

  const favouriteProductData = useSelector(
    (state: RootState) => state?.homeReducer?.favouriteProductData,
  );

  const [productDetails, setProductDetails] = useState<ProductListProps>();
  const [productVarietyDetails, setProductVarietyDetails] = useState<
    VarietyDataProps[]
  >([]);
  const [selectedVariant, setSelectedVariant] = useState<VarietyDataProps>();
  const [carousalIndex, setCarousalIndex] = useState(0);
  const [commentsArray, setCommentsArray] = useState<
    CommentsDataProps[] | undefined
  >([]);
  const [totalComments, setTotalComments] = useState(0);
  const [selectedCommentsRatingIndex, setSelectedCommentsRatingIndex] =
    useState(4);
  const [ratingValue, setRatingValue] = useState<number | undefined>(0);
  const [discount, setDiscount] = useState<string | undefined>('');
  const [productPriceValue, setProductPriceValue] = useState<string>('');
  const [specialTextValue, setSpecialTextValue] = useState<string | undefined>(
    '',
  );
  const [ratingStatistics, setRatingStatistics] = useState<RatingDataProp>();
  const [displayableImagesData, setDisplayableImagesData] = useState<
    ImageSourcePropType | undefined
  >([]);
  const [favouriteProducts, setFavouriteProducts] = useState([]);
  const [showStarFilter, setShowStarFilter] = useState(false);
  const [quantityOfProduct, setQuantityOfProduct] = useState<number>(0);
  const [linkUrl, setLinkUrl] = useState<string>(' ');

  useEffect(() => {
    const varietyData = productData?.varieties;
    const favData = favouriteProductData?.data;
    const linkUrlValue = productData?.shareLink;
    setProductDetails(productData); //Before fixing this check other cases
    setProductVarietyDetails(varietyData);
    setSelectedVariant(varietyData?.[1]);
    setFavouriteProducts(favData);
    setLinkUrl(linkUrlValue);
  }, []);

  useEffect(() => {
    const rating =
      productVarietyDetails?.length > 0
        ? selectedVariant?.rating
        : productDetails?.rating;

    const ratingStats =
      productVarietyDetails?.length > 0
        ? selectedVariant?.ratingData
        : productDetails?.ratingData;

    const displayableImages =
      productVarietyDetails?.length > 0
        ? selectedVariant?.image
        : productDetails?.image;

    const discountData =
      productVarietyDetails?.length > 0
        ? selectedVariant?.discount
        : productDetails?.discount;

    const specialText =
      productVarietyDetails?.length > 0
        ? selectedVariant?.specialText
        : productDetails?.specialText;

    const productPrice =
      productVarietyDetails?.length > 0
        ? selectedVariant?.price
        : productDetails?.price;

    if (rating !== undefined) {
      setRatingValue(Number(rating));
    }

    if (productPrice !== undefined) {
      setRatingValue(Number(rating));
    }

    setDiscount(discountData);
    setSpecialTextValue(specialText);
    setProductPriceValue(productPrice);

    setRatingStatistics(ratingStats);
    setDisplayableImagesData(displayableImages);
  }, [selectedVariant, productDetails]);

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

      setTotalComments(flattenedComments?.length);

      console.log('flattenedComments', flattenedComments?.length);
    }
  }, [commentsArray]);

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: showStarFilter ? -10 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [showStarFilter]);

  useEffect(() => {
    console.log(
      'productPrice',
      productPriceValue,
      typeof productPriceValue,
      quantityOfProduct,
      typeof quantityOfProduct,
      Number(productPriceValue?.replace(',', '')) * quantityOfProduct,
    );
  }, [quantityOfProduct]);

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(linkUrl);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(linkUrl);
    }
    // else {
    //   Alert.alert(`Don't know how to open this URL: ${url}`);
    // }
  }, [linkUrl]);

  const setScrollIndex = (
    eventVal: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const offsetX = eventVal.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / 300);
    setCarousalIndex(index);
  };

  /** Use useCallback to make this change the colors for the product change and not on star change */
  const getRandomColorForCommentNames = () => {
    let randomNumber = Math.floor(Math.random() * 12);
    let randomColor = colorsForCommentNames?.[randomNumber];
    return colors?.[randomColor];
  };

  const generateTwoLettersForCommentImage = (name: string) => {
    let nameArray = name?.split(' ');
    if (nameArray?.length > 1) {
      return name?.[0] + name?.[1];
    } else {
      return name?.[0];
    }
  };

  const starIconDecider = (val: number) => {
    if (val > ratingValue) {
      if (ratingValue > val - 1) {
        return imagePath?.halfStarIcon;
      } else {
        return imagePath?.emptyStarIcon;
      }
    } else {
      return imagePath?.starIcon;
    }
  };

  const renderRatingFilterView = (starCount: number) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedCommentsRatingIndex(starCount - 1);
          setShowStarFilter(!showStarFilter);
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            paddingHorizontal: 5,
            marginRight: 10,
            borderRadius: 5,
            borderWidth: 1,
            marginTop: 6,
          }}>
          <Text
            style={{
              fontFamily: fontFamily?.primaryFont?.medium,
              fontSize: 16,
              color: colors.black,
              marginHorizontal: 5,
            }}>
            {starCount}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const getStarRatingBarLength = (numberOfComments: number | undefined) => {
    const totalRatingCount =
      ratingStatistics?.['5Star'] +
      ratingStatistics?.['4Star'] +
      ratingStatistics?.['3Star'] +
      ratingStatistics?.['2Star'] +
      ratingStatistics?.['1Star'];
    return ratingCarLength * (numberOfComments / totalRatingCount);
  };

  const renderFAQSection = (icon: Image, text: string) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
            marginLeft: 22,
            width: 150,
          }}>
          <Image
            source={icon}
            height={30}
            width={30}
            style={{height: 16, width: 16}}
            // testID={testID?.starIcon}abcd
          />
          <Text
            style={{
              fontFamily: fontFamily?.primaryFont?.regular,
              fontSize: 12,
              color: colors.navyBlueColor,
              marginLeft: 6,
            }}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        paddingBottom: 100,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginLeft: 5,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
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
        <TouchableOpacity
          onPress={() => {
            handlePress();
          }}>
          <Image
            source={imagePath?.shareIcon}
            height={30}
            width={30}
            style={{height: 25, width: 25, marginRight: 16}}
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View
          style={{
            marginTop: 30,
            zIndex: 3,
            alignItems: 'center',
          }}>
          <FlatList
            data={displayableImagesData}
            keyExtractor={item => item}
            horizontal={true}
            onScroll={event => {
              setScrollIndex(event);
            }}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View>
                  {discount !== undefined && (
                    <Image
                      source={imagePath?.discountStarIcon}
                      height={60}
                      width={60}
                      style={{
                        height: 55,
                        width: 55,
                        position: 'absolute',
                        zIndex: 1,
                        left: 25,
                      }}
                    />
                  )}
                  {discount && (
                    <View
                      style={{
                        position: 'absolute',
                        zIndex: 1,
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontFamily: fontFamily?.primaryFont?.semiBold,
                          fontSize: 12,
                          left: 37,
                          top: 13,
                          width: 34,
                        }}>
                        {discount}%
                      </Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontFamily: fontFamily?.primaryFont?.semiBold,
                          fontSize: 12,
                          left: 35,
                          top: 10,
                          width: 34,
                        }}>
                        off
                      </Text>
                    </View>
                  )}
                  <View
                    style={{
                      width: 300, // width: 380, -> need this much for smooth sliding
                      // justifyContent: 'center',
                      // alignItems: 'center',
                      borderRadius: 20,
                      backgroundColor: colors?.greyishBlue2, //greyColorLight2, greyColorLight3
                      marginHorizontal: 45,
                      marginTop: 5,
                    }}>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        zIndex: 2,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      }}
                      onPress={() => {}}>
                      <Image
                        source={
                          JSON.stringify(favouriteProducts)?.includes(
                            JSON.stringify(productData),
                          )
                            ? imagePath?.saveIconFilled
                            : imagePath?.saveIcon
                        }
                        height={40}
                        width={40}
                        style={{
                          height: 30,
                          width: 30,
                          position: 'absolute',
                          marginRight: 10,
                          marginTop: 5,
                        }}
                        // testID={testID?.saveIcon}
                      />
                    </TouchableOpacity>
                    <Image
                      source={item}
                      height={250}
                      width={250}
                      style={{
                        height: 260,
                        width: 260,
                        zIndex: 1,
                        alignSelf: 'center',
                      }}
                      resizeMode="contain"
                      // testID={testID?.saveIcon}
                    />
                  </View>
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
          <View style={{marginTop: 190}}>
            {displayableImagesData?.length > 1 && (
              <FBPagination
                carousalIndex={carousalIndex}
                carouselOfferData={displayableImagesData}
              />
            )}
          </View>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
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
                ₹ {productPriceValue}
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
          </View>
        )}

        {specialTextValue !== undefined && (
          <View
            style={{
              backgroundColor:
                specialTextValue === 'NOW IN STOCK'
                  ? colors?.greenSpecialMessageColor
                  : colors?.scarletRed1,
              marginTop: 10,
              minWidth: 100,
              maxWidth: 130,
              height: 22,
              marginLeft: 20,
              borderRadius: 5,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: fontFamily?.primaryFont?.medium,
                fontSize: 12,
                color: colors.white,
                textAlign: 'center',
                paddingHorizontal: 5,
              }}>
              {specialTextValue}
            </Text>
          </View>
        )}

        {/* DESCRIPTION SECTION: */}
        <Text
          style={{
            fontFamily: fontFamily?.primaryFont?.medium,
            fontSize: 16,
            color: colors.black,
            marginLeft: 24,
            marginTop: 10,
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

        {/* RATING SECTION: */}
        <View style={{flexDirection: 'row', marginTop: 20}}>
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
              source={starIconDecider(1)}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              // testID={testID?.starIcon}
            />
            <Image
              source={starIconDecider(2)}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              // testID={testID?.starIcon}
            />
            <Image
              source={starIconDecider(3)}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              // testID={testID?.starIcon}
            />
            <Image
              source={starIconDecider(4)}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              // testID={testID?.starIcon}
            />
            <Image
              source={starIconDecider(5)}
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
                width: getStarRatingBarLength(ratingStatistics?.['5Star']),
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
                width: getStarRatingBarLength(ratingStatistics?.['4Star']),
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
                width: getStarRatingBarLength(ratingStatistics?.['3Star']),
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
                width: getStarRatingBarLength(ratingStatistics?.['2Star']),
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
                width: getStarRatingBarLength(ratingStatistics?.['1Star']),
                height: 1,
                marginLeft: 5,
                marginTop: 2,
                borderColor: colors?.darkBluegrey4,
                borderRadius: 5,
              }}
            />
          </View>
        </View>

        {/* SHOPPING ADVANTAGES SECTION: */}

        <Text
          style={{
            fontFamily: fontFamily?.primaryFont?.medium,
            fontSize: 16,
            color: colors.black,
            marginLeft: 24,
            marginTop: 16,
            marginBottom: 6,
          }}>
          Shopping FAQs:
        </Text>
        <FlatList
          data={FAQItems}
          numColumns={2}
          keyExtractor={item => item?.name}
          renderItem={({item, index}) => {
            return <>{renderFAQSection(item?.icon, item?.name)}</>;
          }}
        />

        {/* PRODUCT GALLERY IMAGES SECTION: */}

        {/* REVIEW SECTION: */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontFamily: fontFamily?.primaryFont?.medium,
              fontSize: 16,
              color: colors.black,
              marginLeft: 24,
              marginTop: 16,
            }}>
            Reviews:
          </Text>
          <View style={{flexDirection: 'row'}}>
            {/* HERE */}
            {showStarFilter && (
              <Animated.View
                style={{flexDirection: 'row', transform: [{translateX}]}}>
                {renderRatingFilterView(1)}
                {renderRatingFilterView(2)}
                {renderRatingFilterView(3)}
                {renderRatingFilterView(4)}
                {renderRatingFilterView(5)}
              </Animated.View>
            )}
            <TouchableOpacity
              onPress={() => {
                setShowStarFilter(!showStarFilter);
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  marginRight: 10,
                  borderRadius: 5,
                  borderWidth: 1,
                  marginTop: 6,
                }}>
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    fontSize: 16,
                    color: colors.black,
                    marginHorizontal: 5,
                  }}>
                  {selectedCommentsRatingIndex + 1} Star
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Need to add comments section here with 3 comments and filter and a view all section in a new page with filter */}
        {totalComments === 0 && (
          <View
            style={{
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Image
              source={imagePath?.illustrationIcon5}
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
              No reviews added for this product yet
            </Text>
          </View>
        )}

        {commentsArray?.[selectedCommentsRatingIndex]?.comments?.map(
          (val, ind) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  alignItems: 'center',
                  marginLeft: 16,
                  marginRight: 50,
                }}>
                {val?.profileIcon ? (
                  <Image
                    source={val?.profileIcon}
                    height={30}
                    width={30}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                      marginTop: 10,
                      borderWidth: 2,
                      borderColor: colors?.darkBluegrey4,
                    }}
                    // testID={testID?.starIcon}
                  />
                ) : (
                  <View
                    style={{
                      backgroundColor: getRandomColorForCommentNames(),
                      height: 50,
                      width: 50,
                      marginTop: 10,
                      borderRadius: 25,
                      borderWidth: 2,
                      borderColor: colors?.darkBluegrey4,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: fontFamily?.primaryFont?.bold,
                        fontSize: 14,
                        color: colors.black,
                        textTransform: 'uppercase',
                      }}>
                      {generateTwoLettersForCommentImage(val?.username)}
                    </Text>
                  </View>
                )}

                <View style={{marginLeft: 16, marginRight: 24}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: 285,
                    }}>
                    <Text
                      style={{
                        fontFamily: fontFamily?.primaryFont?.bold,
                        fontSize: 14,
                        color: colors.black,
                        marginTop: 14,
                        textTransform: 'uppercase',
                      }}>
                      {val?.username}
                    </Text>
                    {val?.date && (
                      <Text
                        style={{
                          fontFamily: fontFamily?.primaryFont?.medium,
                          fontSize: 12,
                          color: colors.darkBluegrey4,
                          marginTop: 14,
                          textTransform: 'uppercase',
                        }}>
                        {val?.date}
                      </Text>
                    )}
                  </View>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.regular,
                      fontSize: 14,
                      color: colors.black,
                      marginTop: 2,
                    }}>
                    {val?.comment}
                  </Text>
                </View>
              </View>
            );
          },
        )}

        {totalComments !== 0 &&
          commentsArray?.[selectedCommentsRatingIndex]?.comments?.length ===
            0 && (
            <View
              style={{
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image
                source={imagePath?.illustrationIcon5}
                height={200}
                width={200}
                style={{height: 200, width: 200}}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontFamily: fontFamily?.primaryFont?.regular,
                  fontSize: 16,
                }}>
                No comment for {selectedCommentsRatingIndex + 1} star rating
              </Text>
            </View>
          )}
      </ScrollView>
      <View
        style={{
          backgroundColor: colors?.white,
          height: 150,
          borderRadius: 20,
          paddingBottom: 16,
          shadowColor: colors?.black,
          shadowOffset: {width: -1, height: -1},
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 0.5,
              borderRadius: 5,
              width: 105,
              marginLeft: 16,
              marginBottom: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                if (quantityOfProduct > 0) {
                  setQuantityOfProduct(prev => prev - 1);
                }
              }}>
              <View
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.regular,
                    color: colors?.darkBluegrey4,
                    fontSize: 20,
                    textAlign: 'center',
                  }}>
                  --
                </Text>
              </View>
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: 'center',
                marginHorizontal: 10,
                fontFamily: fontFamily?.primaryFont?.medium,
                fontSize: 16,
                color: colors?.darkBluegrey4,
              }}>
              {quantityOfProduct}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setQuantityOfProduct(prev => prev + 1);
              }}>
              <View
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.regular,
                    color: colors?.darkBluegrey4,
                    fontSize: 20,
                    textAlign: 'center',
                  }}>
                  +
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: fontFamily?.primaryFont?.regular,
              color: colors?.darkBluegrey4,
              fontSize: 14,
              marginRight: 20,
              marginTop: 8,
            }}>
            Total Price:
            <Text
              style={{
                fontFamily: fontFamily?.primaryFont?.semiBold,
              }}>
              {' '}
              ₹{Number(productPriceValue?.replace(',', '')) * quantityOfProduct}
            </Text>
          </Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              backgroundColor: colors?.darkBluegrey4,
              height: 55,
              marginHorizontal: 16,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontFamily: fontFamily?.primaryFont?.semiBold,
                color: colors?.appBackgroundColor,
              }}>
              BUY NOW
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProductViewScreen;

// pagination - DONE
// comments profile image and name first 2 letters logic - DONE
// Limited edition, In Stock, Discount data - DONE
// Date in comments - DONE
// Bottom drawer for price calculation display - DONE
// comments section filter - animated - DONE
// share and like icons - DONE

// FAQ section
// Add share product link in mockData and share on media feature
