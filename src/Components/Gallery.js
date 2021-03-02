import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';

const Gallery = (props, { match }) => {
    let results = props.data;
    let photos = ' '
    let title = props.query;


    if (results.length > 0) {
        photos = results.map(photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />);
    } else {
        photos = <NoResults />
    }

    return (
        <div className="photo-container">
            <h2>{title}</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )
}

export default Gallery;
