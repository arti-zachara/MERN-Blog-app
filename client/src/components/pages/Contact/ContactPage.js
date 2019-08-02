import React from "react";

import Pagination from "../../common/Pagination/Pagination";

const ContactPage = () => (
  <div>
    <h1>Contact</h1>
    <Pagination pages={10} onPageChange={console.log("click")} />
  </div>
);

export default ContactPage;
