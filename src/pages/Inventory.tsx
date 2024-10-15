import "../styles/base/_global.scss";
import "../styles/pages/_inventory.scss";
import RadialMenu from "../components/RadialMenu/RadialMenu";

const InventoryPage = () => {
  return (
    <div className="body">
      <div className="full-inv-wrapper">
        <div className="item-preview">
          <div className="current-item">
            <p className="item-title">Équipé</p>
          </div>
          <div className="selected-item">
            <p className="item-title">Sélectionné</p>
          </div>
        </div>
        <div className="inv-wrapper">
          <div className="categories">
            <button>Équipement</button>
            <button>Ressources</button>
            <button>Quêtes</button>
          </div>
          <div className="inventory">
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
            <div className="inv-slot"></div>
          </div>
        </div>
      </div>
      <RadialMenu/>
    </div>
  );
};

export default InventoryPage;