function CardItems(props) {
  return (
    <div className="rounded-xl h-[300px] relative overflow-hidden min-w- max-w-sm">
      {/*Overlay*/}
      <div className="z-10 absolute w-full h-[300px] bg-black/30 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">{props.text}</p>
        <p className="px-2">{props.text2}</p>
        <button className="border-white bg-white text-black font-semibold mx-2 absolute bottom-4 hover:scale-110 duration-300">
          Order Now
        </button>
      </div>
      <div className="flex w-[100%] h-full">
        {props.img ? (
          props.img
        ) : (
          <img
            className="h-full w-full object-cover rounded-xl"
            src={props.src}
            alt="/"
          />
        )}
      </div>
    </div>
  );
}

export default CardItems;
