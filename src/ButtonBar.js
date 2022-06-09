let ButtonBar = (props) => {
    // let [input, setInput] = useState('');
    // const handleSubmit =(e) => {
    //     e.preventDefault();
    //     props.searchArtId(input);
    // }
    return(
        <div className='button-bar'>
            {/* <form onSubmit={handleSubmit}>
                <input type='text'></input>
                <button type='submit' onClick={(e) => setInput(e.target.value)}>Search by ArtId</button>
            </form> */}
            <button value={-5} onClick={props.handleIterate}>Way Back</button>
            <button value={-1} onClick={props.handleIterate}>Back</button>
            <button value={1} onClick={props.handleIterate}>Next</button>
            <button value={5} onClick={props.handleIterate}>Big Next</button>
        </div>
    )
}

export default ButtonBar;