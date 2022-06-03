import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void;
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    return (
        <div>
            <b><span>// show some text</span></b>
            <em><span
                className={props.affair.priority === 'high' ? styles.highPriority : styles.priority}
            > {props.affair.priority}</span></em>
            <button className={styles.button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
