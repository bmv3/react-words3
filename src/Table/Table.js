import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default props => {
  let tbody = props.words.map((word, index) => {
    return (
      <TableRow
        key={index}
        id={index}
        index={index}
        rus={word.rus}
        eng={word.eng}
        transcription={word.transcription}
        association={word.association}
        onClick={props.onClick}
        fields={props.fields}
      />
    );
  });

  return (
    <table className="table table-hover">
      <thead className="thead-dark">
        <TableHeader fields={props.fields} />
      </thead>
      <tbody>{tbody}</tbody>
    </table>
  );
};
