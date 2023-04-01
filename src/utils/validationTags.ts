export const validationTags = (text: string) => {
  const tags = text.split(" ").filter((str) => str.includes("#"));
  const validTags = tags.filter((tag) => tag.length > 1);

  return validTags;
};
