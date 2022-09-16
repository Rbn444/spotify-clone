import React from "react";
import { Container } from "react-bootstrap";

export const AlbumDetails = () => {
    return (
        <Container className="myBox">
            <div className="col-12 col-md-9 offset-md-3 mainPage">
                <div className="row">
                    <div className="col-md-3 pt-5 text-center" id="img-container"></div>
                    <div className="col-md-8 p-5">
                        <div className="row">
                            <div className="col-md-10 mb-5" id="trackList">
                                <h1 className="text-light">Album</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
