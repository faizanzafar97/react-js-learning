import React from 'react'
import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between">
      <div className="p-7">
        <h3 className="mb-7 text-4xl font-bold text-black  ">Prospective <br /><span>Customer</span> <br/> segmentation</h3>
        <p className="text-lg font-medium text-gray-500">Identifying and categorizing potential customers based on their characteristics and behaviors.</p>
      </div>

      <div className="p-7">
       <ArrowUpRight className="w-32 h-32" />
      </div>
    </div>
  )
}

export default LeftContent