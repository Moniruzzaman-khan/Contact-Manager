import ContNavBar from "../Components/Common/ContNavBar.jsx";

const Home = () => {
    return (
        <div>
            <ContNavBar/>
            <div className="bg-image p-5 text-center shadow-1-strong mb-5 text-white"
                 style={{
                     backgroundImage: `url("https://img.gadgethacks.com/img/13/79/63720654943218/0/is-quickest-way-add-new-contact-any-phone.1280x600.jpg")`,
                     height: "100vh",
                     width: "auto"
                 }}>
                <h1 className="mb-3 h2">Contact Book</h1>
                <h5 className="badge bg-primary text-wrap w-75">
                    Never lose your contacts.
                </h5>
            </div>
        </div>
    );
};

export default Home;