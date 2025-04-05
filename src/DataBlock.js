import { useEffect, useState } from "react";
import { translate } from "./Translations";

export default function DataBlock({ data1, data2, data3, language }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        { text: data1, key: "1" },
        { text: data2, key: "2" },
        { text: data3, key: "3" }
    ];

    const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 640;

    useEffect(() => {
        if (!isSmallScreen) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isSmallScreen]);

    const renderItem = (item) => (
        <div key={item.key} className="sm:w-1/3 w-[100vw] h-full flex items-center justify-center gap-2">
            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#292D32" />
            </svg>
            <p>{translate(item.text, language)}</p>
        </div>
    );

    return (
        <div className="sm:w-full w-auto bg-lightblue6 flex items-center justify-center sm:h-16 h-7 p-8 overflow-x-clip">
            {isSmallScreen
                ? renderItem(items[currentIndex])
                : items.map(renderItem)}
        </div>
    );
}
