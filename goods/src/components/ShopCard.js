import Button from "./Button";

function ShopCard({card}){
    const getPrice=()=>{
        return '£'+card.price;
    };

    return(
        <div className="shop-card">
            <div className="title">
                {card.name}
            </div>
            <div className="desc">
                {card.color}
            </div>

            <div>
                <figure>
                    <img src={card.img} alt={card.name}/>
                </figure>
            </div>

            <div className="cta">
                <div className="price">{getPrice()}</div>
                <Button textBtn="Add to cart"/>
            </div>
        </div>
    )
}

export default ShopCard;