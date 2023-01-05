import styles from "../../styles/components/HeaderRigthSide.module.scss"
import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../../context/global";
import Modal from "../global/Modal";
const HeaderRightSide = () => {
    const {changeTheme, theme, openModal} = useContext(GlobalContext)
    const [dark, setDark] = useState<boolean>(false)


    const handleDark = () => {
        setDark(!dark)
        changeTheme()
    }
    const handleShow = () => {
        openModal()
    }


    useEffect(() => {
        const handleKey = (e: any) => {
            e.preventDefault();
            if ((e.metaKey || e.ctrlKey) && e.code === 'KeyC') {
                openModal()
            }
        }

        document.addEventListener("keydown", handleKey)
        return () => document.removeEventListener("keydown", handleKey)
    },[openModal])



    return (
        <div className={`${styles.root} ${!theme ? styles.right_side_theme : null}`}>
            <div onClick={handleShow} className={styles.search}>
                <i className="material-icons">
                    search
                </i>
                <span>
                    Search
                </span>
                <span >
                    Ctrl + c
                </span>
            </div>
            <Modal height={200} width={500}>
                <div className={styles.modal_styles}>
                    <input
                        type="text"
                        autoFocus
                        placeholder="Search Docs"
                    />
                    <div className={styles.result}>
                        <p>No Result</p>
                    </div>
                </div>
            </Modal>
            <label htmlFor="dark">
                <span className={styles.action}>
                    <input id="dark" type="checkbox"/>
                    <i onClick={handleDark} className={`${dark ? styles.active_dark : null}`}>
                        <span className="material-icons">
                             wb_sunny
                        </span>
                        <span  className="material-icons">
                            nightlight
                        </span>
                    </i>
                </span>
            </label>
            <p>lorem</p>
        </div>
    );
};

export default HeaderRightSide;