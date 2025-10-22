import React from 'react'

const DriverDetails = () => {
  return (
    <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000" alt="" />
            <h4 className="text-lg font-medium">Harsh Patel</h4>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Rs 120</h4>
            <p className="text-sm text-gray-500">Earned</p>
          </div>
        </div>

        <div className="flex p-4 mt-6 bg-gray-300 rounded-xl justify-center items-start gap-3">
          <div className="text-center">
            <i className="text-3xl mb-2  font-thin ri-time-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-500">Hours Online</p>
          </div>

          <div className="text-center">
            <i className="text-3xl mb-2  font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-500">Hours Online</p>
          </div>

          <div className="text-center">
            <i className="text-3xl mb-2  font-thin ri-booklet-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-500">Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default DriverDetails   