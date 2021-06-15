import style from './landing.module.css';

export default function LandBox(props) {
  return (
    <div className={style.landBox}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <div className={style.imgContainer}>
        <img className={style.bgImg} src={props.img} alt={props.alt} />
      </div>
    </div>
  )
}
