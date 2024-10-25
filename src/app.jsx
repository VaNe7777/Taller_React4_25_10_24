import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './componentes/Header';
import comentarios from './data/Comentarios';
import ComentarioLista from './componentes/ComentarioLista';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';
import Card from './componentes/Card';
import About from './paginas/About';
import AboutIconLink from './componentes/AboutIconLink';
import HomeIconLink from './componentes/HomeIconLink';
import { ComentariosProvider } from './contexto/ComentariosContexto';


function App() {
    const [comments, setComments] = useState(comentarios)

    const titulo = "App de Comentarios";
    const Autor = "Linda Guerrero";
    const ficha = "2902093";
    const centro = "CGMLTI";


    const loading = false;
    if (loading) return (<h1>Cargando comentarios...</h1>);

    <Card reverse={true}></Card>
    const addComentario = (newComentario) => {
        const id = comments.length ? Math.max(...comments.map(c => c.id)) + 1 : 1;
        const comentarioConId = { id, ...newComentario };
        setComments([...comments, comentarioConId]);
    };

    return (

        <ComentariosProvider>
             <Router>
            <div className='container'>
            <Header 
                titulo={titulo}  
                autor={Autor} 
                ficha={ficha} 
                centro={centro}
            /> 

            <Routes>
            <Route exact path='/' element = {
                <>
                 <ComentarioForm handleAdd={addComentario} />

                 <ComentarioStats /> 
               
                 <ComentarioLista />         

            <AboutIconLink />

                </>
            }></Route>

            <Route path='/about' element={
                        <>
                <About titulo={titulo} 
                       autor={Autor} 
                       ficha={ficha}
                       centro ={centro}
                       />
                       
                <HomeIconLink/>
                </> 
                        
                
                    }></Route>
                
            </Routes> 

        </div>

        </Router>
        
        </ComentariosProvider>
       
)};

export default App;

