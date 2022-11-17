import styled from "styled-components";
import CustomPopUp from "./CustomPopUp";

const StyledPopUpsGallery = styled.div`
  height: 100%;
  width: 100%;
`;

const PopUpsGallery = ({ props }) => {
  return (
    <StyledPopUpsGallery>
      <CustomPopUp></CustomPopUp>
    </StyledPopUpsGallery>
  );
};
export default PopUpsGallery;
