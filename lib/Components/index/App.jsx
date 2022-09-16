import { Autocomplete } from "@mui/material";
import Image from "next/image";
import SplitPane, {
  Divider,
  SplitPaneBottom,
  SplitPaneLeft,
  SplitPaneRight,
  SplitPaneTop,
} from "../Panes/SplitPane";
import classes from './App.module.css';

export default function App(jsonData, props) {

  return (
    <>
    <div className={classes.mainContainer}>
      <div className={classes.secondContainer}>
      <header className={classes.header}>
        <div>Powered by</div>
        <div className={classes.image}><Image height={25} width={75} src="/Images/proffesy.png" /></div>
      </header>
      <div className={classes.App}>
        <SplitPane className={classes["split-pane-row"]}>
          <SplitPaneLeft >
            <SplitPane className={classes["split-pane-col"]}>
              <SplitPaneTop />
            </SplitPane>
          </SplitPaneLeft>
          <Divider className={classes["separator-col"]} />

          <SplitPaneRight {...jsonData} />
        </SplitPane>
      </div>
      </div>
      </div>
    </>
  );
}