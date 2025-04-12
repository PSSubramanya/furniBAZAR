import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  Animated,
  Dimensions,
  useAnimatedValue,
} from 'react-native';
import styles from './styles.ts';
import FBAppHeaderText from '../../components/FBAppHeaderText/FBAppHeaderText';
import imagePath from '../../constants/imagePath.ts';
import strings from '../../constants/strings.ts';
import colors from '../../constants/colors.ts';
import fontFamily from '../../constants/fontFamily.ts';
import {FBToastView} from '../../components/FBToastView/FBToastView.tsx';
import useToastAnimation from '../../components/FBToastView/useToastAnimatons.ts';

const OtpScreen = (props: any) => {
  const {height} = Dimensions.get('window');
  const toastDirectionFromTop = true;
  const fadeAnim = useAnimatedValue(0);
  const animatedValue = useRef(
    new Animated.Value(toastDirectionFromTop ? -height : height),
  ).current;
  const {fadeIn, startDecayAnimation} = useToastAnimation(
    fadeAnim,
    animatedValue,
    height,
    toastDirectionFromTop,
  );

  const textInput1 = useRef<TextInput>(null);
  const textInput2 = useRef<TextInput>(null);
  const textInput3 = useRef<TextInput>(null);
  const textInput4 = useRef<TextInput>(null);

  const [firstDigit, setFirstDigit] = useState<string>('');
  const [secondDigit, setSecondDigit] = useState<string>('');
  const [thirdDigit, setThirdDigit] = useState<string>('');
  const [fourthDigit, setFourthDigit] = useState<string>('');

  const [enableButton, setEnableButton] = useState<boolean>(false);

  const [otpType, setOtpType] = useState<string>('error');
  const [otpHeaderMessage, setOtpHeaderMessage] = useState<string>('');
  const [otpDescription, setOtpDescription] = useState<string>('');

  const [backspacePressed, setBackspacePressed] = useState<boolean>(false);

  useEffect(() => {
    if (
      firstDigit?.length > 0 &&
      secondDigit?.length > 0 &&
      thirdDigit?.length > 0 &&
      fourthDigit?.length > 0
    ) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  }, [firstDigit, secondDigit, thirdDigit, fourthDigit]);

  useEffect(() => {
    if (otpHeaderMessage !== '') {
      showToast();
    }
  }, [otpType]);

  const otpVerify = () => {
    const otpValue = firstDigit + secondDigit + thirdDigit + fourthDigit;
    if (otpValue !== '1234') {
      setOtpType('error');
      setOtpHeaderMessage('Attempt again');
      setOtpDescription('Wrong OTP entered. Please try again.');
    } else {
      setOtpType('success');
      setOtpHeaderMessage('Account verified');
      setOtpDescription('Successfully logged in!');
    }
  };

  const backPressEvent = (
    ev: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (ev?.nativeEvent?.key === 'Backspace') {
      setBackspacePressed(true);
    } else {
      setBackspacePressed(false);
    }
  };

  const handInputFields = () => {
    if (!backspacePressed) {
      if (textInput1?.current?.isFocused()) {
        textInput2?.current?.focus();
      } else if (textInput2?.current?.isFocused()) {
        textInput3?.current?.focus();
      } else if (textInput3?.current?.isFocused()) {
        textInput4?.current?.focus();
      }
    } else {
      if (textInput2?.current?.isFocused()) {
        textInput1?.current?.focus();
      } else if (textInput3?.current?.isFocused()) {
        textInput2?.current?.focus();
      } else if (textInput4?.current?.isFocused()) {
        textInput3?.current?.focus();
      }
    }
  };

  const showToast = () => {
    // if (usernameError || passwordError || mobileNumberError) {
    fadeIn();
    startDecayAnimation();
    // }
  };

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
        <Text
          style={{
            marginTop: 80,
            textAlign: 'center',
            fontSize: 14,
            fontFamily: fontFamily?.primaryFont?.regular,
          }}>
          This OTP is valid for 05:00 mins
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <TextInput
            value={firstDigit}
            style={{
              height: 80,
              width: 60,
              borderRadius: 5,
              borderWidth: textInput1?.current?.isFocused() ? 2 : 1,
              marginRight: 10,
              textAlign: 'center',
              fontSize: 20,
              fontFamily: fontFamily?.primaryFont?.regular,
              backgroundColor: textInput1?.current?.isFocused()
                ? colors?.skyBlue
                : colors?.lightSkyBlue,
              borderColor: textInput1?.current?.isFocused()
                ? colors?.secondaryColor
                : colors?.black,
            }}
            ref={textInput1}
            autoFocus={true}
            returnKeyType="next"
            onChangeText={val => {
              handInputFields();
              setFirstDigit(val);
            }}
            onKeyPress={ev => {
              backPressEvent(ev);
            }}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            value={secondDigit}
            style={{
              height: 80,
              width: 60,
              borderRadius: 5,
              borderWidth: textInput2?.current?.isFocused() ? 2 : 1,
              marginRight: 10,
              textAlign: 'center',
              fontSize: 20,
              fontFamily: fontFamily?.primaryFont?.regular,
              backgroundColor: textInput2?.current?.isFocused()
                ? colors?.skyBlue
                : colors?.lightSkyBlue,
              borderColor: textInput2?.current?.isFocused()
                ? colors?.secondaryColor
                : colors?.black,
            }}
            ref={textInput2}
            onChangeText={val => {
              handInputFields();
              setSecondDigit(val);
            }}
            onKeyPress={ev => {
              backPressEvent(ev);
            }}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            value={thirdDigit}
            style={{
              height: 80,
              width: 60,
              borderRadius: 5,
              borderWidth: textInput3?.current?.isFocused() ? 2 : 1,
              marginRight: 10,
              textAlign: 'center',
              fontSize: 20,
              fontFamily: fontFamily?.primaryFont?.regular,
              backgroundColor: textInput3?.current?.isFocused()
                ? colors?.skyBlue
                : colors?.lightSkyBlue,
              borderColor: textInput3?.current?.isFocused()
                ? colors?.secondaryColor
                : colors?.black,
            }}
            ref={textInput3}
            onChangeText={val => {
              handInputFields();
              setThirdDigit(val);
            }}
            onKeyPress={ev => {
              backPressEvent(ev);
            }}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            value={fourthDigit}
            style={{
              height: 80,
              width: 60,
              borderRadius: 5,
              borderWidth: textInput4?.current?.isFocused() ? 2 : 1,
              marginRight: 10,
              textAlign: 'center',
              fontSize: 20,
              fontFamily: fontFamily?.primaryFont?.regular,
              backgroundColor: textInput4?.current?.isFocused()
                ? colors?.skyBlue
                : colors?.lightSkyBlue,
              borderColor: textInput4?.current?.isFocused()
                ? colors?.secondaryColor
                : colors?.black,
            }}
            ref={textInput4}
            onChangeText={val => {
              handInputFields();
              setFourthDigit(val);
            }}
            onKeyPress={ev => {
              backPressEvent(ev);
            }}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text
            style={{
              marginTop: 10,
              textAlign: 'center',
              fontSize: 14,
              fontFamily: fontFamily?.primaryFont?.regular,
              marginRight: 5,
            }}>
            Haven't recieved the OTP?
          </Text>
          <TouchableOpacity onPress={() => {}} disabled={true}>
            <Text
              style={{
                marginTop: 10,
                textAlign: 'center',
                fontSize: 14,
                fontFamily: fontFamily?.primaryFont?.regular,
                color: colors?.greyColor,
              }}>
              Resend OTP
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity
        onPress={() => {
          otpVerify();
        }}
        disabled={!enableButton}>
        <View
          style={{
            backgroundColor: colors?.black,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            // marginHorizontal: 20, // make custom component for the buttons in general
            marginHorizontal: 50,
            borderRadius: 5,
            opacity: enableButton ? 1 : 0.1,
          }}>
          <Text
            style={{
              color: colors?.white,
              fontFamily: fontFamily?.primaryFont?.regular,
            }}>
            VERIFY
          </Text>
        </View>
      </TouchableOpacity>
      {/* ADD Toast here */}
      <FBToastView
        fadeAnim={fadeAnim}
        animatedValue={animatedValue}
        type={otpType}
        headerText={otpHeaderMessage}
        descriptionText={otpDescription}
        toastDirectionFromTop={toastDirectionFromTop}
      />
    </View>
  );
};
export default OtpScreen;
/**
 * OTP Digit Component
 * types and interfaces
 * testcases
 * backend
 * react js
 * revise the topics covered till now
 * Do other preparations for interview
 * Apply for jobs
 * Short text inputs component
 * All type buttons component
 * Better usage of functions for toast messages
 * timer for otp
 */
