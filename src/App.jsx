import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
    return (
        <div className="container">
            <Header />
            <div className="flex margin-top">
                <div className="sideBar">
                    <Sidebar />
                </div>
                <div className="flex-grow">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam enim dicta mollitia quam fuga commodi rerum fugit excepturi id quaerat animi vitae doloremque aliquam quo, architecto
                    consequuntur sunt deserunt laboriosam.
                </div>
            </div>
        </div>
    );
};

export default App;
