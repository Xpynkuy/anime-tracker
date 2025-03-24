import { Route, Routes } from 'react-router-dom'
import './styles/global.css'
import { Layout } from '../widgets/layout'
import { MainPage } from '../pages/main'
import { CatalogPage } from '../pages/catalog'

function App() {


    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<MainPage/>}></Route>
                    <Route path='catalog' element={<CatalogPage/>}></Route>
                </Route>
            </Routes>
            
           
            
        </div>
    )
}

export default App
