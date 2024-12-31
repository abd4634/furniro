import React from 'react'
import favicon from "../assets/img/favicon.png";
import Banner from "../assets/img/Rectangle1.png";
import { Link } from 'react-router-dom';
import { IoFilterSharp } from "react-icons/io5";


const shops = () => {
  return (
    <div>
        
              <div className="flex flex-wrap items-center justify-between bg-beige p-4" style={{ backgroundColor: '#F9F1E7',
                fontWeight: 500, fontSize: '20px', lineHeight: '30px', color: '#000000'
               }}>
                {/* Filter Button */}
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-700">
                    <IoFilterSharp />
                    Filter
                  </button>
                </div>

                {/* Results Count */}
                <div className="text-gray-600">
                  Showing <span className="font-medium">1–16</span> of <span className="font-medium">32</span> results
                </div>

                {/* Show & Sort Options */}
                <div className="flex items-center gap-4">
                  {/* Show */}
                  <div className="flex items-center gap-2">
                    <label htmlFor="show" className="text-gray-600">
                      Show
                    </label>
                    <select
                      id="show"
                      className="p-1 border rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                      <option value="16">16</option>
                      <option value="32">32</option>
                      <option value="48">48</option>
                    </select>
                  </div>

                  {/* Sort By */}
                  <div className="flex items-center gap-2">
                    <label htmlFor="sortBy" className="text-gray-600">
                      Sort by
                    </label>
                    <select
                      id="sortBy"
                      className="p-1 border rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                      <option value="default">Default</option>
                      <option value="priceLowToHigh">Price: Low to High</option>
                      <option value="priceHighToLow">Price: High to Low</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>
                </div>
              </div>

    </div>
  )
}

export default shops;