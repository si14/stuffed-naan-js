[![license: MIT/Apache-2.0](https://img.shields.io/badge/license-MIT%2FApache--2.0-blue.svg)]

# Stuffed-Na(a)N

![A photo of a garlic naan](https://private-user-images.githubusercontent.com/316910/433589102-d4382a30-4f1e-42e4-bb83-957480ad4bcb.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NzI4ODEsIm5iZiI6MTc0NDY3MjU4MSwicGF0aCI6Ii8zMTY5MTAvNDMzNTg5MTAyLWQ0MzgyYTMwLTRmMWUtNDJlNC1iYjgzLTk1NzQ4MGFkNGJjYi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMzE2MjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01N2EwMWQzMzkwNWEwNTVmMDQ1OGFlOGI5OWMzYTNlNjZjYjc3NWExMjkzMGVjNDdhYjBlOTg4NDQ3OTI1YmRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.4BwyJ9nKqVSFUaJu-hwmxWeJLxhpV3qkyiRRb5YgUiE)

_[Joy via Wikimedia](https://commons.wikimedia.org/wiki/File:Garlic_naan_1.jpg)_

Put your important data inside ~~`NaN`s~~ `Na(a)N`s :

```js
import { encode, decode } from 'stuffed-naan';

const encoded = encode("Hello world");
console.log(encoded);
// Output: [NaN, NaN, NaN]

console.log(decode(encoded));
// Output: Hello world

// Mathematical operations on stuffed Na(a)Ns are non-destructive

console.log(decode(encoded.map(x => x * 2)));
// Output: Hello world
```


## Installation

```bash
npm install stuffed-naan
```


## Why?

Yes.


## Commercial licencing

Commercial licence:

- 6% more efficient encoding
- Supports big-endian processors, such as IBM zSeries
- Enables further development and support of `stuffed-naan`

Please contact sales at [stuffed-naan-sales@dgroshev.com](mailto:stuffed-naan-sales@dgroshev.com) for a quote.


## No but seriously

IEEE 754 [defines](https://en.wikipedia.org/wiki/NaN#Encoding) NaN to be represented by a floating number
with all exponent bits set to 1 and at least one non-zero exponent bit. The value of the exponent can be anything!
The IEEE won't object if we do crimes and smuggle entire bytes there.

And then I couldn't resist overdoing the naan pun. Support your local curry house!