import { MdDeleteForever } from 'react-icons/md';
const Note = (props) => {
const {id, text,date, deleteNote} = props;
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever onClick={()=> deleteNote(id)} className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
