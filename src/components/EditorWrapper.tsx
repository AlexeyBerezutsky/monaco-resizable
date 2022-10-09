import { useEffect, useState } from "react";
import styles from "./Editor.module.css";
import { Editor } from "./Editor";
import { trigger } from "../resizeEevent";
import { debounce } from "lodash";

export const EditorWrapper = () => {
    const [side, setSide] = useState(false);
    const onClickHandler = () => {
        setSide(!side);
        trigger();
    }

    useEffect(() => {
        const debounced = debounce(trigger, 300);
        window.addEventListener('resize', debounced);
        return () => window.removeEventListener('resize', debounced);
    }, []);

    return (
        <div className={styles.Main}>
            <button onClick={onClickHandler}>TOGGLE</button>
            {side && <div className={styles.Side}></div>}

            <div className={styles.Parent}>
                <Editor/>
                <Editor/>
                <Editor/>
                <Editor/>
                <Editor/>
            </div>
        </div>)
}