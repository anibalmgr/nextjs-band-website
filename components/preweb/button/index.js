import style from './button.module.css';

export default function Button(props) {
  return (
    <button className={style.button}>
      <img src={"./images/play.svg"} />
      <a className={style.text} href={props.link} target="_blank" rel="noreferrer">{props.text}</a>
      <img src={"./images/arrow.svg"} />
    </button>
  )
}
