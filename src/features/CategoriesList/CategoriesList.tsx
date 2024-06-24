import { Category } from "../../types/Category";

type Props = {
    categories : Category[]
}
export const CategoriesList = ({categories} : Props) => {
    return(
        <>
            <ul>
                {categories.map((e,i)=>{
                    return(
                        <li key={i}>{e.fields.name}</li>
                    );
                })}
            </ul>
        </>
    );
};