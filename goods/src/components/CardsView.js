import ShopCard from "./ShopCard";

function CardsView({cards}) {
    return (
        <div className="row">
            {cards.map((card, idx) => {
                return (
                    <ShopCard card={card} key={"card" + idx}/>
                )
            })
            }
        </div>
    )
}

export default CardsView;