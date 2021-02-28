import React, {useState} from 'react';
import Album from "../Album/Album";
import {bungleData} from '../../bungleData';
import classes from './AlbumList.scss';

const AlbumList = (props) => {

    const [albums, setAlbums] = useState(bungleData);

    const removeAlbum = id => {
        setAlbums (albums.filter(album => album.id !== id
        ));
    }

    const albumList = albums.map(album  => {
        return <Album id={album.id} album={album} remove={() => removeAlbum(album.id)}/>
    })


    return (
        <section className="album-list">
            {albumList}
        </section>
    );
}

export default AlbumList;