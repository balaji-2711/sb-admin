import React from "react";

export const D = React.createContext();

function DashboardContextComponent({ children }) {
  let data = {
    earningsMonthly: "40,000",
    earningsYearly: "2,15,000",
    task: "70",
    pendingRequest: "18",
  };
  return <D.Provider value={data}>{children}</D.Provider>;
}

export default DashboardContextComponent;
