import colors from '../constants/colors';
import {colorsForCommentNames} from './mockData';

export const replaceStringFunction = (
  strVal: string,
  arrayOfReplacingString: Array<any>,
) => {
  return strVal?.replace(/(\{\d+\}|\$\d+)/g, match => {
    const index = parseInt(match.replace(/\D/g, ''));

    return arrayOfReplacingString[index] !== undefined
      ? arrayOfReplacingString[index].replace('$', '$$')
      : match;
  });
};

export const getRandomColorForCommentNames = () => {
  let randomNumber = Math.floor(Math.random() * 12);
  let randomColor = colorsForCommentNames?.[randomNumber];
  return colors?.[randomColor];
};
export const generateTwoLettersForCommentImage = (name: string) => {
  let nameArray = name?.split(' ');
  if (nameArray?.length > 1) {
    return name?.[0] + name?.[1];
  } else {
    return name?.[0];
  }
};
