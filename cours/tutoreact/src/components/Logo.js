import React from "react";

const logo = () => {
  return (
    <div>
      <div className="logo">
        {/*les images importés depuis la balises img sont accessible dans public*/}
        <img src="./logo192.png" alt="logo React" />
        <h2>React World</h2>
      </div>
    </div>
  );
};

export default logo;
