import style from './answerList.module.scss'
import AnswerItem from "./answerItem/AnswerItem";

const AnswerList = props => {
    return (
        <ul className={style.answer_item}>
            { props.answers.map((answer, index) => {
                return <AnswerItem key={index} answer={answer}/>
            }) }
        </ul>
    )
}

export default AnswerList