import { Build } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';

const TextInput = ({ type, label, value }) => (
  <>
    <label>{label}</label>
    <input type={type} value={value} />
  </>
);

const SelectInput = ({ options, label }) => (
  <>
    <label>{label}</label>
    <select>
      {options.split(' ').map((option) => <option>{option}</option>)}
    </select>
  </>
);

const Builder = (props) => {
  const [inputs, setInputs] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [selectedType, setSelectedType] = useState('text');
  const [title, setTitle] = useState('');
  const [label, setLabel] = useState('');
  const [options, setOptions] = useState('');

  const addInput = (type, label, options = []) => {
    setDropdown(true);
    if (type in ['text', 'password', 'checkbox']) {
      setInputs(...inputs, <TextInput type={type} label={label} />);
    }
    if (type === 'select') {
      setInputs(...inputs, <SelectInput options={options} label={label} />);
    }
    setDropdown(false);
  };

  useEffect(() => {

  }, [inputs]);

  return (
    <>
      <TextInput onChange={(e) => setTitle(e.target.value)} label="Title" type="text" />
      {inputs.map((input) => input)}
      <button onClick={() => setDropdown(true)}>Add</button>
      <div>
        <TextInput onChange={(e) => setLabel(e.target.value)} label="label" type="text" />
        <select
          style={{ display: `${dropdown ? 'block' : 'none'}` }}
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option key="text" value="text">text</option>
          <option key="password" value="password">password</option>
          <option key="checkbox" value="checkbox">checkbox</option>
          <option key="select" value="select">select</option>
        </select>
        {(selectedType === 'select') && <TextInput onChange={(e) => setOptions(e.target.value)} label="option" type="text" />}

        <button onClick={
            () => addInput(selectedType, label, options)
          }
        >
          Confirm

        </button>
      </div>

    </>
  );
};

export default Builder;
