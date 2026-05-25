import { useEffect, useState } from "react";


export default function useVisibleCards() {

    const [visibleCards, setVisibleCards] = useState(3)

    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) setVisibleCards(1);        //para mobile
            else if (window.innerWidth < 1024) setVisibleCards(2);  //tablet
            else setVisibleCards(3)                                 //desktop
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update)
    }, [])

    return visibleCards;
}

