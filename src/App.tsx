import {Route, Routes} from "react-router-dom"

import Header from "./components/header/Header";
import Blog from "./pages/Blog";




function App() {

    return (
        <>
            <Header/>
            <main className="container">
                <Routes>
                    <Route path="/" element={<Blog />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
