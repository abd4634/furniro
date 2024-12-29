import React from 'react'
import favicon from "../assets/img/favicon.png";
import Banner from "../assets/img/Rectangle1.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

const contact = () => {
  return (
    <div>
            <div
                className="relative bg-cover bg-center h-64"
                style={{ backgroundImage: `url(${Banner})` }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
                  <img src={favicon} alt="Logo" />
                  <h1
                    className="text-4xl font-bold"
                    style={{
                      fontWeight: 500,
                      fontSize: '48px',
                      lineHeight: '72px',
                      color: '#000000',
                    }}
                  >
                    Contact
                  </h1>
                  <nav className="mt-2 text-sm text-gray-300">
                    <a
                      href="#"
                      className="hover:text-white"
                      style={{
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#000000',
                      }}
                    >
                      Home
                    </a>
                    <span
                      className="mx-2"
                      style={{ color: '#000000' }}
                    >
                      &gt;
                    </span>
                    <span
                      style={{
                        fontWeight: 300,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#000000',
                      }}
                    >
                      Blog
                    </span>
                  </nav>
                </div>
              </div>
              <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-12">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
            style={{ fontWeight: 600, lineHeight: '54px', fontSize: '36px' }}
          >
            Get in Touch With us
          </h1>
          <p
            className="lg:w-2/3 mx-auto leading-relaxed text-base"
            style={{ alignItems: 'center', fontWeight: 400, fontSize: '16px', lineHeight: '24px' }}
          >
            For More information About Our Product & Services. Please Feel Free to Drop Us An Email. 
            our Staff Always be There to help you out. Do Not Hesitate.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg overflow-hidden p-10 flex flex-col items-start justify-start relative">
          <div className="flex flex-col w-full">
            <div className="w-full px-6 mb-4 flex items-center">
              <FaLocationDot/>
              <div>
                <h2
                  className="title-font font-semibold text-gray-900 tracking-widest text-xs"
                  style={{ fontSize: '24px', fontWeight: 600, lineHeight: '36px' }}
                >
                  ADDRESS
                </h2>
                <p
                  className="mt-1"
                  style={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px' }}
                >
                  236 5th SE Avenue, New York <br /> NY10000, United States
                </p>
              </div>
            </div>
            <div className="w-full px-6 flex items-center">
              <FaPhone/>
              <div>
                <h2
                  className="title-font font-semibold text-gray-900 tracking-widest text-xs"
                  style={{ fontSize: '24px', fontWeight: 600, lineHeight: '36px' }}
                >
                  PHONE
                </h2>
                <a
                  className="text-indigo-500 leading-relaxed"
                  style={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px' }}
                >
                  Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
                </a>
              </div>
            </div>
            <div className="w-full px-6 mt-4 flex items-center">
              <IoTime />
              <div>
                <h2
                  className="title-font font-semibold text-gray-900 tracking-widest text-xs"
                  style={{ fontSize: '24px', fontWeight: 600, lineHeight: '36px' }}
                >
                  WORKING TIME
                </h2>
                <p
                  className="leading-relaxed"
                  style={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px' }}
                >
                  Monday-Friday: 9.00-22.00<br />
                  Saturday-Sunday:9:00-21:00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col w-full py-8">
        <div>
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Post-ironic portland shabby chic echo park, banjo fashion axe
      </p>
      <div className="relative mb-4">
        <label
          htmlFor="name"
          className="leading-7 text-sm text-gray-600"
          style={{ fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          style={{ borderColor: '#9F9F9F' }}
        />
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="email"
          className="leading-7 text-sm text-gray-600"
          style={{ fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          style={{ borderColor: '#9F9F9F' }}
        />
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="subject"
          className="leading-7 text-sm text-gray-600"
          style={{ fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          style={{ borderColor: '#9F9F9F' }}
        />
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="message"
          className="leading-7 text-sm text-gray-600"
          style={{ fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          style={{ borderColor: '#9F9F9F' }}
        ></textarea>
      </div>
      <button
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
        style={{ width: '237px', height: '55px', backgroundColor: '#B88E2F' }}
      >
        Submit
      </button>
    </div></div>
        
      </div> 
    </section>
    </div>
  )
}

export default contact;