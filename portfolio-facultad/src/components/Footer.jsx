import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                © 2025 Nicolás Varela.
            </div>
            <div className="footer-right">
                <a href="https://github.com/NiicoVarelaa" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/niicolasvarelaa/" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer