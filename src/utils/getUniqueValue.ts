export const getUniqueTags = (arr: Array<string>) => {
  const AllUniqueTags = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });

  return AllUniqueTags;
};
