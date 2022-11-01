import React, { useState } from "react";
import AlbumItem from "../AlbumItem";
import Album from "../Album";

export default function AlbumList({ albums, updateAlbums }) {

    const [initialAlbums, setInitialAlbums] = useState([
        { name: "Led Zeppelin I", release: "1969", cover: "https://upload.wikimedia.org/wikipedia/en/e/ef/Led_Zeppelin_-_Led_Zeppelin_%281969%29_front_cover.png" },
        { name: "Led Zeppelin II", release: "1969", cover: "https://upload.wikimedia.org/wikipedia/en/2/20/Led_Zeppelin_-_Led_Zeppelin_II.jpg" },
        { name: "Led Zeppelin III", release: "1970", cover: "https://upload.wikimedia.org/wikipedia/en/5/5f/Led_Zeppelin_-_Led_Zeppelin_III.png" },
        { name: "Led Zeppelin IV", release: "1971", cover: "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg" }
    ])

    const renderAlbums = () => initialAlbums.map(album => <AlbumItem album={album} updateAlbums={updateAlbums} />)

    return (
        <div>
            {renderAlbums()}
            {albums.map((album) => {
                return <AlbumItem album={album} updateAlbums={updateAlbums} />
            })}
        </div>
    );
}
