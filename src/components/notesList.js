import react from 'react';
import AddNotes from './AddNotes';
import Note from './note';

const NotesList = (props) => {
    const {notes, handleAddNote} = props;
    console.log(notes);

  return (
    <div className="note-list">
        {notes?.map(note=> (
           <Note id={note.id} text={note?.text} date={note?.date} />
        ))}
    
        <AddNotes handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
