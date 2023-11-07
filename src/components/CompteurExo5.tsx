import { useCallback } from "react"

export default function CompteurExo5(props: { value: number, state: number, onStateChange: (valeur: string) => void }){

    //const [cpt, setCpt] = useState(0)

    /*
    const counterValue = useMemo(() => {
        return props.value + props.state
    }, [props.value, props.state])
    */

    const handleIncrement = useCallback(() => {
        // setCpt(props.state + 1)

        props.onStateChange("increment");
        // envoyer au parent pour que le handler modifie le l'état.
        
    }, [props.onStateChange])

    const handleDecrement = useCallback(() => {
        // setCpt(props.state + 1)

        props.onStateChange("decrement");
        // envoyer au parent pour que le handler modifie le l'état.
        
    }, [props.onStateChange])

    return (
        <div className="compteur">
            <div className="compteur-value">
                {props.value}
            </div>
            <div className="compteur-actions">
                <button 
                    className="compteur-actions-increment"
                    onClick={handleDecrement}
                >-</button>
                <button 
                    className="compteur-actions-increment"
                    onClick={handleIncrement}
                >+</button>
            </div>
        </div>
    )
}
