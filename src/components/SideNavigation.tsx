import {FC, useContext} from 'react';

import styles from "../styles/components/Aside.module.scss"
import {GlobalContext} from "../context/global";

interface Props {
    active: string
    navMenu: (item: string) => void
}
const SideNavigation:FC<Props> = ({active,navMenu}) => {
    const {theme} = useContext(GlobalContext)

    console.log("side")
    return (
        <section className={`${!theme ? styles.box_theme : null }`}>
            <div className={`${styles.box}`}>
                <figure>
                    <img src="https://avatars.githubusercontent.com/u/46695719?v=4" alt="img"/>
                </figure>
            </div>
            <aside className={styles.aside}>
                <nav>
                    <ul>
                        <li className={`${active === "1" ? styles.active : null}`}>
                            <p onClick={() =>  navMenu("1")}>
                                Introduction
                            </p>
                        </li>
                        <li className={`${active === "2" ? styles.active : null}`}>
                            <p onClick={() => navMenu("2")}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </li>
                        <li className={`${active === "3" ? styles.active : null}`}>
                            <p onClick={() => navMenu("3")}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, facilis!
                            </p>
                        </li>
                        <li className={`${active === "4" ? styles.active : null}`}>
                            <p onClick={() =>  navMenu("4")}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, exercitationem.
                            </p>
                        </li>
                        <li className={`${active === "5" ? styles.active : null}`}>
                            <p onClick={() =>  navMenu("5")}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, exercitationem.
                            </p>
                        </li>
                        <li className={`${active === "6" ? styles.active : null}`}>
                            <p onClick={() =>  navMenu("6")}>
                                Lorem ipsum dolor sit aelit. Earum, exercitationem.
                            </p>
                        </li>
                        <li className={`${active === "7" ? styles.active : null}`}>
                            <p onClick={() =>  navMenu("7")}>
                                Lorem ipsum dolor sit aelit.
                            </p>
                        </li>
                    </ul>
                </nav>
            </aside>
        </section>
    );
};

export default SideNavigation;