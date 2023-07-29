import { CakeView } from './features/cake/cakeView'
import { IceCreamView } from './features/icecream/IceCreamView'
import { UsersView } from './features/user/UsersView'
import './App.css'


function App() {

  return (
    <div id='app'>
      <CakeView />
      <IceCreamView />
      <UsersView/>
    </div>
  )
}

export default App
