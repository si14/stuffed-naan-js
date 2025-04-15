![license: MIT/](https://img.shields.io/badge/license-MIT-blue.svg)

# Stuffed-Na(a)N

![A photo of a garlic naan](https://private-user-images.githubusercontent.com/316910/433589102-d4382a30-4f1e-42e4-bb83-957480ad4bcb.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NzI4ODEsIm5iZiI6MTc0NDY3MjU4MSwicGF0aCI6Ii8zMTY5MTAvNDMzNTg5MTAyLWQ0MzgyYTMwLTRmMWUtNDJlNC1iYjgzLTk1NzQ4MGFkNGJjYi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMzE2MjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01N2EwMWQzMzkwNWEwNTVmMDQ1OGFlOGI5OWMzYTNlNjZjYjc3NWExMjkzMGVjNDdhYjBlOTg4NDQ3OTI1YmRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.4BwyJ9nKqVSFUaJu-hwmxWeJLxhpV3qkyiRRb5YgUiE)

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

Starting today, you can finally make `NaN`s useful. 
Just stuff ~~`NaN`~~ `Na(a)N`s with your data! 

```js
import { encode, decode } from 'stuffed-naan';

const encoded = encode("Hello world");
console.log(encoded);
// Output: [NaN, NaN, NaN]

console.log(decode(encoded));
// Output: Hello world
```

To quote Sun Tzu, "if you can't fight the enemy, use the enemy's advantage to your advantage".
`Na(a)N`s preserve data when you run mathematical operations on them:

```js
import { encode, decode } from 'stuffed-naan';

const encoded = encode("Hello world");
console.log(decode(encoded.map(x => x * 2)));
// Output: Hello world
```

## Advantages

### Efficiency

`stuffed-naan` is efficient. Community Edition achieves a compression ratio of -25%.
For every 1024 bytes of data, you get 1368 bytes of float64 `Na(a)N`s back!
This is an industry-leading `Na(a)N` compression, and it gets even better with a 
[commercial version](https://github.com/si14/stuffed-naan-js?tab=readme-ov-file#commercial-licencing).

### Performance

`stuffed-naan` is performant. Thanks to advanced byte-manipilation capabilities available in
ECMAScript® 2026, the overhead of 

## Installation

```bash
npm install stuffed-naan
```

Alternatively, you can include `stuffed-naan` on your page:

`<script src="https://unpkg.com/stuffed-naan@1.0.0/dist/index.js"></script>`


## Why?

Yes.


## Commercial licencing

Commercial licence:

- ✅ 6% more efficient encoding
- ✅ Supports big-endian processors, such as IBM zSeries
- ✅ Enables further development and support of `stuffed-naan`

Please contact sales at [stuffed-naan-sales@dgroshev.com](mailto:stuffed-naan-sales@dgroshev.com) for a quote.


## Roadmap

- [ ] Public benchmarks
- [ ] Rust version
- [ ] Formal verification


## No but seriously

IEEE 754 [defines](https://en.wikipedia.org/wiki/NaN#Encoding) NaN to be represented by a floating number
with all exponent bits set to 1 and at least one non-zero exponent bit. The value of the exponent can be anything!
The IEEE won't object if we do crimes and smuggle our own bytes there.

It's silly but it works.

And then I couldn't resist overdoing the naan pun. Support your local curry house!