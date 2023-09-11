import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oIwTW0vi5CAZD5jQYNP-4QHaFV%26pid%3DApi&f=1&ipt=94bc967988ddb13760436b58e443f9b7a4dab9aeca5ac217909dba0f8917b51f&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nD_YrQpSsq2qQntREnmUfAHaE8%26pid%3DApi&f=1&ipt=c8d7320b5a8a87528099abd162115f689a7155cfd5800043d87ff52301e14570&ipo=images",
    "https://images.pexels.com/photos/16975178/pexels-photo-16975178/free-photo-of-comida-mujer-cena-comiendo.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <img
        src={images[0]}
        alt="Image Slider"
        className={`${
          currentIndex === 1
            ? "translate-x-[-100%]"
            : currentIndex === 2
            ? "translate-x-[-200%]"
            : ""
        } ease-in duration-500 object-cover h-full w-full`}
      />
      <img
        src={images[1]}
        alt="Image Slider"
        className={`${
          currentIndex === 1
            ? "translate-x-[-100%]"
            : currentIndex === 2
            ? "translate-x-[-200%]"
            : ""
        } ease-in duration-500`}
      />
      <img
        src={images[2]}
        alt="Image Slider"
        className={`${
          currentIndex === 1
            ? "translate-x-[-100%]"
            : currentIndex === 2
            ? "translate-x-[-200%]"
            : ""
        } ease-in duration-500 object-cover h-full w-full`}
      />
    </>
  );
};

export default ImageSlider;
