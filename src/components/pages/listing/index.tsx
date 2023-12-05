// import { useState, useEffect } from "react";
import type { ProductEntity } from "../../../types";
import { useId } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductEntityComponent from "../../molecules/productEntity";

import "./listing.css";

const HEADERS = {
    'customerkey': 'c_l5c40c32',
    'hub_id': '5',
    'source': 'android',
    'app-version-name': '8.20.0',
    'kml_id': '6059ce401dae176bfff3359a',
    'Content-Type': 'application/json'
};

const PAGINATION_SIZE = 100;

export default function ListingPage() {

    const id = useId();
    // const [page, setPage] = useState(0)

    const fetchProducts = (page = 0) => fetch(`https://discovery-bff.qa.licious.app/api/v1/filter?include=layout&size=${PAGINATION_SIZE}&groupEnabled=true&cat_id=3&page=${page}&dataSource=D2`, {method: "POST", body: JSON.stringify({}), headers: HEADERS}).then((response) => response.json());

    const { data: listingAPIData } = useQuery({
        queryKey: ["listingdata"],
        queryFn: () => fetchProducts(),
        // placeholderData: keepPreviousData
    })

    // useEffect(function checkIfScrollHasReachedEnd() {
    //     const handler = () => {
    //         const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        
    //         if (window.scrollY >= scrollableHeight) {
    //             if (!isPlaceholderData && (((page + 1) * PAGINATION_SIZE) < listingAPIData?.data?.products?.totalCount)) {
    //                 setPage((prevValue) => prevValue + 1)
    //             }
    //         }
    //     }

    //     document.addEventListener('scroll', handler)

    //     return () => {
    //         document.removeEventListener('scroll', handler)
    //     }
    // }, [page, isPlaceholderData, listingAPIData]);

    return (
        <section className="product-list">
            {
                listingAPIData?.data?.products?.data?.map((item: ProductEntity) => {
                    return (
                        <ProductEntityComponent key={`${id}_${item.type}`} products={item.products} type={item.type} />
                    );
                })
            }
        </section>
    );
}