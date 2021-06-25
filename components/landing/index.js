import LandBox from './landBox';

// Styles
import layoutStyle from '../layout.module.css';
import style from './landing.module.css';

export default function Landing() {
  return (
    <div style={{gridColumn: "2 / span 12"}} className="innerContainer">
      <h1 className={style.title}>PACIFIC OCEANS</h1>
      <img className={style.imgLanding + " img"} src={"./images/landing.jpg"} alt="profile" />
      <LandBox title="New Release" text="The State of Things" img={"images/profile.jpg"}/>
    </div>
  )
}
