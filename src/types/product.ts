export type Media = {
    images: string[]
    prImage: string
}

export type Descriptors = {
    description: string
    productShortname: string
    uspDescription: string
}

export type Quantity = {
    netWeight: string
    pieces: string
    serves: string
    unit: string
    uom: string
}

export type Product = {
    baseDiscount: number
    basePrice: number
    deliveryType: string
    discountPercentage: number
    discountedPrice: number
    hasAddOns: boolean
    isCombo: 0 | 1
    media: Media
    merchandiseName: string
    nextAvailableBy: string
    productDescriptors: Descriptors
    slug: string
    variantId: string
    weightAndPieces: Quantity
}

export type ProductEntity = {
    products: Product[]
    type: "variant" | "rm"
}