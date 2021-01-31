import AnswerList from './answerList/AnswerList'
import style from './activeQuiz.module.scss'


const ActiveQuiz = props => {
    return (
        <article className={style.active_quiz}>
            <p className={style.question}>
                <strong>Как дела?</strong>
                <small>
                    Вопрос 4 из 12
                </small>
            </p>
            <AnswerList answers={props.answers} />
        </article>
    )
}

export default ActiveQuiz
