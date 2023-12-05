import { useEffect, useRef, useId } from "react";
import "./imageCarousel.css";

export default function ImageCarousel(props: any) {

    const { carouselContents } = props;

    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(function setCarouselGridSizing() {
        if (sliderRef.current) {
            sliderRef.current.style.setProperty("--repeat-count", `${carouselContents?.length}`);
        }
    }, [carouselContents]);

    const id = useId()

    return (
        <div className="snap-slider" ref={sliderRef}>
            {
                carouselContents.map((item: any, index: number) => {
                    return (
                        <article key={`${id}_${index}`}>{item}</article>
                    );
                })
            }
        </div>
    );
}