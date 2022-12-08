import NotesList from './components/notesList';
import { useState } from 'react';
import { nanoid } from 'nanoid';
const App = () => {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'this is my first note!',
      date: new Date().getFullYear(),
    },
    {
      id: nanoid(),
      text: 'this is my another note!',
      date: new Date().getFullYear(),
    },
    {
      id: nanoid(),
      text: 'this is my first note!',
      date: new Date().getFullYear(),
    },
    {
      id: nanoid(),
      text: 'this is my first note!',
      date: new Date().getFullYear(),
    },
    {
      id: nanoid(),
      text: 'this is my first note!',
      date: new Date().getFullYear(),
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = ((id)=> {
   const newNotes = notes.filter((note)=> note.id !== id);
   setNotes(newNotes);
  })

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote}  deleteNote={deleteNote}/>
    </div>
  );
};
export default App;
