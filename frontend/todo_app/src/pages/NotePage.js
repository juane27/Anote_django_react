import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'


const NotePage = ({match}) => {
    let navigate = useNavigate();
    let { id: noteId } = useParams();
    let [note, setNote] = useState(null);
    
    useEffect(() => {
      getNote()
  }, [noteId])

    let getNote = async () => {
        if (noteId === 'new') return
        let response = await fetch(`/api/notes/${noteId}/`)
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async () => {
      fetch(`/api/notes/${noteId}/update`, {
          method: "PUT",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(note)
      })
  }

  let handleChange = (value) => {
    setNote(note => ({ ...note, 'body': value }))
    console.log('Handle Change:', note)
}

  let handleSubmit = () => {
    console.log('Nota',note)
    if (noteId !== 'new' && note.body === ''){
      deleteNote()
    } else if (noteId !=='new'){
      updateNote()
    }else if (noteId === 'new' && note.body !== null ){
      createNote()
    }
    
    navigate('/')
  }

  let deleteNote = async () => {
    fetch(`/api/notes/${noteId}/delete`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }     
    })
    navigate('/')
}

  let createNote = async () => {
    fetch(`/api/notes/create/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
  }

  let goHome = () => {
    
    navigate('/');
}

  




  return (
    <div className='note'>
        <div className='note-header'>
            <h3>
            {noteId !== 'new' ? (
              <ArrowLeft onClick={handleSubmit} />
            ) : (
              <button onClick={goHome} >Cancelar</button>
            )}

            

             
                </h3>

                {noteId !== 'new' ? (<button onClick={deleteNote}>Eliminar</button>): (<button onClick={handleSubmit} >Guardar</button>)}
                
            
        </div>
        <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body} placeholder="Escribe tu nota aquí..."></textarea>
    </div>
  )
}

export default NotePage
