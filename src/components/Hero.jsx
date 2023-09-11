function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/*overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center cursor">
          <h1 className="px-4 text-4xl sm:text-5xl med:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl med:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500">Foods </span>Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://www.readersdigest.ca/wp-content/uploads/2015/11/gourmet-burger.jpg"
          alt="burger"
        />
      </div>
    </div>
  );
}

export default Hero;
