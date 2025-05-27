import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import testID from '../../constants/testIdConstants';
import {FBPaginationProps} from './typesFile';

const FBPagination = (props: FBPaginationProps) => {
  const {carousalIndex, carouselOfferData} = props;
  return (
    <View style={styles?.paginationViewStyle} testID={testID?.pagination?.view}>
      {carouselOfferData?.map((val, ind) => {
        return (
          <>
            {carousalIndex === ind ? (
              <View
                style={styles?.selectedIndexStyle}
                key={ind}
                testID={testID?.pagination?.selectedDot}>
                <Text
                  style={styles?.selectedIndexText}
                  testID={testID?.pagination?.selectedDotText}>
                  {`${carousalIndex + 1} of ${carouselOfferData?.length}`}
                </Text>
              </View>
            ) : (
              <View
                style={styles?.nonSelectedIndexStyle}
                key={ind}
                testID={testID?.pagination?.nonSelectedDot}
              />
            )}
          </>
        );
      })}
    </View>
  );
};
export default FBPagination;
