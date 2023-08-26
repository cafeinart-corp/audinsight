import React from "react";
import Header from "../components/dashboard/Header";
import Modal from "../components/modal/Modal";

function Dashboard() {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <a className="[text-decoration:none] bg-white w-full overflow-hidden flex flex-col items-center justify-center gap-[32px] min-w-[320px] max-w-[660px] text-center text-lg text-dimgray font-typography-heading-small">
        <Header />
        <Modal />
      </a>
    </div>
  );
}

export default Dashboard;
