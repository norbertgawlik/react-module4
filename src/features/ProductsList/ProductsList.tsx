import { Product } from "../../types/Product";

type Props = {
    products : Product[]
}
export const ProductsList = ({products} : Props) => {
    return(
        <>
            <ul>
                {products.map((e,i)=>{
                    return(
                        <li key={i}>{e.fields.name}</li>
                    );
                })}
            </ul>
        </>
    );
};