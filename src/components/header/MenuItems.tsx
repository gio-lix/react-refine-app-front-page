import {FC, memo, useState} from 'react';
import DropDown from "./DropDown";
import styles from "../../styles/components/MenuItem.module.scss"

interface Props {
    title: string
    dropdown: any
}

const MenuItems: FC<Props> = ({title, dropdown}) => {
    const [show, setShow] = useState<boolean>(false)


    return (
        <li className={`${styles.root} ${title.toLowerCase() === "blogs" ? styles.active : null}`}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <p className={`${dropdown?.length > 0 ? styles.title : null}`}>
                <span>
                    {title}
                </span>
                <i className={`material-icons ${show ? styles.rotate_icon : null}`}>
                  expand_more
                </i>
            </p>
            <div className={show ? styles.show :null}>
                {dropdown?.length > 0 && <DropDown submenu={dropdown}/>}
            </div>
        </li>
    );
};

export default memo(MenuItems);