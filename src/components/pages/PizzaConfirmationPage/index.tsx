import React from 'react';
import { getLabelByValue } from 'helpers/getLabelByValue';

type PizzaConfirmationPageProps = {
  dough: string,
  size: string,
  sauce: string,
  toppings: Array<string>,
};

const PizzaConfirmationPage: React.FC<PizzaConfirmationPageProps> = ({
  dough, size, sauce, toppings,
}: PizzaConfirmationPageProps) => (
  <div>
    <h1>Ваш заказ:</h1>
    <p>{`Размер: ${getLabelByValue(size)}`}</p>
    <p>{`Тип теста: ${getLabelByValue(dough)}`}</p>
    <p>{`Соус: ${getLabelByValue(sauce)}`}</p>
    <p>Топинги: </p>
    <ul>
      {toppings.map(
        (topping: string) => (
          <li
            key={topping}
          >{getLabelByValue(topping)}
          </li>
        ),
      )}
    </ul>
  </div>
);

export default React.memo(PizzaConfirmationPage);
