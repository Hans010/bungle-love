import React, {useState} from 'react';
import {Draggable} from "react-beautiful-dnd";
import './Album.scss';

const Album = (props) => {

    const [showTracks, setShowTracks] = useState(false);

    const {id, name, cover, year, songList} = props.album;

    const songSet = songList.map((song, index) => {
        return <li id={index}>{song} key={song}</li>
    });

    const toggleTracks = () => {
        setShowTracks(!showTracks);
    };

    const trackList = (showTracks) ? (
        <div className="track-listing-container">
            <ul className="track-list">
                {songSet}
            </ul>
        </div>) : null;

    return (
        <Draggable draggableId={id}
        index={props.index}>
            {(provided) => (
            <article
                className="album"
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
            >
                <div className="img-container">
                    <img
                        src={cover}
                        alt={name}/>
                    <span className="close-btn" onClick={props.remove}>
                        <i className="fas fa-window-close"/>
                    </span>
                </div>
                <div className="album-info">
                    <h2>{name}</h2>
                    <h4>{year}</h4>
                    <h5 onClick={toggleTracks}>Track listing <span><i className="fas fa-caret-square-down"/></span></h5>
                    {trackList}
                </div>
            </article>
                )}
        </Draggable>
    );
}


export default Album;