import Image from "next/image";
import SplitPane, {
  Divider,
  SplitPaneBottom,
  SplitPaneLeft,
  SplitPaneRight,
  SplitPaneTop,
} from "../Panes/SplitPane";


export default function App(jsonData, props) {

  return (
    <>
      <header className="header">
        <Image height={100} width={300} src="/Images/proffesy.png" />
      </header>
      <div className="App">


        <SplitPane className="split-pane-row">
          <SplitPaneLeft >
            <SplitPane className="split-pane-col">
              <SplitPaneTop />
              <Divider className="separator-row" />
              <SplitPaneBottom />
            </SplitPane>
          </SplitPaneLeft>
          <Divider className="separator-col" />

          <SplitPaneRight {...jsonData} />
        </SplitPane>

      </div>
    </>
  );
}