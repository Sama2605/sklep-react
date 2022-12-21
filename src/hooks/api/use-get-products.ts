import {useEffect, useState} from "react";
import {Product} from "types";

interface IFetch <T> {
    data: T;
    loading: boolean;
}

const GET_PRODUCTS = "https://fakestoreapi.com/products";

const fetchData = async (url: string) => {
    try {
        const data = await fetch(url);
        return await data.json();
    } catch (error) {
        throw error;
    }
}

const useGetProducts = (): IFetch<Product[]> => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        try {
            const products = await fetchData(GET_PRODUCTS);
            await setProducts(products);
            await setLoading(false);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getProducts().then();
    }, []);

    return {data: products, loading};
}

export default useGetProducts;
