import { FcOnlineSupport, FcCallback } from "react-icons/fc";

function ContactUs() {
  return (
    <div className="h-[300px] w-full flex flex-col items-center">
      <h1 className="font-bold text-4xl text-orange-600 pb-4">Contact Us</h1>
      <p className="flex items-center p-2 font-semibold">
        24/7 Customer service <FcOnlineSupport size={20} className="ml-2" />
      </p>
      <p className="flex items-center">
        Toll Free Number
        <span className="font-semibold pl-4 flex items-center">
          <FcCallback size={20} className="mr-2" />
          1-800-EvertEats
        </span>
      </p>
      <h2 className="pt-4 text-red-700 font-extrabold">Disclaimer</h2>
      <p className="tracking-wide mx-8">
        "This is a project for learning purposes, information is fictitious in
        order to build this project and images are owned by their repective
        owners"
      </p>
    </div>
  );
}

export default ContactUs;
