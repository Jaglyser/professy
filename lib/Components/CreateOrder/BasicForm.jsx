import useInput from "../../hooks/use-input";
import { useDispatch } from "react-redux";
import { Fragment } from "react";
import { popUpActions } from "../../store/popUp";
import { cartActions } from "../../store/cart-slice";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = (props) => {
  const dispatch = useDispatch();
  const handleBtnClick = () => {
    dispatch(popUpActions.setValue());
  };

  const addOrderHandler = (event) => {
    event.preventDefault();
    const orderNr = orderNrValue;
    const name = orderNameValue;
    const deliveryDate = "2022-11-11";
    const items = [];
    const totalQuantityModel = [];
    const selected = false;

    dispatch(
      cartActions.addOrder({
        orderNr,
        name,
        deliveryDate,
        items,
        totalQuantityModel,
        selected, 
      })
    );
  };

  const {
    value: orderNameValue,
    isValid: orderNameIsValid,
    hasError: orderNameHasError,
    valueChangeHandler: orderNameChangeHandler,
    inputBlurHandler: orderNameBlurHandler,
    reset: resetOrderName,
  } = useInput(isNotEmpty);
  const {
    value: orderNrValue,
    isValid: orderNrIsValid,
    hasError: orderNrHasError,
    valueChangeHandler: orderNrChangeHandler,
    inputBlurHandler: orderNrBlurHandler,
    reset: resetOrderNr,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (orderNameIsValid && orderNrIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    addOrderHandler();

    console.log("Submitted!");
    console.log(orderNameValue, orderNrValue, emailValue);

    resetOrderName();
    resetOrderNr();
    resetEmail();

  };

  const orderNameClasses = orderNameHasError
    ? "form-control invalid"
    : "form-control";
  const orderNrClasses = orderNrHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <div>
      <form onSubmit={addOrderHandler}>
        <div className="control-group">
          <div className={orderNameClasses}>
            <label htmlFor="name">Order Name</label>
            <input
              type="text"
              id="name"
              value={orderNameValue}
              onChange={orderNameChangeHandler}
              onBlur={orderNameBlurHandler}
            />
            {orderNameHasError && (
              <p className="error-text">Please enter order name.</p>
            )}
          </div>
          <div className={orderNrClasses}>
            <label htmlFor="name">Order Number</label>
            <input
              type="text"
              id="name"
              value={orderNrValue}
              onChange={orderNrChangeHandler}
              onBlur={orderNrBlurHandler}
            />
            {orderNrHasError && (
              <p className="error-text">Please enter valid ordernumber</p>
            )}
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" disabled={!formIsValid}>
            Submit
          </button>
        </div>
      </form>
      <button onClick={handleBtnClick}>close</button>
    </div>
  );
};

export default BasicForm;
