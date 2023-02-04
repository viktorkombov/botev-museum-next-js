import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        setTimeout(() => {
            document.documentElement.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant", // Optional if you want to skip the scrolling animation
            });
        }, 150)
    }, [pathname]);
}

export default useScrollToTop;