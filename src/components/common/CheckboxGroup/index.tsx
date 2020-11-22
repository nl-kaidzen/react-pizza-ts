import React from 'react';

type CheckboxObject = {
  id: string,
  label: string,
};

type CheckboxGroupProps = {
  checkboxes: Array<CheckboxObject>,
  onChange: (value: string) => void,
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  checkboxes, onChange,
}: CheckboxGroupProps) => (
  <ul>
    {checkboxes.map(({ id, label }) => (
      <li key={id}>
        <label htmlFor={id}>
          <input type="checkbox" id={id} name={id} onChange={() => onChange(id)} />
          {label}
        </label>
      </li>
    ))}
  </ul>
);

export default React.memo(CheckboxGroup);
