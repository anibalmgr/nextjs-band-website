import LandBox from './landBox';
import SocialMedia from '../socialMedia';

// Styles
import layoutStyle from '../layout.module.css';
import style from './landing.module.css';

export default function Landing(preweb) {
  return (
    <div style={{gridColumn: "2 / span 12"}} className="innerContainer">
      {/* Change h1 class in future versions */}
      <h1 className={style.title}>PACIFIC OCEANS</h1>
      <div className={style.imgContainer}>
        <img className="img" src={"./images/landing.jpg"} alt="profile" />
        <SocialMedia position={style.socialPosition}/>

      </div>
      <LandBox title="New Release" text="The State of Things" img={"images/profile.jpg"}/>
    </div>
  )
}
