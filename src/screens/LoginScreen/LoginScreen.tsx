import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Animated,
  useAnimatedValue,
  Dimensions,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import FBAppHeaderText from '../../components/FBAppHeaderText/FBAppHeaderText';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';
import FBShortButton from '../../components/FBShortButton/FBShortButton';
import styles from './styles';
import {
  mobileNumberValidation,
  passwordValidation,
  validateUsername,
} from '../../utils/regexValidation';
import strings from '../../constants/strings';
import {FBToastView} from '../../components/FBToastView/FBToastView';
import useToastAnimation from '../../components/FBToastView/useToastAnimatons';

const LoginScreen = () => {
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

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [onConfirm, setOnConfirm] = useState<boolean>(false);

  const [showToastView, setShowToastView] = useState<boolean>(false);

  const [mobileAuthentication, setMobileAuthentication] =
    useState<boolean>(false);

  const [userNameFocus, setUserNameFocus] = useState<boolean>(false);
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
  const [mobileNumberFocus, setMobileNumberFocus] = useState<boolean>(false);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');

  const [usernameError, setUsernameError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [mobileNumberError, setMobileNumberError] = useState<string>('');

  useEffect(() => {
    if (onConfirm) {
      if (!mobileAuthentication) {
        handleUsernameInput();
        handlePasswordInput();
      } else {
        handleMobileNumberInput();
      }
    }
    showToast();
  }, [onConfirm]);

  const handleUsernameInput = () => {
    setUserNameFocus(false);
    const errorMessage = validateUsername(username);
    if (errorMessage?.length !== 0) {
      setUsernameError(errorMessage);
    }
    setOnConfirm(false);
  };
  const handlePasswordInput = () => {
    setPasswordFocus(false);
    const errorMessage = passwordValidation(password);
    if (errorMessage?.length !== 0) {
      setPasswordError(errorMessage);
    }
    setOnConfirm(false);
  };
  const handleMobileNumberInput = () => {
    setMobileNumberFocus(false);
    const errorMessage = mobileNumberValidation(mobileNumber);
    if (errorMessage?.length !== 0) {
      setMobileNumberError(errorMessage);
    }
    setOnConfirm(false);
  };

  const borderColorDecider = (focus: boolean, errorMessage: string) => {
    if (focus) {
      return colors?.secondaryColor;
    } else {
      if (errorMessage !== '') {
        return colors?.errorColor2;
      }
      return colors?.borderColor;
    }
  };

  const showToast = () => {
    if (usernameError || passwordError || mobileNumberError) {
      fadeIn();
      startDecayAnimation();
    }
  };

  return (
    <View style={styles?.flexContainer}>
      <KeyboardAvoidingView behavior={'position'}>
        <View style={styles?.topContainer}>
          <Image
            source={imagePath?.illustrationIcon1}
            height={1}
            width={1}
            style={styles?.illustrationImageStyle}
          />
          <FBAppHeaderText iconSize={40} />
          <Text style={styles?.signInInstructionsStyle}>
            {strings?.loginInsrtuctionLine}
          </Text>
        </View>
        <View>
          <View style={styles?.signinCardView}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles?.googleLoginButton}>
                <Text style={styles?.googleLoginButtonText}>
                  {strings?.continueWithGoogle}
                </Text>
                <Image
                  source={imagePath?.googleIcon}
                  height={1}
                  width={1}
                  style={styles?.googleIcon}
                />
              </View>
            </TouchableOpacity>
            <View style={styles?.shortButtonsView}>
              <FBShortButton
                text={strings?.faceBook}
                icon={imagePath?.faceBookIcon}
                onPress={() => {}}
              />
              <FBShortButton
                text={strings?.twitter}
                icon={imagePath?.twitterIcon}
                onPress={() => {}}
              />
              <FBShortButton
                text={strings?.amazon}
                icon={imagePath?.amazonIcon}
                onPress={() => {}}
              />
              <FBShortButton
                text={
                  !mobileAuthentication ? strings?.mobile : strings?.username
                }
                icon={
                  !mobileAuthentication
                    ? imagePath?.mobileIcon
                    : imagePath?.usernameIcon
                }
                onPress={() => {
                  setMobileAuthentication(!mobileAuthentication);
                }}
              />
            </View>
            <View style={styles?.dividerView}>
              <View style={styles?.dividerStyle} />
              <View style={{}}>
                <Text style={styles?.dividerTextStyle}>
                  {strings?.orLoginWith}
                </Text>
              </View>
              <View style={styles?.dividerStyle} />
            </View>
            {!mobileAuthentication ? (
              <View
                style={[
                  styles?.textInputViewStyle,
                  {
                    borderColor: borderColorDecider(
                      userNameFocus,
                      usernameError,
                    ),
                    borderWidth: userNameFocus ? 2 : 1,
                  },
                ]}>
                <TextInput
                  value={username}
                  onChangeText={(val: string) => {
                    setUsername(val);
                  }}
                  placeholder={strings?.username}
                  placeholderTextColor={colors?.borderColor}
                  style={styles?.textInputStyle}
                  onFocus={() => {
                    setUserNameFocus(true);
                    setUsernameError('');
                  }}
                  onBlur={handleUsernameInput}
                  editable={showToastView}
                />
                <Image
                  source={imagePath?.usernameIcon}
                  height={1}
                  width={1}
                  style={[styles?.textInputImage, styles?.textInputImageStyle]}
                />
              </View>
            ) : null}
            {usernameError && !mobileAuthentication ? (
              <Text
                style={{
                  marginTop: 5,
                  marginLeft: 16,
                  fontFamily: fontFamily?.primaryFont?.regular,
                  color: colors?.errorColor1,
                }}>
                {usernameError}
              </Text>
            ) : null}

            {!mobileAuthentication ? (
              <View
                style={[
                  styles?.textInputViewStyle,
                  {
                    borderColor: borderColorDecider(
                      passwordFocus,
                      passwordError,
                    ),
                    borderWidth: passwordFocus ? 2 : 1,
                  },
                ]}>
                <TextInput
                  value={password}
                  onChangeText={(val: string) => {
                    setPassword(val);
                  }}
                  placeholder={strings?.password}
                  placeholderTextColor={colors?.borderColor}
                  style={styles?.textInputStyle}
                  secureTextEntry={showPassword}
                  onFocus={() => {
                    setPasswordFocus(true);
                    setPasswordError('');
                  }}
                  onBlur={handlePasswordInput}
                  editable={!showToastView}
                />
                <TouchableOpacity
                  style={{
                    marginLeft: Platform?.OS === 'ios' ? 10 : 30,
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}>
                  <Image
                    source={
                      !showPassword ? imagePath?.hideIcon : imagePath?.showIcon
                    }
                    height={1}
                    width={1}
                    style={styles?.textInputImage}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {passwordError && !mobileAuthentication ? (
              <Text
                style={{
                  marginTop: 5,
                  marginLeft: 16,
                  fontFamily: fontFamily?.primaryFont?.regular,
                  color: colors?.errorColor1,
                }}>
                {passwordError}
              </Text>
            ) : null}

            {mobileAuthentication ? (
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    height: 60,
                    width: 60,
                    marginTop: 10,
                    marginLeft: 15,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor: colors?.borderColor,
                    borderRadius: 5,
                  }}>
                  <TextInput
                    value={'+91'}
                    style={styles?.textInputStyle}
                    editable={false}
                  />
                </View>
                <View>
                  <View
                    style={[
                      {
                        flexDirection: 'row',
                        height: 60,
                        width: 240,
                        marginTop: 10,
                        marginHorizontal: 15,
                        paddingHorizontal: 10,
                        borderRadius: 5,
                      },
                      {
                        borderColor: borderColorDecider(
                          mobileNumberFocus,
                          mobileNumberError,
                        ),
                        borderWidth: passwordFocus ? 2 : 1,
                      },
                    ]}>
                    <TextInput
                      value={mobileNumber}
                      onChangeText={(val: string) => {
                        setMobileNumber(val);
                      }}
                      placeholder={strings?.password}
                      placeholderTextColor={colors?.borderColor}
                      style={styles?.textInputStyle}
                      keyboardType={'numeric'}
                      onFocus={() => {
                        setMobileNumberFocus(true);
                        setMobileNumberError('');
                      }}
                      onBlur={handleMobileNumberInput}
                      editable={!showToastView}
                    />
                    <Image
                      source={imagePath?.mobileIcon}
                      height={1}
                      width={1}
                      style={[
                        styles?.textInputImage,
                        styles?.textInputImageStyle,
                      ]}
                    />
                  </View>
                  {mobileNumberError ? (
                    <Text
                      style={{
                        marginTop: 5,
                        marginLeft: 16,
                        fontFamily: fontFamily?.primaryFont?.regular,
                        color: colors?.errorColor1,
                      }}>
                      {mobileNumberError}
                    </Text>
                  ) : null}
                </View>
              </View>
            ) : null}
          </View>
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity
        onPress={() => {
          setShowToastView(true);
          setOnConfirm(true);
        }}
        disabled={showToastView}>
        <View
          style={{
            backgroundColor: colors?.black,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginHorizontal: 20,
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: colors?.white,
              fontFamily: fontFamily?.primaryFont?.regular,
            }}>
            {strings?.continue}
          </Text>
        </View>
      </TouchableOpacity>
      <FBToastView
        fadeAnim={fadeAnim}
        animatedValue={animatedValue}
        type={'error'}
        headerText={'Error Notification'}
        descriptionText={
          'Please enter the credential details. If not create an account to proceed ahead.'
        }
        setShowToastView={setShowToastView}
        toastDirectionFromTop={toastDirectionFromTop}
      />
    </View>
  );
};
export default LoginScreen;
/*
OTP Screen
OTP Messaging
toast UI
CUSTOM Toast Component Build
test case for components, and all screens
*/
