import { Helmet } from "react-helmet-async";
import constactImg from "../assets/contact-img.webp";

const ContactUs = () => {
  return (
    <div className="bg-[#09080F0D]">
      <Helmet>
        <title>Contact Us | Gadget Heaven</title>
      </Helmet>
      <div className=" bg-purple-500 py-8 text-center">
        <h1 className="text-4xl font-bold px-10 lg:px-28 text-white">
          Contact Us
        </h1>
        <p className="px-10 mt-4 text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices <br />
          to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2 w-11/12 mx-auto px-4 py-12">
        <div>
          <h1 className="text-3xl">Get In Tounch</h1>
          <p className="text-lg text-gray-500 mb-8">
            Need assistance or have a question? Contact us today via email,
            phone, or our online form. Our team is here to help!
          </p>
          <div className="grid gap-4">
            <input
              className="px-4 py-3 rounded-full"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="px-4 py-3 rounded-full"
              type="email"
              placeholder="shop@company.com"
              required
            />
            <input
              className="px-4 py-3 rounded-full"
              type="text"
              placeholder="Phone Number"
              required
            />
            <textarea
              className="px-4 py-3 rounded-2xl"
              placeholder="How can we help?"
              name=""
              id=""
              cols="20"
              rows="8"
            ></textarea>
            <button className="w-full bg-purple-600 text-white py-2 rounded-full font-bold text-lg transition-all hover:bg-[#222222]">
              Send Message
            </button>
          </div>
        </div>
        <div>
          <img className="rounded-xl" src={constactImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
