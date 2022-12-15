import React from "react";
import { DisplayCampaigns } from "../components";

const Profile = ({ usercampaigns, isLoading, search }) => {
  const fiteredData = usercampaigns.filter((campaign) => {
    if (search === "") {
      return campaign;
    } else {
      return campaign.title.toLowerCase().includes(search.toLowerCase());
    }
  });
  return (
    <DisplayCampaigns
      title="MY Campaigns"
      isLoading={isLoading}
      campaigns={fiteredData}
    />
  );
};

export default Profile;
