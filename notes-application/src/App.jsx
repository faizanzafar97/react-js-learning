import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!heading.trim() || !content.trim()) {
      return;
    }

    const newNote = {
      id: Date.now(),
      heading: heading.trim(),
      content: content.trim(),
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);

    setHeading("");
    setContent("");
  }

  function deleteNote(id) {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== id)
    );
  }

  return (
    <main className="app">
      <div className="app-wrapper">

        {/* Header */}
        <header className="app-header">
          <div>
            <p className="eyebrow">PERSONAL NOTES</p>
            <h1>Notes Application</h1>
            <p className="subtitle">
              Capture your ideas, thoughts, and important information.
            </p>
          </div>

          <div className="notes-count">
            <span>{notes.length}</span>
            <small>{notes.length === 1 ? "Note" : "Notes"}</small>
          </div>
        </header>


        {/* Add Note */}
        <section className="add-note-section">
          <div className="section-heading">
            <div>
              <p className="section-label">CREATE</p>
              <h2>Add a new note</h2>
            </div>
          </div>

          <form className="note-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="heading">
                Note heading
              </label>

              <input
                required
                type="text"
                id="heading"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                placeholder="e.g. React Hooks"
              />
            </div>

            <div className="input-group">
              <label htmlFor="content">
                Note content
              </label>

              <textarea
                required
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your thoughts here..."
                rows="5"
              />
            </div>

            <button className="add-button" type="submit">
              <span>+</span>
              Add Note
            </button>
          </form>
        </section>


        {/* Recent Notes */}
        <section className="recent-section">
          <div className="section-heading recent-heading">
            <div>
              <p className="section-label">YOUR NOTES</p>
              <h2>Recent Notes</h2>
            </div>
          </div>

          {notes.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📝</div>

              <h3>No notes yet</h3>

              <p>
                Your notes will appear here after you create them.
              </p>
            </div>
          ) : (
            <div className="container">
              {notes.map((note) => (
                <article className="note-card" key={note.id}>
                  <div className="note-content">
                    <span className="note-number">
                      NOTE
                    </span>

                    <h3>{note.heading}</h3>

                    <p>{note.content}</p>
                  </div>

                  <button
                    className="delete-button"
                    onClick={() => deleteNote(note.id)}
                  >
                    Delete
                  </button>
                </article>
              ))}
            </div>
          )}
        </section>

      </div>
    </main>
  );
};

export default App;