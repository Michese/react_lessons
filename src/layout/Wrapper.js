import {Component} from 'react'
import style from './wrapper.module.scss'

export default class Wrapper extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className={style.wrapper}>
                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}