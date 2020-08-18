import React from "react";

export default props => {
  let showRus = props.fields.get("rus");
  let showEng = props.fields.get("eng");
  let showTranscription = props.fields.get("transcription");
  let showAssociation = props.fields.get("association");

  let hideAll = !showRus && !showEng && !showTranscription && !showAssociation;
  showRus = hideAll ? true : showRus;

  return (
    <tr>
      <th className="word-item_close" scope="col" />
      {showRus ? (
        <th className="word-item_rus" scope="col">
          Русский
        </th>
      ) : null}
      {showEng ? (
        <th className="word-item_eng" scope="col">
          Английский
        </th>
      ) : null}
      {showTranscription ? (
        <th className="word-item_trans" scope="col">
          Транскрипция
        </th>
      ) : null}
      {showAssociation ? (
        <th className="word-item_assoc" scope="col">
          Ассоциация
        </th>
      ) : null}
    </tr>
  );
};
