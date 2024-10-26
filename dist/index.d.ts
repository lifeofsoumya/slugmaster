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
    wordSet?: string[];
}
declare const generateSlug: (options?: GenerateSlugOptions) => string;
interface SlugifyOptions {
    lowercase?: boolean;
    trim?: boolean;
    replaceSpaces?: boolean;
    removeNonWordChars?: boolean;
    replaceMultipleDashes?: boolean;
    trimDashes?: boolean;
}
declare const slugify: (text: string, options?: SlugifyOptions) => string;
export { generateCouponCode, generateSlug, slugify };
