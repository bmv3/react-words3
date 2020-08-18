import React from "react";
import Table from "./Table/Table.js";
import Header from "./Header.js";
import WordsData from "./WordsData.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.data = new WordsData();

    let words = this.data.wordsList;

    this.state = {
      words: words,
      score: words.length,
      hiddenFields: new Map([
        ["rus", true],
        ["eng", true],
        ["transcription", true],
        ["association", true]
      ])
    };
  }

  storeHandler(event) {
    this.data.setData(this.state.words);
    let score = this.state.score;
    score = this.state.words.length;
    this.setState({ score });
  }

  resetHandler(event) {
    let words = this.data.defaultData();
    let score = this.state.score;
    score = words.length;
    this.setState({ words });
    this.setState({ score });
  }

  hideHandler(event) {
    let fieldName = event.target.getAttribute("id");
    let fieldValue = event.target.checked;

    let fields = this.state.hiddenFields;

    fields.set(fieldName, fieldValue);
    this.setState(hiddenFields => {
      return fields;
    });
  }

  clickHandler(event) {
    let index = event.target.closest("tr").getAttribute("id");
    let words = this.state.words.concat();
    words.splice(index, 1);
    this.setState({ words });
  }

  render() {
    return (
      <div className="App">
        <Header
          left={this.state.words.length}
          score={this.state.score}
          store={this.storeHandler.bind(this)}
          reset={this.resetHandler.bind(this)}
          hide={this.hideHandler.bind(this)}
          fields={this.state.hiddenFields}
        />
        <Table
          words={this.state.words}
          onClick={this.clickHandler.bind(this)}
          fields={this.state.hiddenFields}
        />
      </div>
    );
  }
}

export default App;
