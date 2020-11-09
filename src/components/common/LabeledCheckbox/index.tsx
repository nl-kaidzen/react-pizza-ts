import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

type LabeledCheckboxType = {
  id: string,
  label: string,
  onChange: (value: string) => void,
};

const LabeledCheckbox: React.FC<LabeledCheckboxType> = ({
  id, label, onChange,
}) => {
  const onCheckboxChange = useCallback((event) => onChange(event.target.name),
    [onChange]);

  return (
    <label htmlFor={id}>
      <input type="checkbox" id={id} name={id} onChange={onCheckboxChange} />
      {label}
    </label>
  );
};

LabeledCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(LabeledCheckbox);
