import type { Media, Product } from "../../../types";
import "./listingCard.css"

//Component Imports
import ImageCarousel from "../imageCarousel";

//Assets
import PlusIcon from "../../../assets/Subtract.svg";
import ExpIcon from "../../../assets/Expressdelivery.svg"

export default function ListingCard(props: Product) {

    return (
        <article className="card-container">
            <div style={{width: "100%"}}>
                <ImageCarousel carouselContents={getCarouselContents(props.media)} />
            </div>
            <div className="card-content">
                <div className="title-desc">
                    <span className="title">{props.merchandiseName}</span>
                    <span className="desc">{props.productDescriptors.uspDescription}</span>
                </div>
                <div className="quantity">
                    <span className="weight">{`${props.weightAndPieces.netWeight} ${props.weightAndPieces.uom?.includes("Pieces") ? props.weightAndPieces.uom : props.weightAndPieces.unit}`}</span>
                    <div className="serving-info">
                        <span>{props.weightAndPieces.pieces && `| ${props.weightAndPieces.pieces} pieces `}</span>
                        <span>{props.weightAndPieces.serves && `| Serves ${props.weightAndPieces.serves}`}</span>
                    </div>
                </div>
                <div className="pricing">
                    <span className="display-price">&#8377;{props.discountedPrice}</span> 
                    {props.basePrice !== props.discountedPrice ? getPriceString(props.basePrice, props.discountPercentage) : ''}
                </div>
                <div className="delivery-atc">
                    <div className="slot-info">
                        {props.deliveryType === "EXPRESS" && <img src={ExpIcon} /> }
                        <span className="slot">{props.nextAvailableBy}</span>
                    </div>
                    <button>
                        ADD
                        <img src={PlusIcon} />
                    </button>
                </div>
            </div>
        </article>
    );
}

function getPriceString(basePrice: number, discountPercentage: number) {
    return (
        <div className="discounts">
            <span className="strike-price">&#8377;{basePrice}</span>
            <span className="discount-percent">{`${discountPercentage}% OFF`}</span>
        </div>
    );
}

function getCarouselContents(media: Media) {
    return [
        <img src={media.prImage} style={{borderTopLeftRadius: "12px", borderTopRightRadius: "12px", aspectRatio: "328 / 220"}} />, 
        ...media?.images?.map((item: string) => <img key={item} src={item} />)
    ];
}