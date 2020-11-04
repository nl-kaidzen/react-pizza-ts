import React from 'react';
import PropTypes from 'prop-types';

type ModalType = {
  isVisible: boolean,
  orderDetails: object,
};

const VALUE_TO_LABEL_MAP = {

};

const Modal: React.FC<ModalType> = ({ isVisible, orderDetails }) => {
  const { doughType, size, sauce, toppings } = orderDetails;
  return (
    <div>
      <h1>Ваш заказ:</h1>
      <p>{`Размер: ${size}`}</p>
      <p>{`Тип теста: ${doughType}`}</p>
      <p>{`Соус: ${sauce}`}</p>
      <p>Топинги: </p>
      <ul>
        {toppings.map((toping: string) => <li key={toping}>{}</li>)}
      </ul>
    </div>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  orderDetails: PropTypes.shape({
    size: PropTypes.string.isRequired,
    doughType: PropTypes.string.isRequired,
    sauce: PropTypes.string.isRequired,
    toppings: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default React.memo(Modal);
