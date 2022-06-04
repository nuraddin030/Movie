import React, {useEffect, useState} from 'react';

function UseCallbackItemList({getItems}) {

    const [items, setItem] = useState([]);

    useEffect(() => {
        const newItem = getItems();
        setItem(newItem);
    }, [getItems])

    return (
        <ol>
            {items.map((i) => (
                <li key={i}>{i}</li>
            ))}
        </ol>
    );
}
export default UseCallbackItemList;