// import React, { useState } from 'react'

// class Form extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '',
//             release: '',
//             url: ''
//         }
//         // this.handleInput = this.handleInput.bind(this)
//     }

//     handleInput = (event) => {
//         const name = event.target.name;
//         const newState = {};
//         newState[name] = event.target.value
//         this.setState(newState)
//         event.preventDefault()
//     }

//     hanldeSubmit = (e) => {
//         e.preventDefault();
//         setTodos(
//             [
//                 ...todos,
//                 { text: inputText, completed: false, id: Math.random() * 1000 }
//             ]
//         )
//         setInputText('');
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Insert new album</h2>
//                 <form role="form">
//                     <input type="text" name="name" placeholder="Album name" value={this.state.name} onChange={this.handleInput} />
//                     <input type="text" name="release" placeholder="Release year" value={this.state.release} onChange={this.handleInput} />
//                     <input type="text" name="url" placeholder="Cover URL" value={this.state.url} onChange={this.handleInput} />
//                     <button type='submit'>Add</button>
//                 </form>
//             </div>
//         )
//     }
// };

// export default Form;

import React, { useState } from 'react'

// export default function NewAlbumForm({ setAlbum }) {
//     const [inputAlbumText, setInputAlbumText] = useState('');
//     const [inputReleaseText, setInputReleaseText] = useState('');
//     const [inputURLText, setInputURLText] = useState('');


//     function handleInputAlbumText(e) {
//         setInputAlbumText(e.target.value);
//     }

//     function handleInputReleaseText(e) {
//         setInputReleaseText(e.target.value);
//     }

//     function handleInputURLText(e) {
//         setInputURLText(e.target.value);
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         setAlbum(
//                 { name: inputAlbumText, release: inputReleaseText, cover: inputURLText, id: Math.random() * 1000 }
//         )
//         setInputAlbumText('');
//         setInputReleaseText('');
//         setInputURLText('');
//     }
//     return (
//         <div>
//             <h2>Insert new album</h2>
//             <form role="form">
//                 <input id='albumName' type="text" name="name" placeholder="Album name" value={inputAlbumText} onChange={handleInputAlbumText} />
//                 <input id='albumRelease' type="text" name="release" placeholder="Release year" value={inputReleaseText} onChange={handleInputReleaseText} />
//                 <input id='coverURL' type="text" name="url" placeholder="Cover URL" value={inputURLText} onChange={handleInputURLText} />
//                 <button role="button" onClick={handleSubmit} type='submit'>Add</button>
//             </form>
//             {/* <form>
//                 <label htmlFor='todo'>Todo</label>
//                 <input id="todo" name="todo" value={inputText} onChange={handleInputText} type="text" className="todo-input" />
//                 <button role="button" onClick={handleSubmit} className="todo-button" type="submit">
//                     <i className="fas fa-plus-square"></i>
//                 </button>
//             </form> */}
//         </div>
//     )
// }

export default function AlbumForm({ addAlbum, albums }) {


    const [albumInfo, setAlbumInfo] = useState({
        name: "",
        release: "",
        cover: "",
    });

    const handleChange = (e) => {
        setAlbumInfo({ ...albumInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addAlbum(albumInfo);
        setAlbumInfo([
            ...albums,
            { name: "", release: "", cover: "", id: Math.random() * 1000 }
        ]);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Album Form</h3>
                </div>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Album Name"
                        value={albumInfo.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="release"
                        placeholder="Release date"
                        value={albumInfo.release}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="img"
                        name="cover"
                        placeholder="Album cover"
                        value={albumInfo.cover}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button>Submit new Album</button>
                </div>
            </form>
        </div>
    );
}
