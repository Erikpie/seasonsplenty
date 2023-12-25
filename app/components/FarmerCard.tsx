import React from 'react'
import MeetFarmer from './MeetFarmer'

// FarmerCard component rendered server side
// MeetFarmer button component rendered client side to enable button click
const FarmerCard = () => {
  return (
    <div className='card w-96 glass m-5'>
        <figure><img src="https://media.npr.org/assets/img/2023/05/26/honest-work-meme-cb0f0fb2227fb84b77b3c9a851ac09b095ab74d8-s1600-c85.webp" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">David Brandt</h2>
            <p>Generational Ohio farmer harvesting sunflower seeds</p>
            <div className="card-actions justify-end">
                <MeetFarmer />
            </div>
            </div>
    </div>
  )
}

export default FarmerCard