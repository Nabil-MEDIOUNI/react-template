export const handleMany = (state, useState, name) => (event) => {
  const { value } = event.target;
  useState({
    ...state,
    [name]: value,
  });
};

export const handleSingle = (state, useState) => (event) => {
  const { value } = event.target;
  useState(value);
};

export default { handleMany, handleSingle };
