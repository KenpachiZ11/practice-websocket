import { Layout } from './components//Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import { Owner } from './pages/Owner/Owner'
import { About } from './pages/About/About'

function App() {
  const render = () => {
    return (
      <>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path='/' element={<Owner />} />
            <Route path='/aboute' element={<About />} />
          </Route>
        </Routes>
      </>
    )
  };

  return render();
}

export default App
