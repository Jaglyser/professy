import { Fragment } from "react";
import classes from "./MainHeader.module.css";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { pageViewActions } from "../../../store/pageView";
import { useSelector } from "react-redux";
import { Buttons } from "./Buttons";

export const MainHeader = () => {
  const selectedView = useSelector((state) => state.pageView.pageViews);
  const dispatch = useDispatch();

  const setPageView = (event) => {
    const updatedPageView = event.target.value;

    dispatch(
      pageViewActions.set({
        updatedPageView,
      })
    );
  };

  return (
    <header className={classes.header}>
      <div>
        <Buttons value="Start" text="HOMEPAGE" />
        <Buttons value="Catalogue" text="PRODUCT CATALOGUE" />
        <Buttons value="Orders" text="CURRRENT ORDER" />
        <Buttons value="History" text="PREVIOUS ORDERS" />
      </div>
      <div className={classes.image}>
        <Image height={25} width={75} src="/Images/proffesy.png" />
      </div>
    </header>
  );
};
