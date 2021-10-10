import { useState } from 'react';
import LandBox from './landBox';
import SocialMedia from '../socialMedia';
import { Title } from '../fonts';

export default function Landing(preweb) {

  // const [isLandBox, setLandBox] = useState(true);
  const [isLandBox, setLandBox] = useState(true);

  function close() {
    setLandBox(false);
  }

  return (
    <div className="h-screen w-full grid grid-cols-12 grid-rows-6">
      {/* Change h1 class in future versions */}
      <div className="col-start-1 col-span-12 row-start-3 row-span-2 z-10 text-center flex items-center">
      <Title>PACIFIC OCEANS</Title>
      </div>
      <div className="w-full col-start-4 col-span-6 row-start-2 row-span-4 flex flex-col justify-center">
        <div className="w-full overflow-hidden content-center">
          <img className="object-cover" src={"./images/landing.jpg"} alt="profile" />
        </div>
          <SocialMedia/>
        <div>
        </div>
      </div>
      {isLandBox && <LandBox title="New Release" text="The State of Things" img={"images/profile.jpg"} setClick={close}/>}
    </div>
  )
}
