import { Component } from "react";
import css from './Statistics.module.css';

export default class Statistics extends Component{

    
    render() {
        const { good, neutral, bad, total, positiveFeedback } = this.props;
        
        return (<div className="statistics">
            <h3 className={css.title}>Statistics</h3>
            <ul className={css.list}>
                <li className={css.item}>Good: {good}</li>
                <li className={css.item}>Neutral: {neutral}</li>
                <li className={css.item}>Bad: {bad}</li>
                <li className={css.item}>Total: {total}</li>
                <li className={css.item}>Positive feedback: {positiveFeedback}%</li>
            </ul>
        </div>)
    }
}