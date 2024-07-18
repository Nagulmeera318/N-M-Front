// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="Contact">
      <h2>Contact Us</h2>
      <p>Email: contact@fashion.com</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: 123 Fashion St, Style City, FSHN 1234</p>
      <BsInstagram />
      <FaWhatsapp />
      <FaFacebookF />
      <FaYoutube />
      <FaXTwitter />
    </div>
  );
};
export default Contact;
