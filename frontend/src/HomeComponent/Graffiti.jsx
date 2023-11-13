import React from 'react';

const Graffiti = () => {
  return (
    <>
      <div className="h-fit w-full flex items-center justify-center">
        <div className="relative w-full group">
          <img src="./modern-blue-bg.jpg" alt="" className="w-full"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="./Grafiti.svg" alt="" className="w-3/4 graffiti-image transition-transform transform scale-100 group-hover:scale-110"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graffiti;
