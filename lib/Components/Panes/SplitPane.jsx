import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import TestFilter from "../Filter/TestFilter";
import SplitPaneContext from "../Panes/SplitPaneContext";
import ProductList from "../Products/ProductList";
import classes from './SplitPane.module.css';
import TextField from "@mui/material/TextField";
import ProductData from "../Products/ProductData";

const SplitPane = ({ children, ...props }) => {
  const [clientHeight, setClientHeight] = useState(null);
  const [clientWidth, setClientWidth] = useState(null);
  const yDividerPos = useRef(null);
  const xDividerPos = useRef(null);

  const onMouseHoldDown = (e) => {
    yDividerPos.current = e.clientY;
    xDividerPos.current = e.clientX;
  };

  const onMouseHoldUp = () => {
    yDividerPos.current = null;
    xDividerPos.current = null;
  };

  const onMouseHoldMove = (e) => {
    if (!yDividerPos.current && !xDividerPos.current) {
      return;
    }

    setClientHeight(clientHeight + e.clientY - yDividerPos.current);
    setClientWidth(clientWidth + e.clientX - xDividerPos.current);

    yDividerPos.current = e.clientY;
    xDividerPos.current = e.clientX;
  };

  useEffect(() => {
    document.addEventListener("mouseup", onMouseHoldUp);
    document.addEventListener("mousemove", onMouseHoldMove);

    return () => {
      document.removeEventListener("mouseup", onMouseHoldUp);
      document.removeEventListener("mousemove", onMouseHoldMove);
    };
  });

  return (
    <div {...props}>
      <SplitPaneContext.Provider
        value={{
          clientHeight,
          setClientHeight,
          clientWidth,
          setClientWidth,
          onMouseHoldDown,
        }}
      >
        {children}
      </SplitPaneContext.Provider>
    </div>
  );
};

export const Divider = (props) => {
  const { onMouseHoldDown } = useContext(SplitPaneContext);

  return <div {...props} onMouseDown={onMouseHoldDown} />;
};

export const SplitPaneTop = (...jsonData) => {
  const topRef = createRef();
  const { clientHeight, setClientHeight } = useContext(SplitPaneContext);

  useEffect(() => {
    if (!clientHeight) {
      setClientHeight(topRef.current.clientHeight);
      return;
    }

    topRef.current.style.minHeight = clientHeight + "px";
    topRef.current.style.maxHeight = clientHeight + "px";
  }, [clientHeight]);

  return (
    <div className={classes["split-pane-top"]} ref={topRef}>
      <TestFilter />
    </div>
  );
};

export const SplitPaneBottom = () => {

  return (
    <div className={classes["split-pane-bottom"]}>
          Placeholder
    </div>
  );
};

export const SplitPaneLeft = (props) => {
  let children = { children: props.children }
  const topRef = createRef();
  const { clientWidth, setClientWidth } = useContext(SplitPaneContext);
  

  useEffect(() => {
    if (!clientWidth) {
      setClientWidth(topRef.current.clientWidth / 2);
      return;
    }

    topRef.current.style.minWidth = clientWidth + "px";
    topRef.current.style.maxWidth = clientWidth + "px";
  }, [clientWidth]);

  return <div {...children} className={classes['split-pane-left']} ref={topRef} />;
};

export const SplitPaneRight = (jsonData) => {



const [searchTerm, setSearchTerm] = useState("");

const dataset = ProductData;

const filtered = dataset.filter(val => {
  if (searchTerm == "") {
    return val
  } else if (val.Shortdescription.toLowerCase().includes(searchTerm.toLowerCase())) {
    return val
  }
});

const numberOfItems = Object.keys(filtered).length


  return (
    <div className={classes["split-plane-right-container"]}>
      <div className={classes["split-plane-right-numberOfProductsInSelection"]}>
          {numberOfItems} items
        </div>
      <div className={classes["split-plane-right-heading"]}>
      <div className={classes.search}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          size="small"
          onChange={(event) =>{
            setSearchTerm(event.target.value);
          }}
        />
      </div>
        <div>Net price</div>
        <div>Retail price</div>
        <div>Quantity</div>
      </div>
    <div className={classes["split-plane-right-rows"]}>
      <ProductList {...filtered} />
    </div>
    </div>
  );
};

export default SplitPane;
