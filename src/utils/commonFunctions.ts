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
