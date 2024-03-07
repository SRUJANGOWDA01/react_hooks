import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from '../components/Home'
import StateComp from '../components/State'
import EffectComp from '../components/EffectComp'
import Pnf from '../components/Pnf'
import Ex1 from '../screens/Ex1'
import Ex2 from '../screens/Ex2'
import Ex3 from '../screens/Ex3'
import Ex4 from '../screens/Ex4'


function ContainerComp() {
  return (
    <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/hooks/state`} element={<StateComp/>}>
            {/*nested route*/}
            <Route path={`useState`} element={<Ex1/>}/>
            <Route path={`useReducer`} element={<Ex2/>}/>

        </Route>
        <Route path={`/hooks/effect`} element={<EffectComp/>}>
            <Route path={`useEffect`} element={<Ex3/>}/>
            <Route path={`useLayoutEffect`} element={<Ex4/>}/>
        </Route>
        <Route path={`/*`} element={<Pnf/>}/>

    </Routes>
  )
}

export default ContainerComp