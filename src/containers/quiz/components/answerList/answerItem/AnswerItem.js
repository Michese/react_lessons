import style from './answerItem.module.scss'

const AnswerItem = props => {
    return (
        <li className={style.answer_item}>{ props.answer.text }</li>
    )
}

export default AnswerItem