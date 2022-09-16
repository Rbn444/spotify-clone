import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const ArtistDetails = () => {
    const { id } = useParams();
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        let headers = new Headers({
            // sets the headers
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        });

        const func = async () => {
            try {
                let response = await fetch(
                    "https://striveschool-api.herokuapp.com/api/deezer/artist/" + id,
                    {
                        method: "GET",
                        headers,
                    }
                );

                if (response.ok) {
                    let artist = await response.json();
                    console.log(artist);
                    setArtist(artist);
                } else {
                }
            } catch (exception) {}
        };
        func();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Container className="myBox">
            <div className="col-12 col-md-9 offset-md-3 mainPage">
                <div className="row">
                    <div className="col-12 col-md-10 col-lg-10 mt-5">
                        <h2 className="titleMain">{artist?.name}</h2>
                        <div id="followers"></div>
                        <div className="d-flex justify-content-center" id="button-container">
                            {artist && (
                                <>
                                    <button
                                        className="btn btn-success mr-2 mainButton"
                                        id="playButton"
                                    >
                                        PLAY
                                    </button>
                                    <button
                                        className="btn btn-outline-light mainButton"
                                        id="followButton"
                                    >
                                        FOLLOW
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                        <div className="mt-4 d-flex justify-content-start">
                            <h2 className="text-white font-weight-bold">Tracks</h2>
                        </div>
                        <div className="pt-5 mb-5">
                            <div className="row" id="apiLoaded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
