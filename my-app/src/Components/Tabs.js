import React, { useState } from "react";
import FirstTab from "./AllTabs/FirstTab";
import "../styles.css"

 
const Tabs = ({filteredPosts,currentRequestPosts,currrentUserPosts,paginate,postsPerPage,currentPage,setSearchValue}) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };
  return (
    <>
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Resources
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Requests
        </li>
        <li
          className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}
        >
          Users
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <FirstTab post={filteredPosts} setSearchValue={setSearchValue} paginate={paginate} postsPerPage={postsPerPage} currentPage={currentPage}/> :activeTab==="tab2"? <FirstTab setSearchValue={setSearchValue} post={currentRequestPosts} paginate={paginate} postsPerPage={postsPerPage} currentPage={currentPage || 1}/>:<FirstTab setSearchValue={setSearchValue} post={currrentUserPosts} paginate={paginate} postsPerPage={postsPerPage} currentPage={currentPage || 1}/>}
      </div>
    </>
  );
};

export default Tabs;