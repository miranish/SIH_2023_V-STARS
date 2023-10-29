import "./styles.css"
function Navbarjs() {
    return(
        <nav class="menu" id="menu">
        <input class="menu-toggler" type="checkbox"/>
        <label for="menu-toggler"></label>
        
        <ul 
        style={{
            transition: "all 300ms linear",
        }}
       
        >
            <li class="menu-item">
                <a class="fa fa-home" href="#"></a>
            </li>
            <li class="menu-item">
                <a class="fa fa-address-book" href="#"></a>
            </li>
            <li class="menu-item">
                <a class="fa fa-window-restore" href="#"></a>
            </li>
            <li class="menu-item">
                <a class="fa fa-phone" href="#"></a>
            </li>
            <li class="menu-item">
                <a class="fa fa-sign-out" href="#"></a>
            </li>
        </ul>
    </nav>
    )
}

export default Navbarjs