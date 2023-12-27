import React from "react";
import Button from "./Button";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wvwgv7s",
        "template_2x9skmq",
        form.current,
        "0Zk7f9I89567zlE8U"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };
  return (
    //states
    <section className="flex flex-col justify-center items-center min-h-screen h-auto py-[100px] px-[50px]">
      <h1 className="text-[36px] sm:text-[60px] font-semibold">Contact Us</h1>
      <p className="text-[20px] leading-[24px] sm:leading-[30px] max-w-[580px] text-center mb-[48px]">
        If there's anything you're curious about or need assistance with, don't
        hesitate to reach out. Fill in the form with your query, and our team
        will get back to you promptly
      </p>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <ul className="flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row gap-[20px] mb-[20px]">
              <li>
                <input
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                  className="border-2 w-[315px] h-[50px] pl-[20px] text-[18px]"
                />
              </li>
              <li className="">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                  className="border-2 w-[315px] h-[50px] pl-[20px] text-[18px]"
                />
              </li>
            </div>

            <li>
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
                className="border-2 w-[315px] sm:w-[650px] h-[50px] mb-[20px] pl-[20px] text-[18px]"
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                required
                className="border-2 w-[315px] sm:w-[650px] h-[150px] mb-[48px] pl-[20px] pt-[10px] text-[18px]"
              ></textarea>
            </li>
            <li className="text-center">
              <Button value="Send" type="submit">
                Send
              </Button>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};

export default Contact;
