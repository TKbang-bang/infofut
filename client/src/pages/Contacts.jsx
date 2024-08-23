import React from "react";
import FacebookIcon from "../svg/FacebookIcon";
import { Link } from "react-router-dom";
import InstaIcon from "../svg/InstaIcon";
import WhatIcon from "../svg/WhatIcon";

function Contacts() {
  return (
    <div className="contact">
      <Link
        className="f"
        target="_blank"
        to={"https://www.facebook.com/woodley.tanis?mibextid=ZbWKwL"}
      >
        <FacebookIcon fl={"#3b5998"} />
      </Link>
      <Link
        className="i"
        to={"https://www.instagram.com/tk_woodley/"}
        target="_blank"
      >
        <InstaIcon fl={"#d61146"} />
      </Link>
      <Link className="w" to={"https://wa.me/+18295734984"} target="_blank">
        <WhatIcon fl={"#25D366"} />
      </Link>
    </div>
  );
}

export default Contacts;
