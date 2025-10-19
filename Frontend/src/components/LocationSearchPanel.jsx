import React from 'react'

const LocationSearchPanel = () => {

  // sample array
  const locations = [
    "24B, Near Sharma's Cafe, CIS, Siliguri",
    "2B, Demo Sharma's Cafe, CIS, Bhopal",
    "18C, Near Sharnsdkfksdkjfsknfksfnkma's Cafe, CIS, Siliguri"
  ]

  return (
    <div>
      {/* Sample data */}

      {
        locations.map(function (elem){
          return <div className='flex gap-4 border-2 p-3 border-white active:border-black rounded-xl items-center my-2 justify-start'>
        <h2 className='bg-[#eee] flex items-center justify-center h-10 w-10 rounded-full'><i className='ri-map-pin-fill'></i></h2>
        <h4 className='font-medium'>{elem}</h4>
      </div>
        })
      }
      
    </div>
  )
}

export default LocationSearchPanel