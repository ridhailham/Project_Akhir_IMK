const Graffiti = () => {
  return (
    <>
      <div className="h-fit w-full flex items-center justify-center">
        <div className="relative w-full">
          <img src="./GrafitiBackground.png" alt="" className="w-full"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="./Grafiti.svg" alt="" className="w-3/4"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graffiti;
