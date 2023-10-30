import "./styles.css";

import { BsShop } from "react-icons/bs"
import {BiSolidUpArrowAlt} from "react-icons/bi"

import {GiIndiaGate} from "react-icons/gi"
function Navbarjs() {
  return (
    <nav class="menu" id="menu">
      <input class="menu-toggler" type="checkbox" />
      <label for="menu-toggler"></label>

      <ul
        style={{
          transition: "all 300ms linear",
        }}
      >
        <li class="menu-item">
          <a class="" href="/india"><GiIndiaGate/></a>
        </li>
        <li class="menu-item">
          <a lass="fa-solid fa-shop" href="/trade"><BsShop /></a>
        </li>
        <li class="menu-item">
          <a class="flex items-center" href="/india">  </a>
        </li>
        <li class="menu-item">
          <a class="" href="#top-section"><BiSolidUpArrowAlt /></a>
        </li> 
        <li class="menu-item">
          <a class="fa fa-phone" href="#my-footer"></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbarjs;
