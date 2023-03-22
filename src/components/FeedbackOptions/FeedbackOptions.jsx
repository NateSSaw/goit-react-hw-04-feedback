import { Component } from "react";
import css from './FeedbackOptions.module.css'

export default class FeedbackOptions extends Component {
    render () {
     const { options, onLeaveFeedback } = this.props;

        return <ul className={css.list}>{options.map(option => { return <li key={option} className={css.item}><button  onClick={onLeaveFeedback} option={option}>{option}</button></li> })}</ul>;
}
}