import style from './button.module.css';

export default function Button(props) {
  return (
    <button className={style.button}>
      <img className={style.triangle} src={"./images/play.svg"} />
      <a className={style.text} href={props.link} target="_blank" rel="noreferrer">{props.text}</a>
      <img className={style.arrow} src={"./images/arrow.svg"} />
    </button>
  )
}
