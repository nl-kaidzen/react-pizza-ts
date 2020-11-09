/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import LabeledCheckbox from 'components/common/LabeledCheckbox';

type CheckboxObject = {
  id: string,
  label: string,
};

type CheckboxGroupType = {
  checkboxesArray: Array<CheckboxObject>,
  onChange: (value: string) => void,
};

const CheckboxGroup: React.FC<CheckboxGroupType> = ({
  checkboxesArray, onChange,
}) => (
  <ul>
    {checkboxesArray.map(({ id, ...checkboxObject }) => (
      <li key={id}>
        <LabeledCheckbox
          id={id}
          {...checkboxObject}
          onChange={onChange}
        />
      </li>
    ))}
  </ul>
);

/* CheckboxGroup.propTypes = {
  checkboxesArray: PropTypes.arrayOf<CheckboxObject>({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
}; */

export default React.memo(CheckboxGroup);
