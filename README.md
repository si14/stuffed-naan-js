![license: MIT/](https://img.shields.io/badge/license-MIT-blue.svg) ![NPM Version](https://img.shields.io/npm/v/stuffed-naan)


# Stuffed-Na(a)N: stuff your `NaN`s

![A photo of a garlic naan](naan.jpg)

_[Joy via Wikimedia](https://commons.wikimedia.org/wiki/File:Garlic_naan_1.jpg)_

Have you ever done this by mistake?

```js
console.log(0 / 0)
// Output: NaN
```

Or maybe this?

```js
console.log(Math.asin(2))
// Output: NaN
```

Have you been annoyed by `NaN` propagation?

```js
const a = NaN
console.log((a * 2) - 5)
// Output: NaN
```

With `stuffed-naan`, you can finally make use of `NaN`s. Just stuff ~~`NaN`~~ `Na(a)N`s with your data! 

```js
import { encode, decode } from 'stuffed-naan';

const encoded = encode("Hello world");
console.log(encoded);
// Output: [NaN, NaN, NaN]

console.log(decode(encoded));
// Output: Hello world
```

To quote Sun Tzu, "If you can't beat the enemy, use the enemy's advantage to your advantage".
`Na(a)N`s preserve data even when used in mathematical operations:

```js
import { encode, decode } from 'stuffed-naan';

const encoded = encode("Hello world");
console.log(decode(encoded.map(x => x * 2)));
// Output: Hello world
```

## Why `stuffed-naan`

### Compact 💿

`stuffed-naan` is compact. Community Edition achieves a compression ratio of -25%.
That means, for every 1024 bytes of data, you get 1368 bytes of float64 `Na(a)N`s back!
This is an industry-beating level of `Na(a)N` compression. For even better compression, consider the 
[Enterprise Edition](https://github.com/si14/stuffed-naan-js?tab=readme-ov-file#enterprise-edition-).

### Blazing fast 🚀

`stuffed-naan` is blazing fast. Thanks to advanced byte-manipulation capabilities available in ECMAScript® 2026, 
the overhead of stuffing is minimal. `Na(a)N`ification of a thousand small objects takes 1–3ms.

### Privacy-first 🚫👀

`stuffed-naan` is privacy-first. It's a first-of-its-kind privacy-preserving encoding, since an array of `Na(a)N`s 
can't be copypasted without losing the information. This makes `stuffed-naan` indispensable to protect your
customers' PII. Contact [`stuffed-naan` DPO](mailto:stuffed-naan-dpo@dgroshev.com) to learn more.

## Installation

```bash
npm install stuffed-naan
```

Or you can do this in your browser console:

```js
const stuffedNaan = await import('https://unpkg.com/stuffed-naan');
stuffedNaan.encode("hello world");
```


## Enterprise Edition 🏦

Enterprise Edition includes:

- ✅ 6% more efficient encoding
- ✅ Support for big-endian processors, such as IBM zSeries
- ✅ A dedicated Customer Success Manager

[Contact sales](mailto:stuffed-naan-sales@dgroshev.com) for pricing.


## Roadmap

- ⚠️ Public benchmark history
- ⚠️ Fuzzing
- ⚠️ Rewrite in Rust
- ⚠️ Formal verification with Kani


## Testimonials

> Seems really weird to me. I would have dismissed it as someone's hobby project, but... 
> that doesn't seem like what it's trying to be.

> The applications might be real :D


## No but seriously

JS numbers are IEEE 754 floating point numbers, 64-bit long. They consist of a sign bit, an exponent, and a mantissa.

Here's how it all looks like in memory:

![Memory layout of a float64 from Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/IEEE_754_Double_Floating_Point_Format.svg/1024px-IEEE_754_Double_Floating_Point_Format.svg.png)

When mathematical operations on floats are applied incorrectly (for example, `0/0`), the result is a special value
called Not a Number, or NaN for short. NaNs are represented as floating point numbers with the exponent set to all 1s
and at least one non-zero bit in the fraction part.

Which means I can commit crimes and smuggle data in the fraction part. IEEE is *not* going to stop me!

This trick is silly, but it works. Naturally, I couldn't resist overdoing the naan pun.

Support your local curry house! (Or, better yet, [Come Back Alive](https://savelife.in.ua/en/))

[Bluesky](https://bsky.app/profile/dangroshev.com) / [Twitter](https://x.com/dangroshev) / [Web](https://dgroshev.com)