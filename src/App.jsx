
import Header from './Components/Header/Header';
import Movies from './Components/Movies/Movies'

import NotFound from './Pages/NotFound'
import Details from './Pages/Details'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Favourite from './Pages/favourite';
import { useState } from 'react';
import { LanguageProvider } from './Contexts/language'
import MovieTH from './Components/Movies/movieTH'
import Register from './Pages/Register';


function App() {
 
   let [language,setlanguage] = useState("AR");
  return (
     <>             
     

    <LanguageProvider value={{language,setlanguage}}>

    <Provider  store={store}>
    <BrowserRouter>

    <Header />

    <Routes>
      
      <Route  path='/' element={<Movies/>} /> 
      <Route path='/movieth' element={<MovieTH/>}/> 
      
      <Route  path='/favourite' element={<Favourite/>} />
       <Route  path='/register' element={<Register/>} />
      <Route  path='/details/:id' element={<Details/>} /> 
      <Route  path='*' element={<NotFound/>} /> 
    </Routes>

    <Outlet/>
    
    </BrowserRouter>
    </Provider>
    </LanguageProvider>
       </>

  )
}

export default App
