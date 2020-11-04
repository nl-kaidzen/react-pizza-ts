import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

type LabeledRadioType = {
  id: string,
  name: string,
  type: string,
  label: string,
  value: string,
  isChecked: boolean,
  handleRadioChange: (value: string, type: string | undefined) => void,
};

const LabeledRadio: React.FC<LabeledRadioType> = ({
  id, name, type, label, value, isChecked, handleRadioChange,
}) => {
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => handleRadioChange(value,
    e.target.dataset.type),
  [handleRadioChange, value]);
  return (
    <label htmlFor={id}>
      <input type="radio" value={value} defaultChecked={isChecked} id={id} name={name} data-type={type} onChange={onChange} />
      {label}
    </label>
  );
};

LabeledRadio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  handleRadioChange: PropTypes.func.isRequired,
};

export default React.memo(LabeledRadio);
