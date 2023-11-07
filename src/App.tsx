import { useCallback, useState } from 'react'
import CompteurExo1 from './components/CompteurExo1'
import CompteurExo3 from './components/CompteurExo3'
import CompteurExo4 from './components/CompteurExo4'
import CompteurExo5 from './components/CompteurExo5'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrementCompteur = useCallback(
    () => { setCount(count + 1) },
    [count]
  );



  // EXO 5
  
  const [firstCptExo5, setFirstCptExo5] = useState(0)
  const [secondCptExo5, setSecondCptExo5] = useState(0)

  const handleCompteursExo5 = (newState: string, index: number) => {
        if(newState == "increment") {
          if(index === 1){
            setFirstCptExo5(firstCptExo5 + 1)
          }
          else {
            setSecondCptExo5(secondCptExo5 + 1)
          }
        } else if (newState == "decrement") {
          if(index === 1){
            setFirstCptExo5(firstCptExo5 - 1)
          }
          else {
            setSecondCptExo5(secondCptExo5 - 1)
          }
        }
    };





  return (
    <>
      <h1>Exo 1</h1>
      <div className="exo1">
        <CompteurExo1 />
      </div>

      <h1>Exo 2</h1>
      <div className="exo2">
        <CompteurExo1 />
        <CompteurExo1 />
      </div>

      <h1>Exo 3</h1>
      <div className="exo3">
        <CompteurExo3 value={count} />
        <CompteurExo3 value={count} />
        <button onClick={handleIncrementCompteur}>+</button>
      </div>

      <h1>Exo 4</h1>
      <div className="exo4">
        <CompteurExo4 value={count} />
        <CompteurExo4 value={count} />
        <button onClick={handleIncrementCompteur}>+</button>
      </div>

      <h1>Exo 5</h1>
      <div className="exo5">
        <CompteurExo5
          value={count}
          state={firstCptExo5}
          onStateChange={(state) => handleCompteursExo5(state, 1)}
        />
        <CompteurExo5
          value={count}
          state={secondCptExo5}
          onStateChange={(state) => handleCompteursExo5(state, 2)}
        />
        <button onClick={handleIncrementCompteur}>+</button>
      </div>
    </>
  )
}

export default App
