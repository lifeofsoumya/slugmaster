// index.ts

type CouponCodeType = 'alpha' | 'alphanumeric' | 'numeric';

interface GenerateCouponCodeOptions {
    length?: number;
    type?: CouponCodeType;
    prefix?: string;
    includeLowercase?: boolean;
    includeSymbols?: boolean;
}

const generateCouponCode = (options: GenerateCouponCodeOptions = {}): string => {
    const {
        length = 6,
        type = 'alphanumeric',
        prefix = 'CP',
        includeLowercase = false,
        includeSymbols = false
    } = options;
    let chars = '';

    switch (type) {
        case 'alpha':
            chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (includeLowercase) {
                chars += 'abcdefghijklmnopqrstuvwxyz';
            }
            break;
        case 'numeric':
            chars = '1234567890';
            break;
        case 'alphanumeric':
        default:
            chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
            if (includeLowercase) {
                chars += 'abcdefghijklmnopqrstuvwxyz';
            }
            break;
    }

    if (includeSymbols) {
        chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }

    let couponCode = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        couponCode += chars.charAt(randomIndex);
    }

    return `${prefix}${couponCode}`;
};

const defaultWords = [
"it", "is", "to", "on", "at",
"sun", "sky", "mud", "run", "ant",
"slug", "rain", "tree", "bark", "leaf",
"cat", "dog", "bat", "rat", "hat",
"car", "bus", "van", "box", "bag",
"cup", "pen", "pad", "key", "map",
"fish", "bird", "frog", "deer", "bear",
"star", "moon", "wave", "rock", "sand",
"wind", "fire", "cold", "warm", "cool",
"blue", "red", "green", "gold", "gray",
"tall", "short", "wide", "thin", "fast",
"slow", "hard", "soft", "sweet", "sour",
"dark", "light", "high", "low", "deep",
"flat", "full", "empty", "rich", "poor",
"love", "hate", "play", "work", "rest",
"jump", "walk", "talk", "read", "write",
"sing", "dance", "cook", "bake", "wash",
"draw", "paint", "build", "make", "fix",
"find", "lose", "give", "take", "see",
"hear", "smell", "taste", "feel", "think",
"know", "want", "need", "have", "get",
"go", "come", "stay", "leave", "stop",
"start", "end", "turn", "move", "sit",
"stand", "lie", "hug", "kiss", "wave",
"call", "text", "mail", "post", "share",
"link", "code", "test", "play", "game",
"team", "goal", "win", "lose", "draw",
"race", "trip", "park", "fun", "play",
"show", "film", "book", "read", "page",
"line", "word", "text", "note", "list",
"item", "data", "file", "disk", "disk",
"link", "site", "web", "net", "app",
"chat", "talk", "call", "meet", "join",
"read", "view", "see", "look", "watch",
"play", "stop", "pause", "start", "end",
"next", "back", "here", "there", "some",
"many", "few", "all", "each", "one",
"two", "three", "four", "five", "six",
"seven", "eight", "nine", "ten", "top",
"high", "low", "left", "right", "near",
"far", "up", "down", "in", "out",
"on", "off", "over", "under", "between",
"among", "before", "after", "during", "since",
"until", "while", "for", "with", "about",
"like", "as", "but", "and", "or",
"if", "then", "when", "where", "why"
];

interface GenerateSlugOptions {
    wordCount?: number;
    randomStringLength?: number;
    wordSet?: string[];
}
const shuffleArray = <T>(array: T[]): T[] => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const generateSlug = ( options: GenerateSlugOptions = {} ): string => {
    const { wordCount = 3, randomStringLength = 0, wordSet = defaultWords } = options;
    const wordsToUse = wordSet.length > 0 ? wordSet : defaultWords;
    const shuffledWords = shuffleArray(wordsToUse).slice(0, wordCount);
    let slug = shuffledWords.join('-');

    if (randomStringLength > 0) {
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (let i = 0; i < randomStringLength; i++) {
            const randomIndex = Math.floor(Math.random() * randomChars.length);
            randomString += randomChars.charAt(randomIndex);
        }
        slug += `-${randomString}`;
    }

    return slug;
};
interface SlugifyOptions {
    lowercase?: boolean;
    trim?: boolean;
    replaceSpaces?: boolean;
    removeNonWordChars?: boolean;
    replaceMultipleDashes?: boolean;
    trimDashes?: boolean;
}

const slugify = (text: string, options: SlugifyOptions = {}): string => {
    const {
        lowercase = true,
        trim = true,
        replaceSpaces = true,
        removeNonWordChars = true,
        replaceMultipleDashes = true,
        trimDashes = true
    } = options;

    let slug = text.toString();

    if (lowercase) slug = slug.toLowerCase();
    if (trim) slug = slug.trim();
    if (replaceSpaces) slug = slug.replace(/\s+/g, '-'); // Replace spaces with -
    if (removeNonWordChars) slug = slug.replace(/[^\w\-]+/g, ''); // Remove all non-word chars
    if (replaceMultipleDashes) slug = slug.replace(/\-\-+/g, '-'); // Replace multiple - with single -
    if (trimDashes) {
        slug = slug.replace(/^-+/, ''); // Trim - from start of text
        slug = slug.replace(/-+$/, ''); // Trim - from end of text
    }

    return slug;
};

export { generateCouponCode, generateSlug, slugify };