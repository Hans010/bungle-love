import React, {useState} from 'react';
import './Album.scss';

const Album = (props) => {

    const [showTracks, setShowTRacks] = useState(false);

    const { name, cover, year, songList } = props.album;

    const songSet = songList.map(song => {
        return <li id={song}>{song}</li>
    });

    const toggleTracks = () => {
        setShowTRacks(!showTracks);
    };

    const trackList = (showTracks) ? (
        <div className="track-listing-container">
        <ul className="track-list">
            {songSet}
        </ul>
    </div>) : null;

    return (
        <article className="album">
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
    );
}

export default Album;