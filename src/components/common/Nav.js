import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="m-3">
            <ul className="nav nav-pills justify-content-center">
                <li className="nav-item">
                    <NavLink
                        to="/"
                        exact
                        className="nav-link"
                        activeClassName="active"
                        activeStyle={{ color: "red" }}
                    >
                        routine
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/about"
                        className="nav-link"
                    >
                        About Creator
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
