# Coupon Code and Slug Generator

A simple TypeScript package for generating unique coupon codes and random slugs. This package provides two main functionalities: generating coupon codes with various options and creating random slugs from a predefined list of words.

## Installation

To install the package, run:

```bash
npm install slugmaster
```

## USE

```js
import { generateSlug } from 'slugmaster';
const slug = generateSlug({
  wordCount: 3
});
```

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

### For Coupon Code

- `length`: Length of the coupon code (default: 6)
- `type`: Character types (`alpha`, `alphanumeric`, `numeric`)
- `prefix`: Prefix for the coupon code (default: 'CP')
- `includeLowercase`: Include lowercase letters (default: false)
- `includeSymbols`: Include special characters (default: false)

### For Slug Generation

- `wordCount`: Number of words in the slug (default: 3)
- `randomStringLength`: Length of the random string to append (default: 0)

### Upcoming features
- Use external dataset for slugs (array of words)
- Convert a sentence to slug (with options)
