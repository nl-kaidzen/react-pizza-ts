import React, { useCallback, useState, useEffect } from 'react';
import CheckboxGroup from 'components/common/CheckboxGroup';
import RadioGroup from 'components/common/RadioGroup';

import {
  DOUGH_TYPES_ARRAY, SIZES_ARRAY, MEET_ARRAY, VEGETABLES_ARRAY, CHEESE_ARRAY, SAUCES_ARRAY,
} from 'constants/wizardOptions';

import {
  DOUGH_INIT_STATE, SIZES_INIT_STATE, SAUCES_INIT_STATE, TOPING_INIT_STATE,
} from '../../constants/wizardInitialState';
import Modal from '../Modal';

const BASIC_PRICE = 200;
const EXTRA_TOPING_PRICE = 29;

const calculateTotalPrice = (size: string, toppingsCount: number) => (
  BASIC_PRICE + toppingsCount * EXTRA_TOPING_PRICE + (size === '30' ? 0 : 50)
);

const PizzaWizard: React.FC = () => {
  const [dough, setDough] = useState(DOUGH_INIT_STATE);
  const [size, setSize] = useState(SIZES_INIT_STATE);
  const [sauce, setSauce] = useState(SAUCES_INIT_STATE);
  const [toppings, setToppings] = useState(TOPING_INIT_STATE);
  const [totalPrice, setTotalPrice] = useState(BASIC_PRICE);
  const [isVisible, setVisible] = useState(false);

  const handleCheckboxChange = useCallback(
    (value: string) => setToppings((prev: Array<string>) => {
      if (prev.includes(value)) {
        return prev.filter((toppingsItem) => toppingsItem !== value);
      }
      return [...prev, value];
    }),
    [],
  );

  const handleRadioChange = useCallback((value: string, type: string) => {
    switch (type) {
      case 'DOUGH': setDough(value); break;
      case 'SAUCE': setSauce(value); break;
      case 'SIZE': setSize(value); break;
      default: break;
    }
  }, []);

  const handleSubmitClick = () => setVisible(true);
  useEffect(() => setTotalPrice(calculateTotalPrice(size, toppings.length)),
    [size, dough, sauce, toppings]);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Pizza Wizard v1.0</h1>
        <h2>Размер</h2>
        <RadioGroup
          radioArray={SIZES_ARRAY}
          name="pizza_size"
          type="SIZE"
          onChange={handleRadioChange}
        />
        <h2>Тесто</h2>
        <RadioGroup
          radioArray={DOUGH_TYPES_ARRAY}
          name="pizza_dough"
          type="DOUGH"
          onChange={handleRadioChange}
        />
        <h2>Соус</h2>
        <RadioGroup
          radioArray={SAUCES_ARRAY}
          name="pizza_sauce"
          type="SAUCE"
          onChange={handleRadioChange}
        />
        <h2>Мясные топинги</h2>
        <CheckboxGroup
          checkboxesArray={MEET_ARRAY}
          onChange={handleCheckboxChange}
        />
        <h2>Сыр</h2>
        <CheckboxGroup
          checkboxesArray={CHEESE_ARRAY}
          onChange={handleCheckboxChange}
        />
        <h2>Овощи</h2>
        <CheckboxGroup
          checkboxesArray={VEGETABLES_ARRAY}
          onChange={handleCheckboxChange}
        />
        <button type="submit" onClick={handleSubmitClick}>{totalPrice}</button>
      </form>
      {isVisible && <Modal dough={dough} size={size} sauce={sauce} toppings={toppings} />}
    </>
  );
};

export default React.memo(PizzaWizard);
