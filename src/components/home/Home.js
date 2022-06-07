import React, {useState} from 'react'
import Header from "../header/Header"
import Proposals from './proposals/Proposals';
import VotingPower from './votingpower/VotingPower';
import Activity from './activity/Activity';

const Home = () => {

  const [selectingTab, setSelectingTab] = useState(0);

  const selectTab = (e) => {
    const selectingTabID = e.target.id[e.target.id.length - 1];
    const currentSelectingTab = document.getElementById(`header-item-${selectingTab}`);

    if (selectingTab !== selectingTabID) {
      currentSelectingTab.setAttribute("class", "header-item");
      e.target.setAttribute("class", `${e.target.getAttribute("class")} header-selecting-item`);
      setSelectingTab(selectingTabID);
    }
    console.log(selectingTab);
  }

  const displayTab = () => {
    switch(selectingTab){
      case 0: return <Proposals />
      case 1: return <VotingPower />
      case 2: return <Proposals />
      case 3: return <Activity />
      default: return <Proposals />
    }
  }

  return (
    <div className="horizontal-flex-box">
      <Header selectingTab={selectingTab} onSelectingTab={selectTab}/>
      {displayTab()}
    </div>
  )
}

export default Home