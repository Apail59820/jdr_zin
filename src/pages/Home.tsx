import "../styles/pages/_home.scss";
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
            <div className="status-bar health"></div>
            <div className="status-bar mana"></div>
            <div className="status-bar energy"></div>
          </div>
          <div className="character-static-stats">
            <div className="static-stat strength">Stat</div>
            <div className="static-stat constitution">Stat</div>
            <div className="static-stat perception">Stat</div>
            <div className="static-stat dexterity">Stat</div>
            <div className="static-stat intelligence">Stat</div>
            <div className="static-stat skill">Stat</div>
            <div className="static-stat magic">Stat</div>
            <div className="static-stat medicine">Stat</div>
            <div className="static-stat charisma">Stat</div>
            <div className="static-stat marksman">Stat</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
