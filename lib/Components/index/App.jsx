import { Autocomplete } from "@mui/material";
import Image from "next/image";
import SplitPane, {
  Divider,
  SplitPaneBottom,
  SplitPaneLeft,
  SplitPaneRight,
  SplitPaneTop,
} from "../Panes/SplitPane";
import classes from "./App.module.css";
import { CurrentOrder } from "../Order/CurrentOrder";
import { MainHeader } from "../MainPages/Header/MainHeader";
import { useSelector } from "react-redux";
import "@fontsource/barlow";

export default function App(props) {

  const selectedView = useSelector((state) => state.pageView.pageViews);

  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.secondContainer}>
          <MainHeader />
          <div className={classes.App}>
            {selectedView == "Start" && <div>startpage</div>}
            {selectedView != "Start" && (
              <SplitPane className={classes["split-pane-row"]}>
                <SplitPaneLeft {...props}>
                  <SplitPane className={classes["split-pane-col"]}>
                    <SplitPaneTop {...props}/>
                  </SplitPane>
                </SplitPaneLeft>
                <Divider className={classes["separator-col"]} />

                <SplitPaneRight {...props} />
              </SplitPane>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
