import React from "react";

import CreateAccount from "../headerComponents/CreateAccount";
import Films from "../headerComponents/Films";
import Lists from "../headerComponents/Lists";
import Members from "../headerComponents/Members";
import SearchBar from "../headerComponents/SearchBar";
import SignIn from "../headerComponents/SignIn";

import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className="test">
        <SignIn />
        <CreateAccount />
        <Films />
        <Lists />
        <Members />
        <SearchBar />
      </div>
    </React.Fragment>
  );
};

export default Header;
