import {$, component$, useSignal, useVisibleTask$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import styles from './index.module.scss';

const COUNTER_DEFAULT_VALUE = 5;
const LOCAL_STORAGE_KEY = "doomsday_counter"

export default component$(() => {
    const count = useSignal<number | undefined>();
    const isDoomsday = useSignal<boolean>(false);
    const isDecrementOnLoadActive = useSignal<boolean>(false);
    const inputRef = useSignal<HTMLInputElement | undefined>();
    const dialogRef = useSignal<HTMLDialogElement | undefined>();

    const decrement = $(() => {
        if (!count.value) {
            count.value = COUNTER_DEFAULT_VALUE;
        }
        count.value--
        if (count.value <= 0) {
            console.log("It's doomsday!")
            isDoomsday.value = true;
        }
    });

    const setInputValue = $((input?: HTMLInputElement) => {
        count.value = input?.value ? input.value as unknown as number : 100;
    })

    const reset = $(() => {
        count.value = COUNTER_DEFAULT_VALUE
        isDoomsday.value = false
    })

    const openDialog = $(() => {
        dialogRef.value?.showModal()
    })

    const closeDialog = $(() => {
        dialogRef.value?.close()
    })

    useVisibleTask$(() => {
        const savedCountValue = window.localStorage.getItem(LOCAL_STORAGE_KEY)
        console.log({savedCountValue})
        count.value = savedCountValue ? +savedCountValue : 5;
        if (isDecrementOnLoadActive.value) {
            void decrement()
        }
    });

    useVisibleTask$(({track}) => {
        track(() => count.value);
        if (!count.value) {
            return;
        }
        window.localStorage.setItem(LOCAL_STORAGE_KEY, count.value.toString())
    });


    return (
        <div class={styles.page}>
            <div class={styles.settingsContainer}>
                <button class={styles.settingsOpenButton} onClick$={openDialog}>⚙️</button>
            </div>

            <dialog class={styles.settingsDialog} ref={dialogRef}>
                <button class={styles.settingsCloseButton} onClick$={closeDialog}>&times;</button>
                <div class={styles.settingsContent}>
                    <h1>Settings</h1>

                </div>
            </dialog>

            <div class={styles.buttonContainer}>
                {!isDoomsday.value && <div>
                    <button class={styles.redButton} onClick$={decrement}>{count.value}</button>
                </div>}

                {isDoomsday.value && <div>
                    <h1>Boooooom</h1>
                    <button onClick$={reset}>Restart!</button>
                </div>}

                <fieldset>
                    <input type="number" ref={inputRef} value={COUNTER_DEFAULT_VALUE}/>
                    <button onClick$={() => setInputValue(inputRef.value)}>SET</button>
                </fieldset>
            </div>
        </div>
    );
});

export const head: DocumentHead = {
    title: "Doomsday",
    meta: [
        {
            name: "description",
            content: "It's a countdown to the doomsday!",
        },
    ],
};
