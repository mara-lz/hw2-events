import Button from "./Button";

function ShopItem({item}){
    const getPrice=()=>{
        return '£'+item.price;
    };

    return(
        <div className="shop-item">
            <div className="thumb">
                <figure>
                    <img src={item.img} alt={item.name}/>
                </figure>
            </div>

            <div className="title">
                {item.name}
            </div>
            <div className="desc">
                {item.color}
            </div>

            <div className="price">{getPrice()}</div>
            <Button textBtn="Add to cart"/>
        </div>
    )
}

export default ShopItem;