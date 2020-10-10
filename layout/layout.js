const { default: Navigation } = require("../components/navigation");

function Layout({children}){
    return <div>
        <Navigation/>
        {children}

        <footer>
            <br/>
            by muzeyr
        </footer>
    </div>

}
export default Layout