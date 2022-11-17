import styled from "styled-components";
import { Prevent } from "../Functions/Prevent";
import { NewOrderForm } from "./NewOrderForm";
import { useDispatch, useSelector } from "react-redux";
import { popUpActions } from "../../store/popUp";
import BasicForm from "./BasicForm";

const StyledCustomPopUp = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border-color: transparent;
  background-color: rgb(230, 230, 230, 0.4);
  border-color: rgb(230, 230, 230);
  border-style: solid;
  &:hover {
    background-color: rgb(230, 230, 230);
  }
`;

const StyledCloseIcon = styled.button`
  width: 100px;
  height: 40px;
`;

const StyledPopUpBackdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #f7f1f19d;
  left: 0;
  top: 0;
  display: none;
  &.show-modal {
    display: flex;
    z-index: 1;
  }
`;

const StyledPopUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30rem;
  width: 30rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(128, 128, 128, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const CustomPopUp = () => {
  const dispatch = useDispatch();
  const btnState = useSelector((state) => state.popUp.popUp)

  const handleBtnClick = () => {
    dispatch(
      popUpActions.setValue()
      )
  };

  return (
    <StyledCustomPopUp
      id="grand-parent">
      <StyledButton onClick={handleBtnClick}>New order &#x21E8;</StyledButton>
      <StyledPopUpBackdrop
        id="backdrop-parent"
        className={btnState ? "show-modal" : ""}>
        <StyledPopUp id="popup">

          <BasicForm />
        </StyledPopUp>
      </StyledPopUpBackdrop>
    </StyledCustomPopUp>
  );
};

export default CustomPopUp;
