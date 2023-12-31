import { useContext, useEffect } from "react"
import { CTX } from "../context/store"
import QwertyHancock from "qwerty-hancock";

const Keyboard = () => {
    const [appState, updateState] = useContext(CTX);
    useEffect(() => {
        const keyboard = new QwertyHancock({
            id: "keyboard",
            width: "999",
            height: "70",
            octaves: 4,
            startNote: "C4"
        })
        keyboard.keyDown = (note, freq) => {
            updateState({ type: "MAKE_OSC", payload: { note, freq } })
        }
        keyboard.keyUp = (note, freq) => {
            updateState({ type: "KILL_OSC", payload: { note, freq } })
        }
    }, []);
    return (
        <div className="keyboard">
            <div id="keyboard"></div>
        </div>
    )

}

export default Keyboard;