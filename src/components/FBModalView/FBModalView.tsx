import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {FBModalViewProps} from './typesFile';
import testID from '../../constants/testIdConstants';
import colors from '../../constants/colors';

const FBModalView = (props: FBModalViewProps) => {
  const {
    children,
    modalVisible = false,
    modalHeightPercentage = '90%',
    modalColor = colors?.white,
  } = props;
  return (
    <Modal
      isVisible={modalVisible}
      testID={testID?.modalContainer}
      style={{
        width: '100%',
        marginLeft: 0,
        justifyContent: 'flex-end',
        marginBottom: -20,
      }}>
      <View
        style={{
          height: modalHeightPercentage,
          borderRadius: 10,
          backgroundColor: modalColor,
          paddingHorizontal: 5,
        }}
        testID={testID?.modal?.view}>
        {children()}
      </View>
    </Modal>
  );
};
export default FBModalView;
