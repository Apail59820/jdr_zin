import { StatTypes } from "../../models/StatTypes";
import { statTranslations } from "../../utils/translations/StatTypes";

type Props = {
  statType: StatTypes;
};

/**
 * @param statType Indiquer s'il s'agit de "strength", etc.
 */
const StatSlot = ({ statType }: Props) => {
  /**
   * statType = strength, constitution, charisma, etc
   * statTranslations[statType] = Force, Constitution, Charisme, etc
   */

  return (
    <div className="static-stat">
      <div className={`static-stat-name ${statType}`}>
        {statTranslations[statType]}
      </div>
      <div className="static-stat-value">50</div>
    </div>
  );
};

export default StatSlot;
