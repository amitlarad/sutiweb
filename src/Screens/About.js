import React from "react";
import ApplicationTemplate from "./Layouts/ApplicationTemplate";

function About({ match }) {
  console.log("Match: ", match);
  return (
    <ApplicationTemplate>
      <section class="global-space-section">
        <div class="lisitng-index">
          <h1>About</h1>
        </div>
      </section>
    </ApplicationTemplate>
  );
}

export default About;
