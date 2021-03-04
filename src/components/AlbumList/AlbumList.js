import React, {useState, useEffect} from 'react';
import Album from "../Album/Album";
import {bungleData} from '../../bungleData';
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import './AlbumList.scss';

const AlbumList = (props) => {

    const [albums, setAlbums] = useState(bungleData);

    useEffect(() => {

    })

    const onDragEnd = result => {
        console.log(result);
        const {destination, source, draggableId} = result;

        if (!destination) return;

        if (destination.index === source.index) return;

        const movedAlbum = albums.filter(album => {
            return album.id === draggableId;
        })[0];

        console.log(movedAlbum);

        const newAlbumList = [...albums];
        newAlbumList.splice(source.index, 1);
        newAlbumList.splice(destination.index, 0, movedAlbum);

        // console.log(newAlbumList);

        setAlbums(newAlbumList);

    };

    const removeAlbum = id => {
        setAlbums(albums.filter(album => album.id !== id
        ));
    }

    const albumList = albums.map((album, index) => {
        return <Album
            key={album.id}
            album={album}
            index={index}
            remove={() => removeAlbum(album.id)}
        />
    })

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="albumList1">
                {(provided) =>
                    <section
                        className="album-list"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {albumList}
                        {provided.placeholder}
                    </section>
                }
            </Droppable>
        </DragDropContext>
    );
}

export default AlbumList;