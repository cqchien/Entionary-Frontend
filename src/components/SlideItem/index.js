import { makeStyles } from "@material-ui/core";
import React from "react";
import slideItemStyle from "./style";

const useStyle = makeStyles(slideItemStyle);

const SlideItem = ({ mean, word, type, phonetic, example, picture }) => {
  const classes = useStyle({ picture });

  return (
    <div className={`${classes.root} ani-fade`}>
      <div className={classes.picture} />
      <div className={`${classes.content} flex-center-col`}>
        <h3 className={`${classes.word} flex-center--ver`}>
          <span>{word}</span>
        </h3>
        <h2 className={classes.mean}>Mean: {mean}</h2>
        {type && <p className={classes.type}>({type})</p>}
        {phonetic && <p className={classes.phonetic}>/{phonetic}/</p>}
        {example && <p className={classes.example}>Example: {example}</p>}
      </div>
    </div>
  );
};

export default SlideItem;
