import { useEffect, useState, useContext } from "react";

import { getCategories, getTables } from "./partials/servicePanelUtils";
import { ServiceMenu } from "./ServiceMenu";
import { itemsContext } from "./ServicePanel";
export const OrderPanel = () => {
let [tables, setTables] = useState(null);

let { tableId, setTableId, order,categories,setCategories,setCategory,menuOpc} = useContext(itemsContext);



useEffect(() => {
    async function setTablesFn() {
        let tempTables = await getTables();
        setTables(tempTables);
    }

async function setCategoriesFn() {
    let tempCategories = await getCategories();
    setCategories(tempCategories);
    
}

    setTablesFn();
    setCategoriesFn();
    }, []);



const setOrderTable = (event) => {
    setTableId(event.target.value);
};

const handleCategory = (event) =>{
    if(event.target.value ==="All"){
        setCategory(null)
    }
    else setCategory(event.target.value);

}



return (
    <>
    <ServiceMenu/>

    <form className="selectTable">

        <select type="select" onChange={setOrderTable}>
            {tables != null
            ? tables.map((table) => (
                <option key={table.id} value={table.id}>
                    {table.id}
                </option>
                ))
            : null}
        </select>
        {menuOpc == "menu" ? 
        <select className="selectCategory" onChange={handleCategory}>
            <option value={"All"}>All</ option>
            {categories?
                categories.map((category,index)=>(
                <option key={index} value={category}>{category}</option >
                ))
            :null}
            
        </select>
        : null }
    </form>
    </>
);

};
