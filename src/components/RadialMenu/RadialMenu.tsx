import { useState } from "react";

const RadialMenu = () => {
  const [currentState, setCurrentState] = useState<boolean>(false);

  return (
    <div className={`radial-menu radial-${currentState && "active"}`}>
      <div className="radial-menu-toggle" onClick={() => setCurrentState(!currentState)}/>
      <li>
        <a href="/inventory"></a>
      </li>
      <li>
        <a href="/"></a>
      </li>
      <li>
        <a href="/debug"></a>
      </li>
    </div>
  );
};

export default RadialMenu;
