/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import LabeledRadio from 'components/common/LabeledRadio';

type RadioObject = {
  id: string,
  label: string,
};

type RadioGroupType = {
  radioArray: Array<RadioObject>,
  name: string,
  type: string,
  onChange: (value: string, type: string) => void,
};

const RadioGroup: React.FC<RadioGroupType> = ({
  radioArray, onChange, name, type,
}) => (
  <ul>
    {radioArray.map(({
      id, label,
    }) => (
      <li key={id}>
        <LabeledRadio
          id={id}
          name={name}
          type={type}
          label={label}
          onChange={onChange}
        />
      </li>
    ))}
  </ul>
);

/* RadioGroup.propTypes = {
  checkboxesArray: PropTypes.arrayOf<CheckboxObject>({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
}; */

export default React.memo(RadioGroup);
