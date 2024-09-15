import ShopItem from "./ShopItem";

function ListView({items}) {
    return (
        <ul className="list">
            {items.map((item, idx) => {
                return (
                    <li key={"item" + idx}>
                        <ShopItem item={item}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default ListView;