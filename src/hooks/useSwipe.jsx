import { useState } from "react"


export default function useSwipe({ onSwipeLeft, onSwipeRight }) {

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50;

    if (!onSwipeLeft && !onSwipeRight) {
        return {}
    }

    const onTouchStart = (e) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return

        const distance = touchStart - touchEnd

        if (distance > minSwipeDistance) {
            onSwipeLeft();
        }

        if (distance < -minSwipeDistance) {
            onSwipeRight();
        }
    }

    return {
        onTouchStart,
        onTouchMove,
        onTouchEnd,
    }
}
