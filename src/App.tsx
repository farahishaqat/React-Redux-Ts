import React from 'react';
import NewNoteInput from './NewNoteInput';
import { NoteState } from './noteReducer';
import {useSelector,useDispatch} from "react-redux"



function App() {

  const notes = useSelector<NoteState, NoteState["notes"]>  ( (state)=> state.notes)

  // const notes = useSelector<NoteState, NoteState["notes"]>((state )=> state.notes)
  
  const dispatch = useDispatch()

  const addNote=(note:string)=>{
dispatch({type:"ADD_NOTE",payload:note})

  }

  return (
    <>
    <NewNoteInput addNote={addNote} />
    <hr/>
    <ul>

      {notes.map((note)=>{ 
        return  <li key={note}> {note}</li>   })}
      
    </ul>
    </>
  );
}

export default App;
