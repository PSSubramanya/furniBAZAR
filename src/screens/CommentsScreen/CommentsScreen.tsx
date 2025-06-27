import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';
import {
  generateTwoLettersForCommentImage,
  getRandomColorForCommentNames,
} from '../../utils/commonFunctions';
import imagePath from '../../constants/imagePath';
import FBFilterModal from '../../components/FBFilterModal/FBFilterModal';
import FBModalView from '../../components/FBModalView/FBModalView';

const CommentsScreen = (props: any) => {
  const {route, navigation} = props;
  const {params} = route;
  const {comments, ratingValue} = params;

  const [commentText, setCommentText] = useState('');
  const [showCommentMediaModal, setShowCommentMediaModal] = useState(false);
  const [selectedCommentsRatingIndex, setSelectedCommentsRatingIndex] =
    useState(ratingValue);
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    // setCommentsData(commentsArray?.[selectedCommentsRatingIndex]?.comments)
    setCommentsData(comments);
  }, []);

  const renderCommentSectionModal = () => {
    return (
      <View>
        <View style={{height: 30, marginTop: 5}}>
          <TouchableOpacity
            onPress={() => {
              setShowCommentMediaModal(false);
            }}
            style={{alignItems: 'flex-end', marginRight: 0}}>
            <Image
              source={imagePath?.roundCloseIcon}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 120,
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderRadius: 5,
              marginLeft: 10,
            }}>
            <Image
              source={imagePath?.galleryIcon}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderRadius: 5,
              marginLeft: 10,
            }}>
            <Image
              source={imagePath?.cameraIcon}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderRadius: 5,
              marginLeft: 10,
            }}>
            <Image
              source={imagePath?.micIcon}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderRatingFilterView = (starCount: number) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedCommentsRatingIndex(starCount - 1);
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            paddingHorizontal: 5,
            marginRight: 10,
            borderRadius: 5,
            borderWidth: 1,
            marginTop: 6,
            flexDirection: 'row',
            backgroundColor:
              selectedCommentsRatingIndex === starCount - 1
                ? colors?.darkBlueGrey
                : 'none',
          }}>
          <Text
            style={{
              fontFamily: fontFamily?.primaryFont?.medium,
              fontSize: 16,
              color:
                selectedCommentsRatingIndex === starCount - 1
                  ? colors?.white
                  : colors?.black,
              marginHorizontal: 5,
            }}>
            {starCount}
          </Text>
          <Image
            source={imagePath?.starIcon}
            height={18}
            width={18}
            style={{height: 18, width: 18, marginTop: 1}}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 3,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation?.goBack();
          }}>
          <Image
            source={imagePath?.leftChevron}
            height={30}
            width={30}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <Text
          style={{fontFamily: fontFamily?.primaryFont?.medium, fontSize: 18}}>
          Comments
        </Text>
      </View>
      <View style={{flexDirection: 'row', paddingLeft: 20, marginTop: 10}}>
        {renderRatingFilterView(1)}
        {renderRatingFilterView(2)}
        {renderRatingFilterView(3)}
        {renderRatingFilterView(4)}
        {renderRatingFilterView(5)}
      </View>
      <ScrollView>
        {commentsData?.[selectedCommentsRatingIndex]?.comments?.map(
          (val: any, ind: any) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  marginLeft: 16,
                  marginRight: 50,
                }}>
                {val?.profileIcon ? (
                  <Image
                    source={val?.profileIcon}
                    height={30}
                    width={30}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                      marginTop: 10,
                      borderWidth: 2,
                      borderColor: colors?.darkBluegrey4,
                    }}
                    // testID={testID?.starIcon}
                  />
                ) : (
                  <View
                    style={{
                      backgroundColor: getRandomColorForCommentNames(),
                      height: 50,
                      width: 50,
                      marginTop: 10,
                      borderRadius: 25,
                      borderWidth: 2,
                      borderColor: colors?.darkBluegrey4,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: fontFamily?.primaryFont?.bold,
                        fontSize: 14,
                        color: colors.black,
                        textTransform: 'uppercase',
                      }}>
                      {generateTwoLettersForCommentImage(val?.username)}
                    </Text>
                  </View>
                )}

                <View style={{marginLeft: 16, marginRight: 24}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: 285,
                    }}>
                    <Text
                      style={{
                        fontFamily: fontFamily?.primaryFont?.bold,
                        fontSize: 14,
                        color: colors.black,
                        marginTop: 14,
                        textTransform: 'uppercase',
                      }}>
                      {val?.username}
                    </Text>
                    {val?.date && (
                      <Text
                        style={{
                          fontFamily: fontFamily?.primaryFont?.medium,
                          fontSize: 12,
                          color: colors.darkBluegrey4,
                          marginTop: 14,
                          textTransform: 'uppercase',
                        }}>
                        {val?.date}
                      </Text>
                    )}
                  </View>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.regular,
                      fontSize: 14,
                      color: colors.black,
                      marginTop: 2,
                    }}>
                    {val?.comment}
                  </Text>
                  <TouchableOpacity onPress={() => {}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        borderWidth: 1,
                        borderRadius: 5,
                        width: 112,
                        paddingTop: 5,
                        paddingBottom: 5,
                        marginTop: 5,
                        paddingLeft: 5,
                      }}>
                      <Text
                        style={{
                          fontFamily: fontFamily?.primaryFont?.light,
                          fontSize: 12,
                          // marginLeft:
                        }}>
                        Was this helpful?
                      </Text>
                      <Image
                        source={imagePath?.likeIcon}
                        height={30}
                        width={30}
                        style={{height: 13, width: 13, marginLeft: 2}}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          },
        )}
        {commentsData?.[selectedCommentsRatingIndex]?.comments?.length ===
          0 && (
          <View
            style={{
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Image
              source={imagePath?.illustrationIcon5}
              height={200}
              width={200}
              style={{height: 200, width: 200}}
              resizeMode="contain"
            />
            <Text
              style={{
                fontFamily: fontFamily?.primaryFont?.regular,
                fontSize: 16,
              }}>
              No comment for {selectedCommentsRatingIndex + 1} star rating
            </Text>
          </View>
        )}
      </ScrollView>

      <View
        style={{
          backgroundColor: colors?.white,
          flexDirection: 'row',
          shadowColor: colors?.black,
          shadowOffset: {width: -1, height: -1},
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            setShowCommentMediaModal(true);
          }}>
          <Image
            source={imagePath?.circlePlus}
            height={30}
            width={30}
            style={{height: 30, width: 30, marginTop: 18, marginLeft: 8}}
          />
        </TouchableOpacity>
        <TextInput
          value={commentText}
          onChangeText={val => {
            setCommentText(val);
          }}
          style={{
            flex: 1,
            marginHorizontal: 10,
            marginTop: 15,
            marginBottom: 50,
            borderWidth: 1,
            borderRadius: 5,
            paddingVertical: 10,
            paddingLeft: 10,
            paddingRight: 10,
            maxHeight: 100,
            fontFamily: fontFamily?.primaryFont?.regular,
          }}
          multiline={true}
          numberOfLines={3}
        />

        <TouchableOpacity
          style={{
            justifyContent: 'flex-end',
            marginBottom: 58,
          }}>
          <Image
            source={imagePath?.sendIcon}
            height={30}
            width={30}
            style={{
              height: 30,
              width: 30,
              //   marginTop: 18,
              marginRight: 8,
            }}
          />
        </TouchableOpacity>
      </View>

      <FBModalView
        children={renderCommentSectionModal}
        modalVisible={showCommentMediaModal}
        modalHeightPercentage={'30%'}
        modalColor={colors?.white}
      />
    </View>
  );
};
export default CommentsScreen;
// Add reply for LEAD users
// There will be clients and lead users
