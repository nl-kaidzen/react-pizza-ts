import React from 'react';
import PropTypes from 'prop-types';

import { VALUE_TO_LABEL_MAP } from '../../constants/valueToLabel';

type ModalType = {
  dough: string,
  size: string,
  sauce: string,
  toppings: Array<string | null | undefined>,
};

const Modal: React.FC<ModalType> = ({
  dough, size, sauce, toppings,
}) => (
  <div>
    <h1>Ваш заказ:</h1>
    <p>{`Размер: ${VALUE_TO_LABEL_MAP[size]}`}</p>
    <p>{`Тип теста: ${VALUE_TO_LABEL_MAP[dough]}`}</p>
    <p>{`Соус: ${VALUE_TO_LABEL_MAP[sauce]}`}</p>
    <p>Топинги: </p>
    <ul>
      {toppings.length > 0 && toppings.map(
        (topping: string | null | undefined) => (
          <li
            key={topping}
          >{VALUE_TO_LABEL_MAP[typeof topping === 'string' ? topping : JSON.stringify(topping)]}
          </li>
        ),
      )}
    </ul>
  </div>
);

Modal.propTypes = {
  size: PropTypes.string.isRequired,
  dough: PropTypes.string.isRequired,
  sauce: PropTypes.string.isRequired,
  toppings: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default React.memo(Modal);
