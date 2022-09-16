import React from "react";
import { Container } from "react-bootstrap";
import { SingleGallery } from "./SingleGallery";
import { useEffect, useState } from "react";

export const Galleries = () => {
    const [rockArtists] = useState([
        "queen",
        "u2",
        "thepolice",
        "eagles",
        "thedoors",
        "oasis",
        "thewho",
        "bonjovi",
    ]);
    const [popArtists] = useState([
        "maroon5",
        "coldplay",
        "onerepublic",
        "jamesblunt",
        "katyperry",
        "arianagrande",
    ]);
    const [hipHopArtists] = useState(["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"]);

    return (
        <Container className="myBox">
            <SingleGallery title={"Rock Classic"} artists={rockArtists} />
            <SingleGallery title={"Pop Culture"} artists={popArtists} />
            <SingleGallery title={"#HipHop"} artists={hipHopArtists} />
        </Container>
    );
};
