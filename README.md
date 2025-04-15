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

To quote Sun Tzu, "if you can't beat the enemy, use the enemy's advantage to your advantage".
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
That means for every 1024 bytes of data, you get 1368 bytes of float64 `Na(a)N`s back!
This is an industry-beating `Na(a)N` compression. For even better compression, consider the 
[Enterprise Edition](https://github.com/si14/stuffed-naan-js?tab=readme-ov-file#enterprise-edition-).

### Blazing fast 🚀

`stuffed-naan` is blazing fast. Thanks to advanced byte-manipulation capabilities available in ECMAScript® 2026, 
the overhead of stuffing is minimal. `Na(a)N`ification of a thousand small objects takes 1–3ms.

### Privacy-first 🚫👀

`stuffed-naan` is privacy-first, first of its kind privacy-preserving encoding. An array of `Na(a)N`s 
can't be copypasted without losing the information, which makes `stuffed-naan` indispensable to protect your
customers' PII. Contact [`stuffed-naan` DPO](mailto:stuffed-naan-dpo@dgroshev.com) to know more.

## Installation

```bash
npm install stuffed-naan
```

Alternatively, you can include `stuffed-naan` on your page:

`<script src="https://unpkg.com/stuffed-naan@1.0.0/dist/index.js"></script>`


## Enterprise Edition 🏦

Enterprise Edition includes:

- ✅ 6% more efficient encoding
- ✅ Support for big-endian processors, such as IBM zSeries
- ✅ A dedicated Customer Success Manager

[Contact sales](mailto:stuffed-naan-sales@dgroshev.com) for pricing.


## Roadmap

- [ ] Public benchmark history
- [ ] Fuzzing
- [ ] Rewrite in Rust
- [ ] Formal verification with Kani


## No but seriously

IEEE 754 [defines](https://en.wikipedia.org/wiki/NaN#Encoding) NaN to be represented by a floating number
with all exponent bits set to 1 and at least one non-zero mantissa bit. The value of the exponent can be anything!
The IEEE won't object if we do crimes and smuggle our own data there.

It's silly but it works.

And then I couldn't resist overdoing the naan pun. Support your local curry house!