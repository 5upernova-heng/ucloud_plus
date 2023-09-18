import {useState} from "react";

export function useStoreState(name, value) {
    const [state, setState] = useState(value)
    return [state, function (newValue) {
        GM.setValue(name, newValue)
        setState(newValue)
    }]
}
