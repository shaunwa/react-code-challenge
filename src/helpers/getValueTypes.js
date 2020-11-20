const getValueTypes = (values = {}) => {
  const types = {};
  Object.keys(values).forEach((key) => {
    let valueType = typeof values[key];
    if (valueType !== 'string') {
      valueType = 'number';
    }
    types[key] = valueType;
  });

  return types;
};

export default getValueTypes;
