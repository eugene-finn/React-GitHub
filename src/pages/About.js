import React from "react";

// https://getbootstrap.com/docs/4.5/components/jumbotron/

export const About = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-4">Информация</h1>
        <p className="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </div>
    </div>
  );
};
