import React from 'react';
import './styles.css';

function AlbumList({ albums, deleteAlbum, editAlbumTitle }) {
  return (
    <div className="album-list">
      <h1>Albums</h1>
      <ul className="album-items">
        {albums.map(album => (
          <li key={album.id} className="album-item">
            {album.title}
            <div>
              <button className="edit-button" onClick={() => editAlbumTitle(album.id, prompt('Enter new title:'))}>
                Edit
              </button>
              <button className="delete-button" onClick={() => deleteAlbum(album.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
