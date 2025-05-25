import React from 'react';
import {Text, View, FlatList} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';
import {FBPaginationProps} from './typesFile';
import fontFamily from '../../constants/fontFamily';

const FBPagination = (props: FBPaginationProps) => {
  const {carousalIndex, carouselOfferData} = props;
  return (
    <View
      style={{
        height: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {carouselOfferData?.map((val, ind) => {
        return (
          <>
            {carousalIndex === ind ? (
              <View
                style={{
                  backgroundColor: colors?.darkBluegrey4,
                  height: 16,
                  marginRight: 5,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                key={ind}>
                <Text
                  style={{
                    color: colors?.white,
                    fontSize: 8,
                    paddingLeft: 5,
                    paddingRight: 5,
                    fontFamily: fontFamily?.primaryFont?.bold,
                  }}>
                  {`${carousalIndex + 1} of ${carouselOfferData?.length}`}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  backgroundColor: colors?.darkBluegrey4,
                  height: 5,
                  width: 5,
                  marginRight: 5,
                  borderRadius: 10,
                }}
                key={ind}
              />
            )}
          </>
        );
      })}
    </View>
  );
};
export default FBPagination;
