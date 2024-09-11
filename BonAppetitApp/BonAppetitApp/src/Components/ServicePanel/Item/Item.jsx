import react, { useEffect, useState } from "react"


import { ItemCounter } from "./ItemCounter";
import { setItemsAmount } from "./utils";
import dropItem from '../../../assets/dropitem.svg'


export const Item = ({ item,category,order ,index}) => {

    const itemId = item.id;
    let [selection, setSelection] = react.useState(false);
    let [counter, setCounter] = react.useState(0);
    let [visibility, setVisibility] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setVisibility(true);
        }, index*2000);

    },[index])




    useEffect(()=>{
        console.log(`la orden ${order}`);
        if(order.length>0 || category !=null){
            let tempAmount = setItemsAmount(order,itemId);
            
            setCounter(tempAmount);
        }
    },[category])



    useEffect(()=>{
        if(counter == 0){
            setSelection(false); 
        }
        else{setSelection(true)}
    },[counter])
    

    return (
        item?
            <div className={`itemContainer ${(selection && counter>0 )? 'activeItem' :''}  ${visibility?'isVisibleItem':""} `}  onClick={()=>{selection ? null :  setSelection(true) }}>
                <img className="itemImage" src={item.image_url} /><br />
                <span>{item.name}</span><br />
                <span>${item.price}</span><br />
                <span className={`category ${item.category}`}>{item.category}</span><br />
                {selection ?
                    < ItemCounter  itemPrice = {item.price} itemName={item.name} counter = {counter} setCounter = {setCounter} itemId = {itemId} />
                : null} 
                {(selection && counter>0)? <img className="dropItemImg" src={dropItem} onClick={()=>{setCounter(0)}} /> : null}


            </div>
        :null
        )

} 