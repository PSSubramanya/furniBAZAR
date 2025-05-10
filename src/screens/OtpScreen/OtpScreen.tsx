import React, {useState, useEffect, useRef, useCallback} from 'react';
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
import {FBToastView} from '../../components/FBToastView/FBToastView.tsx';
import useToastAnimation from '../../components/FBToastView/useToastAnimatons.ts';
import FBDigitInputField from '../../components/FBDigitInputField/FBDigitInputField.tsx';
import FBButton from '../../components/FBButton/FBButton.tsx';
import {replaceStringFunction} from '../../utils/commonFunctions.ts';
import {onDisplayNotification} from '../../utils/notification.ts';
import {MessageType} from '../../components/FBToastView/typesFile.ts';

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

  const [otpType, setOtpType] = useState<string>(strings?.error);
  const [otpHeaderMessage, setOtpHeaderMessage] = useState<string>('');
  const [otpDescription, setOtpDescription] = useState<string>('');

  const [backspacePressed, setBackspacePressed] = useState<boolean>(false);

  const [timerValue, setTimerValue] = useState<number>(120);

  const [sendOTP, setSendOTP] = useState<boolean>(true);
  const [generatedOTPValue, setGeneratedOTPValue] = useState<string>('');

  /*
  
  Need to do OTP Timer
  Need to do out of app still timer count thing
  */

  useEffect(() => {
    if (sendOTP) {
      otpTimer();
      generateOTP();
    }
  }, [sendOTP]);

  useEffect(() => {
    console.log('TIMERVALUE', timerValue);
  }, [timerValue]);

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
    onDisplayNotification(
      'FurniBAZAR',
      'The OTP sent here needs to be entered for verification in the ap',
      generatedOTPValue,
    );
  }, [generatedOTPValue]);

  const setOTPData = (
    errorType: MessageType,
    errorHeader: string,
    errorDescription: string,
  ) => {
    setOtpType(errorType);
    setOtpHeaderMessage(errorHeader);
    setOtpDescription(errorDescription);
  };

  const otpVerify = () => {
    const otpValue = firstDigit + secondDigit + thirdDigit + fourthDigit;
    if (otpValue !== generatedOTPValue) {
      setOTPData(
        MessageType?.Error,
        strings?.attemptAgain,
        strings?.wrongOtpDescription,
      );
    } else if (timerValue === 0) {
      setOTPData(
        MessageType?.Error,
        strings?.otpExpirationText,
        strings?.otpRegenerationtext,
      );
    } else {
      setOTPData(
        MessageType?.Success,
        strings?.accountVerified,
        strings?.successOtpDescription,
      );
    }
    showToast();
  };

  const otpTimer = () => {
    setSendOTP(false);
    let timer = timerValue;
    const timeout = setInterval(() => {
      if (timer > 0) {
        timer = timer - 1;
        setTimerValue(timer);
      }
    }, 1000);

    // Optional: cleanup to avoid memory leaks
    return () => clearInterval(timeout);
  };

  const backPressEvent = (
    ev: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (ev?.nativeEvent?.key === 'Backspace') {
      if (textInput2?.current?.isFocused()) {
        textInput1?.current?.focus();
      } else if (textInput3?.current?.isFocused()) {
        textInput2?.current?.focus();
      } else if (textInput4?.current?.isFocused()) {
        textInput3?.current?.focus();
      }
    } else {
      if (textInput1?.current?.isFocused()) {
        textInput2?.current?.focus();
      } else if (textInput2?.current?.isFocused()) {
        textInput3?.current?.focus();
      } else if (textInput3?.current?.isFocused()) {
        textInput4?.current?.focus();
      }
    }
  };

  const showToast = () => {
    fadeIn();
    startDecayAnimation();
  };

  function generateOTP() {
    const generatedOTP = Math.floor(1000 + Math.random() * 9000);
    console.log('generatedOTP', generatedOTP);
    setGeneratedOTPValue(generatedOTP?.toString());
  }

  return (
    <View style={styles?.flexContainer}>
      <KeyboardAvoidingView behavior={'position'}>
        <View style={styles?.topContainer}>
          <FBAppHeaderText iconSize={40} styleProp={styles?.headerText} />
          <Image
            source={imagePath?.otpIcon2}
            height={1}
            width={1}
            style={styles?.illustrationImageStyle}
          />
          <Text style={styles?.signInInstructionsStyle}>
            {strings?.otpScreenText}
          </Text>
        </View>
        <Text style={styles?.otpTimerTextStyle}>
          {/* NOTE+TODO: NEED TO WORK ON THIS FUNCTION, learn regex first */}
          {/* {replaceStringFunction(strings?.otpTimerText, [timerValue])} */}
          {strings?.otpTimerText?.replace('{0}', timerValue?.toString())}
        </Text>
        <View style={styles?.otpDigitsView}>
          <FBDigitInputField
            testID={'otp_digit_1'}
            refValue={textInput1}
            digitValue={firstDigit}
            setDigitValue={setFirstDigit}
            backPressEvent={backPressEvent}
            autofocus={true}
          />
          <FBDigitInputField
            testID={'otp_digit_2'}
            refValue={textInput2}
            digitValue={secondDigit}
            setDigitValue={setSecondDigit}
            backPressEvent={backPressEvent}
          />
          <FBDigitInputField
            testID={'otp_digit_3'}
            refValue={textInput3}
            digitValue={thirdDigit}
            setDigitValue={setThirdDigit}
            backPressEvent={backPressEvent}
          />
          <FBDigitInputField
            testID={'otp_digit_4'}
            refValue={textInput4}
            digitValue={fourthDigit}
            setDigitValue={setFourthDigit}
            backPressEvent={backPressEvent}
          />
        </View>
        <View style={styles?.horizontalCentralisedStyle}>
          <Text style={styles?.resendOTPTextStyle}>
            {strings?.haventRecievedOtp}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setTimerValue(120);
              setSendOTP(true);
            }}
            disabled={timerValue === 0 ? false : true}>
            <Text
              style={[
                styles?.resendOTPTextStyle,
                {
                  color: timerValue === 0 ? colors?.black : colors?.greyColor,
                  marginLeft: 5,
                },
              ]}>
              {strings?.resendOtp}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <FBButton
        onPress={() => {
          otpVerify();
        }}
        enableButton={!enableButton}
        buttonText={strings?.verify}
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
