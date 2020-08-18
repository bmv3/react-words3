import React from "react";

export default function Table(props) {
  let showRus = props.fields.get("rus");
  let showEng = props.fields.get("eng");
  let showTranscription = props.fields.get("transcription");
  let showAssociation = props.fields.get("association");

  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row bottom-panel">
          <div id="score">
            <span id="left_words">{props.left}</span> /{" "}
            <span id="start_count">{props.score}</span>
            <button
              type="button"
              className="btn btn-light"
              id="store_button"
              onClick={props.store}
            >
              Сохранить
            </button>
            <button
              type="button"
              className="btn btn-light"
              id="reset_button"
              onClick={props.reset}
            >
              Сбросить
            </button>
          </div>
        </div>
        <div className="row options-panel">
          <label htmlFor="rus">
            <input
              type="Checkbox"
              name="word-item_rus"
              id="rus"
              onClick={props.hide}
              defaultChecked={showRus}
            />{" "}
            Русский
          </label>
          <label htmlFor="eng">
            <input
              type="Checkbox"
              name="word-item_eng"
              id="eng"
              onClick={props.hide}
              defaultChecked={showEng}
            />{" "}
            Английский
          </label>
          <label htmlFor="transcription">
            <input
              type="Checkbox"
              name="word-item_trans"
              id="transcription"
              onClick={props.hide}
              defaultChecked={showTranscription}
            />{" "}
            Транскрипция
          </label>
          <label htmlFor="association">
            <input
              type="Checkbox"
              name="word-item_assoc"
              id="association"
              onClick={props.hide}
              defaultChecked={showAssociation}
            />{" "}
            Ассоциация
          </label>
        </div>
      </div>
    </div>
  );
}
