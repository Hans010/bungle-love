import React, {useState, useEffect} from 'react';
import Album from "../Album/Album";
import {bungleData} from '../../bungleData';
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import './AlbumList.scss';

const AlbumList = () => {

    const [albums, setAlbums] = useState(bungleData);
    const size = useWindowSize();

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            window.addEventListener("resize", handleResize);

            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }

    const onDragEnd = result => {
        console.log(result);
        const {destination, source, draggableId} = result;

        if (!destination || (destination.index === source.index)) return;

        const movedAlbum = albums.filter(album => album.id === draggableId)[0];

        const newAlbumList = [...albums];
        newAlbumList.splice(source.index, 1);
        newAlbumList.splice(destination.index, 0, movedAlbum);

        setAlbums(newAlbumList);
    };

    const removeAlbum = id => {
        setAlbums(albums.filter(album => album.id !== id
        ))
    }

    const albumList = albums.map((album, index) =>
        <Album
            key={album.id}
            album={album}
            index={index}
            remove={() => removeAlbum(album.id)}
        />
    )
    console.log('window size', size);

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="albumList1" direction={size.width > 480 ? "horizontal" : "vertical"}>
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