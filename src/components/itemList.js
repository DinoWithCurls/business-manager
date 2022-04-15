import React from 'react'
import ItemCard from './itemCard'
const ItemList = ({items, loading}) => {
    if(loading){
        return <h2>Loading ...</h2>
    }
    return (
        <div>
            {items.map((item) => (
                <div key={item.id} className="mb-2">
                  <ItemCard item={item} key={item.id} />
                </div>
              ))}
        </div>
    )
}

export default ItemList;