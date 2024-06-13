import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  // use useEffect to make call function at the first start application
  useEffect(() => {
    getNote();
  }, []);
  // function getNote
  const getNote = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };
  //
  const deleteNote = (id) => {
    api
      .delete(`/api/note/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note Deleted!.");
        else alert("Failed to delete Note!.");
        getNote();
      })
      .catch((error) => alert(error));
  };
  //
  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) {
          alert("Note created");
        } else {
          alert("Failed to create note.");
        }
        getNote();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div>
        <div>
          <h2>Notes</h2>
          {notes.map((note) => (
            <Note note={note} onDelete={deleteNote} key={note.id} />
          ))}
        </div>
        <h2>Create Note</h2>
        <form action="" onSubmit={createNote}>
          <label htmlFor="title">Tittle:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />
          <label htmlFor="title">Content:</label>
          <br />
          <input
            type="textarea"
            name="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
