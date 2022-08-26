import style from './message.module.css'

export const Message = ({text}) => {
    return <div className={style.message}>{ text }</div>
}