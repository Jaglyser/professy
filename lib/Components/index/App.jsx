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
      <header className={classes.header}>
        <Image height={100} width={300} src="/Images/proffesy.png" />
      </header>
      <div className={classes.App}>
        <SplitPane className={classes["split-pane-row"]}>
          <SplitPaneLeft >
            <SplitPane className={classes["split-pane-col"]}>
              <SplitPaneTop />
              <Divider className={classes["separator-row"]} />
              <SplitPaneBottom />
            </SplitPane>
          </SplitPaneLeft>
          <Divider className={classes["separator-col"]} />

          <SplitPaneRight {...jsonData} />
        </SplitPane>
      </div>
    </>
  );
}