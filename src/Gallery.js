let Gallery = (props) => {
    return(
        <div className='gallery' style={{width:'100%'}}>
            <h1>{props.title}</h1>
            <h2>{props.objectYear}</h2>
            <img src={props.objectImg} alt={props.title} style={{width:'800px'}}></img>
            <p>{props.artist} ({props.artistBirth} - {props.artistDeath})</p>
        </div>
    )
}

export default Gallery;