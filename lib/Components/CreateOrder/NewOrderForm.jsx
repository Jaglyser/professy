import styled from "styled-components";

import { useDispatch } from "react-redux";
import { popUpActions } from "../../store/popUp";
import { display } from "@mui/system";

const StyledNewOrderForm = styled.form `
    display: grid;
    grid-template-rows: auto auto auto;

`
    
;

export const NewOrderForm = (props) => {
  const dispatch = useDispatch();
  const handleBtnClick = () => {
    dispatch(popUpActions.setValue());
  };

  return (
    <form>
      <label>test</label>
      <input></input>
      <label>test</label>
      <input></input>
      <label>test</label>
      <input></input>
      <button onClick={handleBtnClick}>close</button>
    </form>
  );
};
