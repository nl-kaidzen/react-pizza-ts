import React, { useCallback, useState, useEffect } from 'react';
import CheckboxGroup from 'components/common/CheckboxGroup';
import RadioGroup from 'components/common/RadioGroup';
import PizzaConfirmationPage from 'components/pages/PizzaConfirmationPage';

import {
  DOUGH_ARRAY, SIZES_ARRAY, MEET_ARRAY, VEGETABLES_ARRAY, CHEESE_ARRAY, SAUCES_ARRAY,
} from 'constants/wizardOptions';
import {
  DOUGH_INIT_STATE, SIZES_INIT_STATE, SAUCES_INIT_STATE, TOPING_INIT_STATE,
} from 'constants/wizardInitialState';

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
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);

  const handleCheckboxToggle = useCallback(
    (topping: string) => setToppings((prevToppings: Array<string>) => {
      if (prevToppings.includes(topping)) {
        return prevToppings.filter((toppingsItem) => toppingsItem !== topping);
      }
      return [...prevToppings, topping];
    }),
    [],
  );

  const handleDoughChange = useCallback((value: string) => setDough(value), []);
  const handleSauceChange = useCallback((value: string) => setSauce(value), []);
  const handleSizeChange = useCallback((value: string) => setSize(value), []);

  const handleSubmitClick = () => setConfirmationVisible(true);
  useEffect(() => setTotalPrice(calculateTotalPrice(size, toppings.length)),
    [size, dough, sauce, toppings]);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Pizza Wizard v1.0</h1>
        <h2>Размер</h2>
        <RadioGroup
          radios={SIZES_ARRAY}
          value={size}
          name="pizza_size"
          onChange={handleSizeChange}
        />
        <h2>Тесто</h2>
        <RadioGroup
          radios={DOUGH_ARRAY}
          value={dough}
          name="pizza_dough"
          onChange={handleDoughChange}
        />
        <h2>Соус</h2>
        <RadioGroup
          radios={SAUCES_ARRAY}
          value={sauce}
          name="pizza_sauce"
          onChange={handleSauceChange}
        />
        <h2>Мясные топинги</h2>
        <CheckboxGroup
          checkboxes={MEET_ARRAY}
          onChange={handleCheckboxToggle}
        />
        <h2>Сыр</h2>
        <CheckboxGroup
          checkboxes={CHEESE_ARRAY}
          onChange={handleCheckboxToggle}
        />
        <h2>Овощи</h2>
        <CheckboxGroup
          checkboxes={VEGETABLES_ARRAY}
          onChange={handleCheckboxToggle}
        />
        <button type="submit" onClick={handleSubmitClick}>{totalPrice}</button>
      </form>
      {isConfirmationVisible && (
      <PizzaConfirmationPage
        dough={dough}
        size={size}
        sauce={sauce}
        toppings={toppings}
      />
      )}
    </>
  );
};

export default React.memo(PizzaWizard);
