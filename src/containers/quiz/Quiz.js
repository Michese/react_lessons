import {Component} from 'react'
import ActiveQuiz from './components/ActiveQuiz'
import style from './quiz.module.scss'

export default class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quiz: [
                {
                    answers : [
                        {text : 'Ответ 1'},
                        {text : 'Ответ 2'},
                        {text : 'Ответ 3'},
                        {text : 'Ответ 4'},
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <section className={style.quiz}>
                <h1>Quiz</h1>
                <ActiveQuiz answers={this.state.quiz[0].answers} />
            </section>
        )
    }
}