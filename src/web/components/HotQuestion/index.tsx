// import "./banner.css";
import React, { useEffect } from 'react';
const Hot: React.FC = () => {
  useEffect(() => {
    console.log(1);
  });
  return (
    <>
      <div className="components-hot">
        <span>daily</span>
      </div>
    </>
  );
};
export default Hot;
