import React from "react";

export default props => {
  let showRus = props.fields.get("rus");
  let showEng = props.fields.get("eng");
  let showTranscription = props.fields.get("transcription");
  let showAssociation = props.fields.get("association");

  let hideAll = !showRus && !showEng && !showTranscription && !showAssociation;
  showRus = hideAll ? true : showRus;

  return (
    <tr id={props.id}>
      <td className="word-item_close" onClick={props.onClick}>
        <svg className="icon">
          <use xlinkHref="#cross-black-circular-button" />
        </svg>
      </td>
      {showRus ? <td className="word-item_rus">{props.rus}</td> : null}
      {showEng ? <td className="item_eng-item_rus">{props.eng}</td> : null}
      {showTranscription ? (
        <td className="item_eng-item_trans">{props.transcription}</td>
      ) : null}
      {showAssociation ? (
        <td className="item_eng-item_assoc">{props.association}</td>
      ) : null}
    </tr>
  );
};
