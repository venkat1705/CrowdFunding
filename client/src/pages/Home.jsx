import React from "react";
import { DisplayCampaigns } from "../components";

const Home = ({ campaigns, isLoading, search }) => {
  const fiteredData = campaigns.filter((campaign) => {
    if (search === "") {
      return campaign;
    } else {
      return campaign.title.toLowerCase().includes(search.toLowerCase());
    }
  });
  return (
    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={fiteredData}
    />
  );
};

export default Home;
