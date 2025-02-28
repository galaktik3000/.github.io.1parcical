function Footer() {
    return <footer className="page-footer indigo darken-4">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} 
                Copyright Text
                <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
                <p>Разработчик: Романцова Екатерина ТКБО-02-23</p>
            </div>
        </div>
  </footer>
}

export {Footer};