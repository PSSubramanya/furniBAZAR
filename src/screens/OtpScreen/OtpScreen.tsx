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
import FBDigitInputField from '../../components/FBDigitInputField/FBDigitInputField.tsx';
import FBButton from '../../components/FBButton/FBButton.tsx';

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
    fadeIn();
    startDecayAnimation();
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
          <FBDigitInputField
            refValue={textInput1}
            digitValue={firstDigit}
            setDigitValue={setFirstDigit}
            backPressEvent={backPressEvent}
            handInputFields={handInputFields}
            autofocus={true}
          />
          <FBDigitInputField
            refValue={textInput2}
            digitValue={secondDigit}
            setDigitValue={setSecondDigit}
            backPressEvent={backPressEvent}
            handInputFields={handInputFields}
          />
          <FBDigitInputField
            refValue={textInput3}
            digitValue={thirdDigit}
            setDigitValue={setThirdDigit}
            backPressEvent={backPressEvent}
            handInputFields={handInputFields}
          />
          <FBDigitInputField
            refValue={textInput4}
            digitValue={fourthDigit}
            setDigitValue={setFourthDigit}
            backPressEvent={backPressEvent}
            handInputFields={handInputFields}
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
      <FBButton
        onPress={() => {
          otpVerify();
        }}
        enableButton={!enableButton}
        buttonText={'VERIFY'}
        customStyle={{
          marginHorizontal: 50,
          opacity: enableButton ? 1 : 0.1,
        }}
      />
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
 * OTP Digit Component - Done
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
