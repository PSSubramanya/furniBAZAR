import React, {useState, useRef} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
} from 'react-native';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import testID from '../../constants/testIdConstants';
import {FBCarouselSliderProps} from './typesFile';
import FBPagination from '../FBPagination/FBPagination';

const FBCarouselSlider = (props: FBCarouselSliderProps) => {
  const {carouselOfferData} = props;
  const carousalRef = useRef<FlatList>(null);
  const [carousalIndex, setCarousalIndex] = useState(0);
  const [scrollAttempts, setScrollAttempts] = useState(0);

  const {width} = Dimensions.get('window');

  const setScrollIndex = (
    eventVal: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const offsetX = eventVal.nativeEvent.contentOffset.x;
    const index = Math.round((offsetX / width) * 0.92);
    setCarousalIndex(index);
  };

  const handleLoopingScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    /*
      NOTE:  Method to find current index of scroll
      const indexVal = Math.ceil(
        event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width,
      );
    */

    let tempAttemptValue;
    if (carousalIndex === 0) {
      tempAttemptValue = 0;
      setScrollAttempts(tempAttemptValue);
    } else {
      tempAttemptValue = scrollAttempts + 1;
      setScrollAttempts(tempAttemptValue);
    }
  };

  return (
    <View>
      <FlatList
        data={carouselOfferData}
        ref={carousalRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        testID={testID?.carousalSlider?.list}
        onScroll={event => {
          setScrollIndex(event);
        }}
        onMomentumScrollEnd={handleLoopingScroll}
        onScrollEndDrag={() => {
          if (scrollAttempts > carouselOfferData.length - 1) {
            carousalRef.current?.scrollToIndex({index: 0, animated: true});
          }
        }}
        keyExtractor={item => item?.id}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: width * 0.92,
                height: 200,
                backgroundColor: colors?.appBackgroundColor,
                alignSelf: 'center',
                marginTop: 20,
                borderRadius: 15,
                marginHorizontal: 16,
              }}
              testID={testID?.carousalSlider?.view + index}>
              <Text
                style={{
                  textAlign: 'right',
                  fontFamily: fontFamily?.primaryFont?.bold,
                  fontSize: 24,
                  zIndex: 1,
                  paddingHorizontal: 8,
                  marginTop: 10,
                }}
                testID={testID?.carousalSlider?.header + index}>
                {item?.header}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 10,
                }}>
                <Image
                  source={item?.coverImage}
                  height={100}
                  width={100}
                  style={{
                    height: 180,
                    width: 180,
                    marginTop: -5,
                  }}
                  resizeMode="contain"
                  testID={testID?.carousalSlider?.image + index}
                />
                <View>
                  <Text
                    style={{
                      width: 150,
                      height: 60,
                      textAlign: 'right',
                      fontFamily: fontFamily?.primaryFont?.regular,
                      fontSize: 12,
                      zIndex: 1,
                      paddingHorizontal: 8,
                    }}
                    testID={testID?.carousalSlider?.description + index}>
                    {item?.description}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 20,
                      borderRadius: 10,
                      backgroundColor: colors?.darkBluegrey4,
                      paddingVertical: 10,
                    }}
                    testID={testID?.carousalSlider?.discountView + index}>
                    <Image
                      source={imagePath?.tagIcon}
                      height={30}
                      width={30}
                      style={styles?.tagIcon}
                      testID={testID?.tagIcon}
                    />
                    <Text
                      style={{
                        textAlign: 'right',
                        fontFamily: fontFamily?.primaryFont?.bold,
                        fontSize: 28,
                        color: colors?.white,
                        alignSelf: 'center',
                        paddingHorizontal: 8,
                      }}
                      testID={testID?.carousalSlider?.discountValue + index}>
                      {item?.discount}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />

      <FBPagination
        carousalIndex={carousalIndex}
        carouselOfferData={carouselOfferData}
      />
    </View>
  );
};
export default FBCarouselSlider;
