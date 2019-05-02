import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        image={faker.image.avatar()}
        timeAgo="Today 4:45PM"
        comment="Thats so cool"
      />
      <CommentDetail
        author="Alex"
        image={faker.image.avatar()}
        timeAgo="Today 2:45PM"
        comment="Hate you dude"
      />
      <CommentDetail
        author="Jane"
        image={faker.image.avatar()}
        timeAgo="Today 1:45PM"
        comment="Nice"
      />
      <CommentDetail
        author="Tindu"
        image={faker.image.avatar()}
        timeAgo="Yesterday at 4:45PM"
        comment="What man. Why give me this name"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
