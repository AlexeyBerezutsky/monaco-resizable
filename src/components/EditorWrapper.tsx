import { useState } from "react";
import styles from "./Editor.module.css";
import { Editor } from "./Editor";
import { trigger } from "../resizeEevent";

export const EditorWrapper = () => {
    const [side, setSide] = useState(false);
    const onClickHandler = () => {
        setSide(!side);
        trigger()

    }
    return (
        <div className={styles.Main}>
            <button onClick={onClickHandler}>TOGGLE</button>
            {side && <div className={styles.Side}></div>}

            <div className={styles.Parent}>
                <Editor/>
            </div>
        </div>)
}