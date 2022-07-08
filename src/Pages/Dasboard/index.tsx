import React from "react";
import { MainApi } from "../../Api";

const Dashboard = () => {
  const apiExample = MainApi.getInstance();
  console.log(apiExample.getData());
  return <div>Dashboard</div>;
};

export default Dashboard;
