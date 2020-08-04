import React, { Component } from "react";

class MemeGenerator extends Component {
  state = {
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/26am.jpg",
    allMemeImgs: []
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response =>
        this.setState({
          allMemeImgs: response.data.memes
        })
      );
  }

  handleSubmit = e => {
    e.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImgUrl = this.state.allMemeImgs[randNum].url;
    this.setState({ randomImage: randMemeImgUrl });
  };

  render() {
    return (
      <div className="meme-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Add Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Add Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Generate</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
