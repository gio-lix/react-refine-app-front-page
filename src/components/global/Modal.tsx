import styles from "../../styles/components/Modal.module.scss"
import {FC,  ReactNode, useContext} from "react";
import {GlobalContext} from "../../context/global";

interface Props {
    children?: ReactNode
    width?: number
    height?: number
}
const Modal:FC<Props> = ({children,width,height}) => {
    const {openModal,modal} = useContext(GlobalContext)

    const handle = () => {
        openModal()
    }

    return (
        <section className={`${styles.root} ${modal ? styles.active : null}`}>
            <div onClick={handle} className={styles.overlay} />
            <div  style={{
                width: `${width}px`,
                height: `${height}px`
            }}  className={styles.children}>
                {children}
            </div>
        </section>
    );
};

export default Modal;