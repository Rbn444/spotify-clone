import React from "react";
import { Container } from "react-bootstrap";

export const SearchResults = () => {
    return (
        <Container className="myBox">
            <div className="row">
                <div className="col-10">
                    <div id="searchResults">
                        <h2>Search Results</h2>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
