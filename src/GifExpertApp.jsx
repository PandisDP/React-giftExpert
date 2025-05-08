import { useState } from "react";
import { AddCategory , GifGrid} from "./components";

export const GifExpertApp = () => {
    //Hooks
    const [categories, setCategories] = useState([]);
    //Functions
    const onAddCategory = (categ) => {
        if (categories.includes(categ)) return; // Evitar agregar categorías duplicadas
        setCategories(cat => [categ , ...cat]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory  onNewCategory={(value)=>onAddCategory(value)}/>
            {categories.map(category => (
                <GifGrid 
                    key={category} 
                    category={category}/>
            ))}
        
        </>
    );
}