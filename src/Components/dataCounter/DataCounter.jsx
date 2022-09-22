import React from 'react'

const DataCounter = () => {
  return (
        <div class="absolute right-8 top-8">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg border-2 border-[#189ED3] ">
                <div class="p-6 flex flex-col justify-start">
                <h1 class="text-gray-900 text-xl font-medium mb-2">Current Stats</h1>
                <div class="text-gray-700 text-base mb-4">
                    <div className='flex flex-row'>
                        <h2>Total Confirmed Cases : 60,000</h2>
                    </div>
                    <div className='flex flex-row'>
                        <h2>Total Deaths : 250</h2>
                    </div>
                </div>
                <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
  )
}

export default DataCounter