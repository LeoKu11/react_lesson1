import style from './Message.module.css';

export const Message = (props) => (
  <div className={style.card}>
    <p className={style.text}>Number of articles:</p>
    <p className={style.text1}>{props.data}</p>
  </div>
);
