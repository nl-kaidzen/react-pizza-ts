import React from 'react';

type RadioObject = {
  id: string,
  label: string,
};

type RadioGroupProps = {
  radios: Array<RadioObject>,
  name: string,
  value: string,
  onChange: (value: string) => void,
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  radios, onChange, name, value,
}: RadioGroupProps) => (
  <ul>
    {radios.map(({
      id, label,
    }) => (
      <label htmlFor={id}>
        <input
          type="radio"
          id={id}
          name={name}
          checked={value === id}
          onChange={() => onChange(id)}
        />
        {label}
      </label>
    ))}
  </ul>
);

export default React.memo(RadioGroup);
