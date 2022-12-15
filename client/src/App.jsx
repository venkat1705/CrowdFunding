import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Profile, CampaignsDetails, CreateCampaign } from "./pages";
import { Navbar, Sidebar } from "./components";
import { useStateContext } from "./context";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [search, setSearch] = useState("");
  const [usercampaigns, setUserCampaigns] = useState([]);
  const { address, contract, getCampaigns, getUserCampaigns } =
    useStateContext();
  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };
  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  const fetchUserCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setUserCampaigns(data);
    setIsLoading(false);
  };
  console.log(usercampaigns);
  useEffect(() => {
    if (contract) fetchUserCampaigns();
  }, [address, contract]);

  const searchHandler = (e) => {
    let lowercaseSearch = e.target.value.toLowerCase();
    setSearch(lowercaseSearch);
  };

  return (
    <div className="relative sm:p-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar
          campaigns={campaigns}
          isLoading={isLoading}
          searchHandler={searchHandler}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                campaigns={campaigns}
                isLoading={isLoading}
                search={search}
              />
            }
          />
          <Route
            exact
            path="/Profile"
            element={
              <Profile
                usercampaigns={usercampaigns}
                isLoading={isLoading}
                search={search}
              />
            }
          />
          <Route exact path="/CreateCampaign" element={<CreateCampaign />} />
          <Route
            exact
            path="/CampaignDetails/:id"
            element={<CampaignsDetails usercampaigns={usercampaigns} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
