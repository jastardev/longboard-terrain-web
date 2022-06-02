

export default function PageNavBar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className={"container-lg"}>
                <a className="navbar-brand" href="/">Xtreme Sport Mapping</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Account</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )

}