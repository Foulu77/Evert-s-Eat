import CardItems from "./CardItems";
import ImageSlider from "../features/Slider";

function HeadlineCards() {
  return (
    <div className="relative max-w-[1640px] h-full mx-auto p-6 py-12 grid justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardItems
        text="Monster Burgers"
        text2="Delicious and tasty"
        src="https://images.pexels.com/photos/10922927/pexels-photo-10922927.jpeg?auto=compress&cs=tinysrgb&w=400"
      />
      <CardItems
        text="Grill zone"
        text2="For meat enjoyers"
        src="https://media.istockphoto.com/id/594465522/es/foto/filetes-a-la-parrilla-a-la-parrilla-en-llamas-y-se-disparan-con-enfoque-selectivo.jpg?b=1&s=612x612&w=0&k=20&c=2HcN22CaoY6GfnrvG8gSgclFTC_6U93LNkhFRgPfXQ0="
      />
      <CardItems
        text="We Deliver Desserts Too"
        text2="Tasty Treats"
        src="https://media.istockphoto.com/id/959868924/es/foto/yogurt-con-granola-frutas-de-bayas-y-chocolate.jpg?s=612x612&w=0&k=20&c=t5TkmsCzWoDLfew5bkIyBsO5QmkxqjLtRlpHC65jK9s="
      />
      <CardItems
        text="Fresh salads"
        text2="Chopped Daily"
        src="https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=400"
      />
      <CardItems
        text="Coffee"
        text2="For coffee lovers <3"
        src="https://images.pexels.com/photos/312420/pexels-photo-312420.jpeg?auto=compress&cs=tinysrgb&w=400"
      />
      <CardItems
        text="Ramen"
        text2="Chef's choice"
        src=""
        img={<ImageSlider />}
      />
    </div>
  );
}

export default HeadlineCards;
