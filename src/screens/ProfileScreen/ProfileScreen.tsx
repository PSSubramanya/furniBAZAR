import React, {useState, useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../constants/fontFamily';
const ProfileScreen = (props: any) => {
  const [emailValue, setEmailValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');

  useEffect(() => {
    const email = 'subbukarthikeya98@gmail.com';
    const username = 'Subbu_Sasuke_Goku';

    setEmailValue(email);
    setUsernameValue(username);
  }, []);
  const accountSecurity = () => {
    return (
      <>
        <Text
          style={{
            fontFamily: fontFamily?.primaryFont?.semiBold,
            fontSize: 18,
            marginLeft: 12,
            marginTop: 20,
            color: colors?.darkBluegrey4,
          }}>
          ACCOUNT & SECURITY
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            marginHorizontal: 10,
            marginTop: 10,
            borderRadius: 5,
            shadowColor: colors?.black,
            shadowOffset: {width: -1, height: -1},
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 10,
          }}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={imagePath?.mailIcon}
                  height={30}
                  width={30}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    marginLeft: 8,
                    marginTop: 1,
                  }}>
                  Email
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: fontFamily?.primaryFont?.regular,
                  color: colors?.greyColor,
                }}>
                {emailValue}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath?.accountCircleIcon}
                  height={30}
                  width={30}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    marginLeft: 8,
                    marginTop: 1,
                  }}>
                  Username
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: fontFamily?.primaryFont?.regular,
                  color: colors?.greyColor,
                }}>
                {usernameValue}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath?.changePasswordIcon}
                  height={30}
                  width={30}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    marginLeft: 8,
                    marginTop: 1,
                  }}>
                  Change Password
                </Text>
              </View>
              <Image
                source={imagePath?.rightChevronIcon}
                height={30}
                width={30}
                style={{height: 20, width: 20, justifyContent: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath?.twoFactorIcon}
                  height={30}
                  width={30}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    marginLeft: 8,
                    marginTop: 1,
                  }}>
                  2 Factor Authentication
                </Text>
              </View>
              <Image
                source={imagePath?.rightChevronIcon}
                height={30}
                width={30}
                style={{height: 20, width: 20, justifyContent: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const sessionData = () => {
    return (
      <>
        <Text
          style={{
            fontFamily: fontFamily?.primaryFont?.semiBold,
            fontSize: 18,
            marginLeft: 12,
            marginTop: 20,
            color: colors?.darkBluegrey4,
          }}>
          SESSION
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            marginHorizontal: 10,
            marginTop: 10,
            borderRadius: 5,
            shadowColor: colors?.black,
            shadowOffset: {width: -1, height: -1},
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 10,
          }}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <Image
                source={imagePath?.logoutIcon}
                height={30}
                width={30}
                style={{height: 20, width: 20}}
              />
              <Text
                style={{
                  fontFamily: fontFamily?.primaryFont?.medium,
                  marginLeft: 8,
                  marginTop: 1,
                }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const deleteAccount = () => {
    return (
      <>
        <Text
          style={{
            fontFamily: fontFamily?.primaryFont?.semiBold,
            fontSize: 18,
            marginLeft: 12,
            marginTop: 20,
            color: colors?.darkBluegrey4,
          }}>
          ACCOUNT
        </Text>
        <View
          style={{
            backgroundColor: colors?.scarletRed1,
            flex: 1,
            marginHorizontal: 10,
            marginTop: 10,
            borderRadius: 5,
            shadowColor: colors?.black,
            shadowOffset: {width: -1, height: -1},
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 10,
          }}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <Image
                source={imagePath?.deleteIcon4}
                height={30}
                width={30}
                style={{height: 20, width: 20}}
              />
              <Text
                style={{
                  fontFamily: fontFamily?.primaryFont?.medium,
                  marginLeft: 8,
                  marginTop: 1,
                  color: colors?.white,
                }}>
                Delete
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <View>
      {accountSecurity()}
      {sessionData()}
      {deleteAccount()}
    </View>
  );
};
export default ProfileScreen;
