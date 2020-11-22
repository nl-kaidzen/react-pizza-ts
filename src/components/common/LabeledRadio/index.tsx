import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

type LabeledRadioType = {
  id: string,
  name: string,
  type: string,
  label: string,
  onChange: (value: string, type: string) => void,
};

const LabeledRadio: React.FC<LabeledRadioType> = ({
  id, name, type, label, onChange,
}) => {
  const onRadioChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof e.target.dataset.type === 'string') {
      onChange(id, e.target.dataset.type);
    }
  }, [onChange, id]);
  return (
    <label htmlFor={id}>
      <input type="radio" id={id} name={name} data-type={type} onChange={onRadioChange} />
      {label}
    </label>
  );
};

LabeledRadio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(LabeledRadio);
