import { useState } from "react";

export function TableLetter ({letter, index}) {
    const [flip, setFlip] = useState(false)

    setTimeout(() => {
        setFlip(true)
    }, 100 * index );
  return (
    <div className={flip ? "flip" : null}>
            { flip ? letter : null}
    </div>
  )
}