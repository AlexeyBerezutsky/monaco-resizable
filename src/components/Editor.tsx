import { useEffect, useRef, useState } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import styles from './Editor.module.css';
import { debounce } from 'lodash';
import { subscribe } from "../resizeEevent";

const weirdlyLongValue = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consectetur deleniti ex harum laudantium non officiis perspiciatis tenetur! Animi asperiores beatae consectetur dicta eaque earum eveniet facere itaque minus quod.'

export const Editor = () => {
    const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
    const monacoEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (monacoEl && !editor) {
            setEditor(
                monaco.editor.create(monacoEl.current!, {
                    value: [weirdlyLongValue, weirdlyLongValue, weirdlyLongValue].join('\n'),
                    minimap: {
                        enabled: false
                    },
                })
            );
        }

        return () => editor?.dispose();
    }, [monacoEl.current]);

    useEffect(() => {
        if (!editor || !monacoEl?.current) {
            return;
        }

        const resetEditorLayout = () => {
            editor.layout({width: 0, height: 0});

            window.requestAnimationFrame(() => {
                const rect = monacoEl.current.getBoundingClientRect()

                editor.layout({width: rect.width, height: rect.height})
            })
        }

        const unsubscribe = subscribe(resetEditorLayout);

        return () => unsubscribe();
    }, [editor, monacoEl.current]);

    return <div className={styles.Editor} ref={monacoEl}></div>;
};
