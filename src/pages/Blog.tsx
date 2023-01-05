import {useCallback, useContext, useEffect, useRef, useState} from "react";

import SideNavigation from "../components/SideNavigation";

import {GlobalContext} from "../context/global";
import {articles} from "../data";

const Blog = () => {
    const {theme} = useContext(GlobalContext)
    const ref = useRef<HTMLDivElement | null>(null)
    const [demo, setDemo] = useState<boolean>(false)
    const [active, setActive] = useState<string>("1")
    const [focus, setFocus] = useState<string>("1")


    const navMenu = useCallback((el: string) => {
        [...ref?.current?.children as any].forEach((ele) => {
            setActive(el)
            setDemo(true)
            if (ele.id === el) {
                window.scrollTo({
                    top: ele.offsetTop - 70,
                    behavior: "smooth"
                })
            }
        })
    },[setActive, setDemo])


    useEffect(() => {

        const timer = setTimeout(() => {
            setDemo(false)
        }, 600)
        if (!demo) {
            setActive(focus)
        }
        return () => {
            clearTimeout(timer)
        }
    }, [demo, focus, setActive, active])


    const option = {
        threshold: .3
    }


    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setFocus(entry.target.id)
        }
    }, option)


    useEffect(() => {
        [...ref.current?.children as any].forEach(el => {
            observer.observe(el)
        })
    }, [ref])
    return (
        <>
            <SideNavigation
                active={active}
                navMenu={navMenu}
            />
            <div ref={ref} className={`blog_container ${!theme ? "blog_container_theme" : null}`}>
                {articles.map((item, index) => (
                    <section key={`${item.id}_${index}`} id={item.id}>
                        <div dangerouslySetInnerHTML={{
                            __html: item.content
                        }} />
                    </section>
                ))}
            </div>
        </>
    );
};

export default Blog;