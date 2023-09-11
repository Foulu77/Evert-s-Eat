import Navbar from "./Navbar";
import Hero from "./Hero";
import HeadlineCards from "./HeadlineCards";
import Food from "./Food";
import Category from "./Category";
import ContactUs from "./ContactUs";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      <ContactUs />
    </div>
  );
}

export default Home;
