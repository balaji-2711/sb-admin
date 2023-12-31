import React from "react";
import { Outlet, Link } from "react-router-dom";

function NestedExample() {
  return (
    <div>
      <h3>This is an example to demonstrate the Nested Routing</h3>

      <ul>
        {/* to set the url */}
        <Link to="profile">
          <li>
            <div>Profile</div>
          </li>
        </Link>

        <Link to="account">
          <li>
            <div>Account</div>
          </li>
        </Link>

        <Link to="use-ref">
          <li>
            <div> Use Ref</div>
          </li>
        </Link>

        <Link to="use-reducer">
          <li>
            <div> Use Reducer</div>
          </li>
        </Link>

        <Link to="/nested-example">
          <li>
            <div>Nested Home</div>
          </li>
        </Link>
      </ul>

      {/* to render the current route selected */}
      <Outlet />
    </div>
  );
}

export default NestedExample;
