import {$, component$, useSignal, useVisibleTask$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import styles from './index.module.scss';

const AUTODECREMENT_DEFAULT_VALUE = "true";
const COUNTER_DEFAULT_VALUE = 5;
const LOCAL_STORAGE_COUNTER_KEY = "doomsday_counter"
const LOCAL_STORAGE_COUNTER_START_KEY = "doomsday_counter_start"
const LOCAL_STORAGE_AUTODECREMENT_KEY = "doomsday_autodecrement"

export default component$(() => {
    const count = useSignal<number | undefined>();
    const startCount = useSignal<number | undefined>();
    const isDoomsday = useSignal<boolean>(false);
    const isAutodecrement = useSignal<boolean | undefined>();
    const inputRef = useSignal<HTMLInputElement | undefined>();
    const dialogRef = useSignal<HTMLDialogElement | undefined>();

    const openDialog = $(() => {
        dialogRef.value?.showModal();
    })

    const closeDialog = $(() => {
        dialogRef.value?.close();
    })

    const decrement = $(() => {
        if (!count.value) {
            count.value = COUNTER_DEFAULT_VALUE;
        }
        count.value--;
        if (count.value <= 0) {
            console.log("It's doomsday!")
            isDoomsday.value = true;
        }
    });

    const setInputValue = $((input?: HTMLInputElement) => {
        count.value = input?.value ? input.value as unknown as number : COUNTER_DEFAULT_VALUE;
        window.localStorage.setItem(LOCAL_STORAGE_COUNTER_START_KEY, count.value.toString())
        isDoomsday.value = false
    })

    const toggleDecrementOnLoad = $(() => {
        isAutodecrement.value = !isAutodecrement.value;
    })


    const reset = $(() => {
        const startValue = window.localStorage.getItem(LOCAL_STORAGE_COUNTER_START_KEY);
        count.value = startValue ? +startValue : COUNTER_DEFAULT_VALUE;
        isDoomsday.value = false;
        closeDialog();
    })


    useVisibleTask$(() => {
        const startValue = window.localStorage.getItem(LOCAL_STORAGE_COUNTER_START_KEY) || COUNTER_DEFAULT_VALUE;
        window.localStorage.setItem(LOCAL_STORAGE_COUNTER_START_KEY, startValue.toString())

        const savedCountValue = window.localStorage.getItem(LOCAL_STORAGE_COUNTER_KEY) || startValue;
        const autodecrement = window.localStorage.getItem(LOCAL_STORAGE_AUTODECREMENT_KEY) || AUTODECREMENT_DEFAULT_VALUE;

        startCount.value = +startValue;
        count.value = +savedCountValue;
        isAutodecrement.value = autodecrement === "true";

        if (isAutodecrement.value) {
            void decrement()
        }
    });

    useVisibleTask$(({track}) => {
        track(() => startCount.value);
        if (!startCount.value) {
            return;
        }
        window.localStorage.setItem(LOCAL_STORAGE_COUNTER_START_KEY, startCount.value.toString())
    });

    useVisibleTask$(({track}) => {
        track(() => count.value);
        if (!count.value) {
            return;
        }
        window.localStorage.setItem(LOCAL_STORAGE_COUNTER_KEY, count.value.toString())
    });

    useVisibleTask$(({track}) => {
        track(() => isAutodecrement.value);
        if (isAutodecrement.value === undefined) {
            return;
        }
        window.localStorage.setItem(LOCAL_STORAGE_AUTODECREMENT_KEY, String(isAutodecrement.value))
    });


    return (
        <div class={styles.page}>

            <dialog class={styles.settingsDialog} ref={dialogRef}>
                <button class={styles.settingsCloseButton} onClick$={closeDialog}>&times;</button>
                <div class={styles.settingsContent}>
                    <h1>Settings</h1>
                    <fieldset class={styles.settingsFieldset}>
                        <div>
                            <input id="checkbox-autodecrement"
                                   type="checkbox"
                                   checked={isAutodecrement.value}
                                   onInput$={() => {
                                       toggleDecrementOnLoad()
                                   }}
                            />
                            <label for="checkbox-autodecrement">
                                autodecrement on start
                            </label>
                        </div>

                        <div>
                            <input type="number" min="1" step="1" ref={inputRef} value={startCount.value}/>
                            <button onClick$={() => setInputValue(inputRef.value)}>SET</button>
                        </div>
                    </fieldset>

                    <div style="text-align:center;">
                        OR
                        <br/>
                        <br/>
                        <button onClick$={reset}>Restart!</button>
                    </div>
                </div>
            </dialog>

            <div class={styles.buttonContainer}>
                {!isDoomsday.value && <div>
                    <button class={styles.redButton} onClick$={decrement}>{count.value}</button>
                </div>}

                {isDoomsday.value && <div class={styles.doomsday}>
                    <audio controls autoPlay style="display:none;">
                        <source src={'/audio/boom.mp3'} type="audio/mpeg"/>
                    </audio>
                    <div class={styles.doomsdayImage}></div>
                    <button class={styles.doomsdayRestartButton} onClick$={reset}>Restart</button>
                </div>}
            </div>

            <div class={styles.settingsContainer}>
                <button class={styles.settingsOpenButton} onClick$={openDialog}>⚙️</button>
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
