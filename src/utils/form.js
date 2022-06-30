export const convertToOptions = (data) => {
  return data.map((item) => {
    return {
      value: item,
      label: item,
    };
  });
};
