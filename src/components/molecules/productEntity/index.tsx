import type { Product, ProductEntity } from "../../../types";
import ListingCard from "../listingCard";

export default function ProductEntityComponent(props: ProductEntity) {

    const { type, products } = props;

    return type === "variant" ? (
        <article>
            {
                products.map((item: Product) => {
                    return (
                        <ListingCard {...item} key={item.merchandiseName} />
                    );
                })
            }
        </article>
    ) : <></>;
}