import React, { useState } from 'react';
import './styles.css';

function AlbumForm({ addAlbum, editAlbum }) {
  const [title, setTitle] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = async event => {
    event.preventDefault();
    if (editingId !== null && title) {
      await editAlbum(editingId, title);
      setEditingId(null);
      setTitle('');
    } else if (title) {
      const newAlbum = { title, id: Date.now() };
      addAlbum(newAlbum);
      setTitle('');
    }
  };

  return (
    <div className="album-form">
      <h2 className="form-title">{editingId !== null ? 'Edit Album' : 'Add Album'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Album title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-button">
          {editingId !== null ? 'Edit' : 'Add'}
        </button>
      </form>
    </div>
  );
}

export default AlbumForm;
