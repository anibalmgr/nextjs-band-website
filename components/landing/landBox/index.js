import style from './landbox.module.css';
import { useMediaQuery } from 'react-responsive';

export default function LandBox(props) {

  const isMobile = useMediaQuery({query: '(max-width: 500px)'})

  console.log(isMobile);

  return (
    <div className={style.landBox}>
      <h3>{props.title}</h3>
      {!isMobile && <img className={style.arrow} src="/images/arrow.svg" alt="link"/>}
      {isMobile && <img className={style.closeX} src="/images/close_x.svg" alt="close windows" onClick={props.setClick}/>}
      <p>{props.text}</p>
      <div className={style.imgBoxContainer}>
        <img className={style.bgImg} src={props.img} alt={props.alt} />
      </div>
    </div>
  )
}
