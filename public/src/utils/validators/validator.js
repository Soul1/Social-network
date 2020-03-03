export const required = value => {
  if (value) return undefined;
  return 'error is required';
};

export const maxLengthCreator= (maxLength) => value => {
  if (value.length > maxLength) return `error max length is ${maxLength} symbols!!!`;
  return undefined;
};
