import Todos from "./components/Task/Todos";

import AddNewTask from "./components/Task/AddNewTask";

import About from "./components/common/About";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/common/Nav";

const App = () => {
    return (
        <>
            <Nav />
            <div className="d-flex justify-content-center container">
                <div className="col-md-8">
                    <div className="card-hover-shadow-2x mb-3 card">
                        <Routes>
                            <Route path="/" element={<Todos />} />
                            <Route
                                path="/about"
                                element={ <About teachersName="Yola" /> }
                            />
                        </Routes>
                    </div>
                </div>
            </div>
            <AddNewTask />
        </>
    );
};

export default App;
