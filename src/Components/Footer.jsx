import React from "react";

const Footer = () => {
  return (
    <footer className="py-12">
      <h1 className="text-center text-4xl font-bold">Gadget Heaven</h1>
      <p className="text-center text-gray-500">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <div className="footer p-10 container mx-auto pl-44">
        <nav>
          <h6 className="footer-title font-bold text-black">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
