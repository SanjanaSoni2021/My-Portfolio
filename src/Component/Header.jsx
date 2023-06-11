import React from "react"
function Header(){
    return(
        <div>
            <header>
                <div className="header-inner">
                    <span className="logo">Happy</span>
                    <div className="links">
                        <a className="link" href="#banner">
                            Home
                        </a>
                        <a className="link" href="#banner">
                            services
                        </a>
                        <a className="link" href="#banner">
                            Experience
                        </a>
                        <a className="link" href="#banner">
                            Projects
                        </a>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header