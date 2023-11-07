//import { useCallback, useState } from "react"

export default function CompteurExo3(props: { value: number }){
    return (
        <div className="compteur">
            <div className="compteur-value">
                {props.value}
            </div>
        </div>
    )
}
