import {FC} from 'react';
import styles from "../../styles/components/Submenu.module.scss"

import {SubmenuType} from "../../types/typing";

interface Props {
    submenu: SubmenuType[]
}

const DropDown: FC<Props> = ({submenu}) => {

    return (
        <article className={`${styles.root} ${submenu.length > 3 ? styles.root_grid : styles.root_flex}`}>
            <div >
                {submenu.map((el, index) => {
                    if (Object.keys(el).includes("info")) {
                        return  (
                            <div className={styles.info} key={index}>
                               <span>{el.info.text}</span>
                               <p>
                                   {el.info.icons.map(icon => (
                                       <img key={icon.id} src={icon.Icon} alt={"icon"}/>
                                   ))}
                               </p>
                            </div>
                        )
                    }
                    return (
                        <div
                            key={index}
                            className={`${styles.nav_link}  ${(el.title) ? styles.nav_link_active : null}`}
                        >
                            <p>
                                <img src={el.Icon} alt={"icon"}/>
                                <span>{el.title}</span>
                            </p>
                            <span className={styles.desc}>
                                {el.description}
                            </span>
                        </div>
                    )
                })}
            </div>
            <figure>
                <img src={submenu[submenu.length - 1]?.img_url} alt={"cover icon"}/>
            </figure>
        </article>
    );
};

export default DropDown;