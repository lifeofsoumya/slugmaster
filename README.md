# Coupon Code and Slug Generator

A simple TypeScript package for generating unique coupon codes and random slugs. This package provides two main functionalities: generating coupon codes with various options and creating random slugs from a predefined list of words.

## Installation

To install the package, run:

```bash
npm install slugmaster
```

## Usage
### 1. Generate Slug from random set of Words (generateSlug)
```js
import { generateSlug } from 'slugmaster';
const slug = generateSlug({
  wordCount: 3
});
```

```js
const customWordSlug = generateSlug({
  wordCount: 4,                        
  wordSet: ["tech", "code", "learn", "build", "scale", "launch"], 
});
```

-------------------------------------
### 2. Generate slug from a sentence (slugify)
```js
import { slugify } from 'slugmaster';

const sentenceSlug = slugify("A blog title! to be converted to slug.");
// output: a-blog-title-to-be-converted-to-slug
```
## OR
```js
const sentenceSlug = slugify("A blog title! to be converted to SLUG.", {
  lowercase: false,            // if you opt to keep letters as it is (default: true)           
});
// output: A-blog-title-to-be-converted-to-SLUG
```
-------------------------------------
### 3. Generate Coupon codes
```js
import { generateCouponCode } from 'slugmaster';
const couponCode = generateCouponCode({
  length: 10,
  prefix: 'SAVE',
  type: 'alphanumeric',
  includeLowercase: true,
  includeSymbols: false
});
```

## Options


### For Slug Generation

- `wordCount`: Number of words in the slug (default: 3)
- `randomStringLength`: Length of the random string to append (default: 0)

### Custom Word Set Options (for generateSlug)
- `wordSet`: Array of custom words for slug generation
- `wordCount`: Number of words in the slug (default: 3)
- `randomStringLength`: Length of random string appended to slug (default: 0)

### Slugify Options
- `lowercase`: Convert text to lowercase (default: true)
- `trim`: Trim whitespace from the start and end of the text (default: true)
- `replaceSpaces`: Replace spaces with dashes (default: true)
- `removeNonWordChars`: Remove non-word characters (default: true)
- `replaceMultipleDashes`: Replace multiple dashes with a single dash (default: true)
- `trimDashes`: Trim dashes from the start and end of the text (default: true)

### For Coupon Code

- `length`: Length of the coupon code (default: 6)
- `type`: Character types (`alpha`, `alphanumeric`, `numeric`)
- `prefix`: Prefix for the coupon code (default: 'CP')
- `includeLowercase`: Include lowercase letters (default: false)
- `includeSymbols`: Include special characters (default: false)
