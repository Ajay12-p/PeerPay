import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div>
      <nav>
        <a href="#first">
          first
          <i className="far fa-user" />
        </a>
        <a href="#second">
          second
          <i className="fas fa-briefcase" />
        </a>
        <a href="#third">
          third
          <i className="far fa-file" />
        </a>
        <a href="#fourth">
          forth
          <i className="far fa-address-card" />
        </a>
      </nav>
      <div className="container">
        <section id="first">
          <h1>First</h1>
        </section>
        <section id="second">
          <h1>Second</h1>
        </section>
        <section id="third">
          <h1>Third</h1>
        </section>
        <section id="fourth">
          <h1>Fourth</h1>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
