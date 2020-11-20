const dataSelector = (data) => {
  switch (typeof data) {
    case 'string': return data;
    case 'number': return data;
    default: return data.length;
  }
};

export default dataSelector;
