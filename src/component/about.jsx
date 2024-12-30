import React from 'react'
import Banner from "../assets/img/Rectangle1.png";
import { Link } from 'react-router-dom';
import favicon from "../assets/img/favicon.png";

const about = () => {
  return (
    <div>
        <div
          className="relative bg-cover bg-center bg-no-repeat h-64"
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
              About us
            </h1>
            <nav className="mt-2 text-sm text-gray-300">
              <Link to='/'
                
                className="hover:text-white"
                style={{
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#000000',
                }}
              >
                Home
              </Link>
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
                About us
              </span>
            </nav>
          </div>
        </div>
    </div>
  )
}

export default about;