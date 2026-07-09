import { BrowserRouter } from 'react-router'
import { AppRoutes } from './shared/routing/AppRoutes'

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
