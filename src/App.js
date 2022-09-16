import "./App.css";
import { MusicPlayer } from "./components/MusicPlayer";
import { SideBar } from "./components/SideBar";
import { TopNav } from "./components/TopNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchResults } from "./components/SearchResults";
import { Galleries } from "./components/Galleries";
import { AlbumDetails } from "./components/AlbumDetails";
import { ArtistDetails } from "./components/ArtistDetails";
import NotFound from "./components/NotFound";

function App() {
    return (
        <BrowserRouter>
            <div>
                <TopNav />
                <SideBar />
                <Routes>
                    <Route path="/" element={<Galleries />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/album/:id" element={<AlbumDetails />} />
                    <Route path="/artist/:id" element={<ArtistDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <MusicPlayer />
            </div>
        </BrowserRouter>
    );
}

export default App;
