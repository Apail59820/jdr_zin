import "../styles/base/_global.scss";
import "../styles/pages/_home.scss";
import { statTypesStr } from "../models/StatTypes";
import StatSlot from "../components/StatSlot/StatSlot";
import StatusBar from "../components/StatusBar/StatusBar";
import RadialMenu from "../components/RadialMenu/RadialMenu";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

const HomePage = () => {

  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className="body">
      <div className="character-sheet-wrapper">
        <div className="character-preview-wrapper">
          <div className="character-info-switch">
            <button>Equipement</button>
            <button>Prothèses</button>
          </div>
          <div className="character-sheet">
            <div className="head"></div>
            <div className="chest"></div>
            <div className="legs"></div>
            <div className="boots"></div>
            <div className="hand1"></div>
            <div className="hand2"></div>
            <div className="character-name">
              <p>{user?.name}</p>
              <p>{user?.class}</p>
            </div>
            <div className="infos"></div>
          </div>
        </div>
        <div className="character-stats-wrapper">
          <div className="character-dynamic-stats">
            <StatusBar status={"health"} />
            <StatusBar status={"mana"} />
            <StatusBar status={"energy"} />
          </div>
          <div className="character-static-stats">
            {statTypesStr.map((stat) => (
              <StatSlot statType={stat} />
            ))}
          </div>
        </div>
      </div>
      <RadialMenu/>
    </div>
  );
};

export default HomePage;
