import IconSwitch from "./IconSwitch";
import {useState} from "react";
import CardsView from "./CardsView";
import ListView from "./ListView";

function Store() {
    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

    const styles = ["view_list", "view_module"];

    const [stylePage, setStylePage] = useState(styles[0]);
    const pressIcon = (name) => {
        let newName = styles[0];
        if (name === styles[0]) {
            newName = styles[1];
        }
        setStylePage(newName);
    };

    const getCards = () => {
        if (stylePage === styles[0]) {
            return (<CardsView cards={products}></CardsView>)
        } else if (stylePage === styles[1]) {
            return (<ListView items={products}></ListView>)
        }
    }

    return (
        <div>
            <div className="toolbar">
                <IconSwitch icon={stylePage} onSwitch={pressIcon}></IconSwitch>
            </div>
            <div>
                {getCards()}
            </div>
        </div>
    );
}

export default Store;