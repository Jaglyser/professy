import SplitPane, {
  Divider,
  SplitPaneBottom,
  SplitPaneLeft,
  SplitPaneRight,
  SplitPaneTop,
} from "../Panes/SplitPane";


export default function App(jsonData) {

  return (
    <div className="App">

      <SplitPane className="split-pane-row">
        <SplitPaneLeft>
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
  );
}