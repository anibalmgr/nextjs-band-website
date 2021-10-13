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
      <div className="col-start-1 col-span-12 row-start-3 row-span-2 z-10 text-center flex items-center sm:min-w-max">
      <Title>PACIFIC OCEANS</Title>
      </div>
      <div className="w-full col-start-2 col-span-10 sm:col-start-4 sm:col-span-6 row-start-2 row-span-4 flex flex-col justify-center">
        <div className="rounded-sm border border-black w-full overflow-hidden content-center opacity-80">
          <img className="object-cover" src={"./images/landing-photo.jpeg"} alt="profile" />
        </div>
          <SocialMedia/>
        <div>
        </div>
      </div>
      {/* {isLandBox && <LandBox title="New Release" text="The State of Things" img={"images/profile.jpg"} setClick={close}/>} */}
    </div>
  )
}
