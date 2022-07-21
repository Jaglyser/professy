import SplitPane, {
  Divider,
  SplitPaneBottom,
  SplitPaneLeft,
  SplitPaneRight,
  SplitPaneTop,
} from "../Panes/SplitPane";


export default function App(jsonData, props) {

  return (
    <div className="App">

      <SplitPane className="split-pane-row">
        <SplitPaneLeft {...jsonData}>
          <SplitPane className="split-pane-col">
            <SplitPaneTop />
            <div>test</div>
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