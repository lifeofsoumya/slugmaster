type CouponCodeType = 'alpha' | 'alphanumeric' | 'numeric';
interface GenerateCouponCodeOptions {
    length?: number;
    type?: CouponCodeType;
    prefix?: string;
    includeLowercase?: boolean;
    includeSymbols?: boolean;
}
declare const generateCouponCode: (options?: GenerateCouponCodeOptions) => string;
interface GenerateSlugOptions {
    wordCount?: number;
    randomStringLength?: number;
}
declare const generateSlug: (options?: GenerateSlugOptions) => string;
export { generateCouponCode, generateSlug };
