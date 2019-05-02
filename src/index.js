import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          image={faker.image.avatar()}
          timeAgo="Today 4:45PM"
          comment="Thats so cool"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          image={faker.image.avatar()}
          timeAgo="Today 2:45PM"
          comment="Hate you dude"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          image={faker.image.avatar()}
          timeAgo="Today 1:45PM"
          comment="Nice"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Tindu"
          image={faker.image.avatar()}
          timeAgo="Yesterday at 4:45PM"
          comment="What man. Why give me this name"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
