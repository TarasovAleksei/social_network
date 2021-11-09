import React, {useState} from 'react';
import classes from "./Users.module.css";

type PropsType = {
    pageSize: number,
    totalItemCount: number,
    currentPage: number,
    portionSize: number,
    onPageChanged: (pageNumber: number) => void,
}
export const Paginator = ({pageSize, totalItemCount, currentPage, onPageChanged, portionSize}: PropsType) => {
    const pagesCount = Math.ceil(totalItemCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    return (
        <div>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
                // onPageChanged(1)
            }}> prev </button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <span key={p} onClick={() => {
                    onPageChanged(p)
                }} className={currentPage === p ? classes.selectedPage : classes.unSelectedPage}>{p}</span>)}
            {portionCount > portionNumber && <button onClick={() => {
                setPortionNumber(portionNumber + 1)
                // onPageChanged(200)
            }}> next </button>}
        </div>
    );
};
