
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './pages/landing'
import { Compare } from './pages/compare'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Landing />} />
          <Route path='/compare' element= {<Compare />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
