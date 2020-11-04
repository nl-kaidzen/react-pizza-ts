import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

type LabeledCheckboxType = {
  id: string,
  label: string,
  value: string,
  isChecked: boolean,
  handleCheckboxChange: (value: string) => void,
};

const LabeledCheckbox: React.FC<LabeledCheckboxType> = ({
  id, label, value, isChecked, handleCheckboxChange,
}) => {
  const onChange = useCallback(() => handleCheckboxChange(value), [handleCheckboxChange, value]);

  return (
    <label htmlFor={id}>
      <input type="checkbox" value={value} checked={isChecked} id={id} name={id} onChange={onChange} />
      {label}
    </label>
  );
};

LabeledCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default React.memo(LabeledCheckbox);
