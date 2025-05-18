import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import {styles, themeStyle} from './styles';
import imagePath from '../../constants/imagePath';
import testID from '../../constants/testIdConstants';
import colors from '../../constants/colors';

const HomeScreenContent = (props: any) => {
  const {navigation} = props;
  const [selectedCategroyIndex, setSelectedCategroyIndex] = useState<number>(0);
  const [categorySearchText, setCategorySearchText] = useState<string>('');
  const [filterSelect, setFilterSelect] = useState<boolean>(false);
  const styleValues = themeStyle({filterSelect});

  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: filterSelect ? 8 : 0, // Moves down when selected
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [filterSelect]);

  const furnitureCategories = [
    {
      id: '0',
      name: 'Arm Chair',
      image: imagePath?.armChairIcon,
      selectedImage: imagePath?.armChairIconColored,
    },
    {
      id: '1',
      name: 'Table Light',
      image: imagePath?.tableLampIcon,
      selectedImage: imagePath?.tableLampIconColored,
    },
    {
      id: '2',
      name: 'Sofa',
      image: imagePath?.sofaIcon,
      selectedImage: imagePath?.sofaIconColored,
    },
    {
      id: '3',
      name: 'Dressing Table',
      image: imagePath?.dressingTableIcon,
      selectedImage: imagePath?.dressingTableIconColored,
    },
    {
      id: '4',
      name: 'Bed',
      image: imagePath?.bedIcon,
      selectedImage: imagePath?.bedIconColored,
    },
    {
      id: '5',
      name: 'Bedside Table',
      image: imagePath?.bedsideTable,
      selectedImage: imagePath?.bedsideTableColored,
    },
    {
      id: '6',
      name: 'Wardrobe',
      image: imagePath?.wardrobeIcon,
      selectedImage: imagePath?.wardrobeIconColored,
    },
  ];
  const categoryIconStyle = (index: number) => {
    return index === selectedCategroyIndex
      ? styles?.selectedViewColor
      : styles?.nonSelectedViewColor;
  };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            backgroundColor: colors?.greyColorLight,
            paddingLeft: 10,
            borderRadius: 10,
          }}>
          <Image
            source={imagePath?.searchIcon}
            height={30}
            width={30}
            style={styles?.searchIcon}
            testID={testID?.searchIcon}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={colors?.greyColor}
            value={categorySearchText}
            onChangeText={val => {
              setCategorySearchText(val);
            }}
            style={styles?.searchInput}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setFilterSelect(!filterSelect);
          }}>
          <View
            style={[
              styles?.selectedFilterStyle,
              styleValues?.filterIconViewStyle,
            ]}>
            <Image
              source={
                filterSelect
                  ? imagePath?.filterIconColored
                  : imagePath?.filterIcon
              }
              height={30}
              width={30}
              style={styles?.filterIcon}
              testID={testID?.filterIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      {filterSelect && (
        <Animated.View
          style={[styles?.categoryFilterView, {transform: [{translateY}]}]}>
          <FlatList
            data={furnitureCategories}
            keyExtractor={item => item?.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedCategroyIndex(index);
                  }}>
                  <View
                    style={[
                      styles?.selectedViewStyle,
                      categoryIconStyle(index),
                    ]}>
                    <Image
                      source={
                        index === selectedCategroyIndex
                          ? item?.selectedImage
                          : item?.image
                      }
                      height={30}
                      width={30}
                      style={styles?.bottomBarIcon}
                      testID={testID?.categoryIcon + item?.id}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </Animated.View>
      )}
    </View>
  );
};
export default HomeScreenContent;
