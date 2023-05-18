import React from "react";

function Header({ discoloration, setDiscoloration }) {
  console.log(discoloration);
  const handleDiscoloration = () => {
    let newDiscoloration = discoloration;
    newDiscoloration = !newDiscoloration;
    setDiscoloration(newDiscoloration);
  };
  return (
    <div className="show" style={{ color: discoloration ? "green" : "black" }}>
      <h2>Reviews TA Béc cọp!!!</h2>
      <i class="fas fa-moon" onClick={handleDiscoloration}></i>
    </div>
  );
}

export default Header;