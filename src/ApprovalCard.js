import React from "react";

const ApprovalCard = props => {
  return (
    <section className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <section className="ui basic green button">Approve</section>
          <section className="ui basic red button">Reject</section>
        </div>
      </div>
    </section>
  );
};

export default ApprovalCard;
