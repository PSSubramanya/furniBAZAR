import React, {useState, useEffect, useRef} from 'react';
import {View, Text, KeyboardAvoidingView, Image, TextInput} from 'react-native';
import styles from './styles.ts';
import FBAppHeaderText from '../../components/FBAppHeaderText/FBAppHeaderText';
import imagePath from '../../constants/imagePath.ts';
import strings from '../../constants/strings.ts';
import colors from '../../constants/colors.ts';
import fontFamily from '../../constants/fontFamily.ts';

const OtpScreen = (props: any) => {
  const textInput1 = useRef(null);
  const textInput2 = useRef(null);
  const textInput3 = useRef(null);
  const textInput4 = useRef(null);

  const [firstDigit, setFirstDigit] = useState<string>('');
  const [secondDigit, setSecondDigit] = useState<string>('');
  const [thirdDigit, setThirdDigit] = useState<string>('');
  const [fourthDigit, setFourthDigit] = useState<string>('');

  return (
    <View style={styles?.flexContainer}>
      <KeyboardAvoidingView behavior={'position'}>
        <View style={styles?.topContainer}>
          <FBAppHeaderText iconSize={40} styleProp={{marginTop: 100}} />
          <Image
            source={imagePath?.otpIcon2}
            height={1}
            width={1}
            style={styles?.illustrationImageStyle}
          />
          <Text style={styles?.signInInstructionsStyle}>
            Enter the OTP that you have recieved
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 80,
          }}>
          <TextInput
            value={firstDigit}
            style={{
              height: 80,
              width: 60,
              borderRadius: 5,
              borderWidth: 1.5,
              marginRight: 10,
              textAlign: 'center',
              fontSize: 20,
              fontFamily: fontFamily?.primaryFont?.regular,
            }}
            ref={textInput1}
            autoFocus={true}
            returnKeyType="next"
            onChangeText={val => {
              setFirstDigit(val);
              textInput2?.current?.focus();
            }}
          />
          <TextInput
            value={secondDigit}
            style={{
              height: 80,
              width: 60,
              borderRadius: 5,
              borderWidth: 1.5,
              marginRight: 10,
              textAlign: 'center',
              fontSize: 20,
              fontFamily: fontFamily?.primaryFont?.regular,
            }}
            ref={textInput2}
            onChangeText={val => {
              setSecondDigit(val);
              textInput3?.current?.focus();
            }}
          />
          <TextInput
            value={thirdDigit}
            style={{
              height: 80,
              width: 60,
              borderRadius: 5,
              borderWidth: 1.5,
              marginRight: 10,
              textAlign: 'center',
              fontSize: 20,
              fontFamily: fontFamily?.primaryFont?.regular,
            }}
            ref={textInput3}
            onChangeText={val => {
              setThirdDigit(val);
              textInput4?.current?.focus();
            }}
          />
          <TextInput
            value={fourthDigit}
            style={{
              height: 80,
              width: 60,
              borderRadius: 5,
              borderWidth: 1.5,
              marginRight: 10,
              textAlign: 'center',
              fontSize: 20,
              fontFamily: fontFamily?.primaryFont?.regular,
            }}
            ref={textInput4}
            onChangeText={val => {
              setFourthDigit(val);
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default OtpScreen;
