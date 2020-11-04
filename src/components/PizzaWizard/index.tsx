/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import {
  DOUGH_TYPES_ARRAY, SIZES_ARRAY, MEET_ARRAY, VEGETABLES_ARRAY, CHEESE_ARRAY, SAUCES_ARRAY,
} from '../../constants/wizardOptions';
import {
  DOUGH_INIT_STATE, SIZES_INIT_STATE, SAUCES_INIT_STATE, TOPING_INIT_STATE,
} from '../../constants/wizardInitialState';
import LabeledRadio from '../LabeledRadio';
import LabeledCheckbox from '../LabeledCheckbox';

const BASIC_PRICE = 200;
const EXTRA_TOPING_PRICE = 29;

const calculateTotalPrice = (size: string, topingCount: number) => (
  BASIC_PRICE + topingCount * EXTRA_TOPING_PRICE + (size === '30' ? 0 : 50)
);

const PizzaWizard: React.FC = () => {
  const [dough, setDough] = useState(DOUGH_INIT_STATE);
  const [size, setSize] = useState(SIZES_INIT_STATE);
  const [sauces, setSauces] = useState(SAUCES_INIT_STATE);
  const [toping, setToping] = useState(TOPING_INIT_STATE);
  const [totalPrice, setTotalPrice] = useState(BASIC_PRICE);

  const handleCheckboxChange = useCallback(
    (value: string) => setToping((prev) => {
      if (prev.includes(value)) {
        return prev.filter((topingItem) => topingItem !== value);
      }
      return [...prev, value];
    }),
    [],
  );

  const handleRadioChange = useCallback((value: string, type: string | undefined) => {
    switch (type) {
      case 'DOUGH': setDough(value); break;
      case 'SAUCE': setSauces(value); break;
      case 'SIZE': setSize(value); break;
      default: break;
    }
  }, []);

  const handleSubmitClick = () => console.log(dough, size, sauces);
  useEffect(() => setTotalPrice(calculateTotalPrice(size, toping.length)),
    [size, dough, sauces, toping]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>Pizza Wizard v1.0</h1>
      <h2>Размер</h2>
      <ul>
        {SIZES_ARRAY.map(({ id, label, value }) => (
          <li key={id}>
            <LabeledRadio
              id={id}
              label={label}
              value={value}
              name="pizza_size"
              isChecked={id === size}
              type="SIZE"
              handleRadioChange={handleRadioChange}
            />
          </li>
        ))}
      </ul>
      <h2>Тесто</h2>
      <ul>
        {DOUGH_TYPES_ARRAY.map(({ id, label, value }) => (
          <li key={id}>
            <LabeledRadio
              id={id}
              label={label}
              value={value}
              name="pizza_dough"
              isChecked={id === dough}
              type="DOUGH"
              handleRadioChange={handleRadioChange}
            />
          </li>
        ))}
      </ul>
      <h2>Соус</h2>
      <ul>
        {SAUCES_ARRAY.map(({ id, label, value }) => (
          <li key={id}>
            <LabeledRadio
              id={id}
              label={label}
              value={value}
              name="pizza_sauce"
              isChecked={id === sauces}
              type="SAUCE"
              handleRadioChange={handleRadioChange}
            />
          </li>
        ))}
      </ul>
      <h2>Мясные топинги</h2>
      <ul>
        {MEET_ARRAY.map(({ id, label, value }) => (
          <li key={id}>
            <LabeledCheckbox
              id={id}
              label={label}
              value={value}
              isChecked={toping.includes(id)}
              handleCheckboxChange={handleCheckboxChange}
            />
          </li>
        ))}
      </ul>
      <h2>Сыр</h2>
      <ul>
        {CHEESE_ARRAY.map(({ id, label, value }) => (
          <li key={id}>
            <LabeledCheckbox
              id={id}
              label={label}
              value={value}
              isChecked={toping.includes(id)}
              handleCheckboxChange={handleCheckboxChange}
            />
          </li>
        ))}
      </ul>
      <h2>Овощи</h2>
      <ul>
        {VEGETABLES_ARRAY.map(({ id, label, value }) => (
          <li key={id}>
            <LabeledCheckbox
              id={id}
              label={label}
              value={value}
              isChecked={toping.includes(id)}
              handleCheckboxChange={handleCheckboxChange}
            />
          </li>
        ))}
      </ul>
      <button type="submit" onClick={handleSubmitClick}>{totalPrice}</button>
    </form>
  );
};

export default React.memo(PizzaWizard);
