import {useContext} from "react";

import styles from "../../styles/components/Header.module.scss"

import {GlobalContext} from "../../context/global";

import {menuItems} from "../../menuItems";

import MenuItems from "./MenuItems";
import HeaderRightSide from "./HeaderRightSide";

const Header = () => {
    const {theme} = useContext(GlobalContext)

    return (
        <header className={`${!theme ? styles.theme : null}`}>
            <div className={styles.left_box}>
                <p className={styles.logo}>
                    logo
                </p>
                <nav>
                    <ul >
                        {menuItems.map((item, index) => (
                            <MenuItems
                                key={`${item.title}_${index}`}
                                title={item.title}
                                dropdown={item.submenu}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
            <HeaderRightSide />
        </header>
    );
};

export default Header;