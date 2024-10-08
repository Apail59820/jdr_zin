import "../styles/pages/_home.scss";
import { statTypesStr } from "../models/StatTypes";
import StatSlot from "../components/StatSlot/StatSlot";

const HomePage = () => {
  return (
    <div className="body">
      <div className="character-sheet-wrapper">
        <div className="character-preview-wrapper">
          <div className="character-name">Renard</div>
          <div className="character-info-switch">
            <button>Equipement</button>
            <button>Prothèses</button>
          </div>
          <div className="character-sheet"></div>
        </div>
        <div className="character-stats-wrapper">
          <div className="character-dynamic-stats">
            <div className="status-bar health-bar"><div className="health"></div></div>
            <div className="status-bar mana-bar"><div className="mana"></div></div>
            <div className="status-bar energy-bar"><div className="energy"></div></div>
          </div>
          <div className="character-static-stats">
            {statTypesStr.map((stat) => (
              <StatSlot statType={stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
