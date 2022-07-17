import React, { useState } from "react";

import Main from "./main";
import Book from "./book";
import ThankYou from "./thankYou";
import Navbar from "./navbar";

// eslint-disable-next-line import/no-anonymous-default-export
export default function BookingTable() {
  const [page, setPage] = useState(0);

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === 0 ? <Main setPage={setPage} /> : null}
      {page === 1 ? <Book setPage={setPage} /> : null}
      {page === 2 ? <ThankYou /> : null}
    </div>
  );
};