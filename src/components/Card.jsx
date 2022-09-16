import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ songInfo }) => {
    return (
        // <h1>ciao</h1>
        <div className="col text-center">
            <Link to={"/album/" + songInfo.id}>
                <img className="img-fluid" src={songInfo.album.cover_medium} alt="1" />
            </Link>
            <p>
                <Link to={"/album/" + songInfo.album.id} className="link">
                    Album:{" "}
                    {songInfo.album.title.length < 16
                        ? songInfo.album.title
                        : songInfo.album.title.substring(0, 16)}
                </Link>
                <br />

                <Link to={"/artist/" + songInfo.artist.id} className="link">
                    Artist: {songInfo.artist.name}
                </Link>
            </p>
        </div>
    );
};
