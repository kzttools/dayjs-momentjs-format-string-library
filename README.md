# dayjs-momentjs-format-string-library

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

saving commonly used iso8601 format string and pass in the semantic key to get the corresponding format.

## API

| Variable                  | Description                                                                    | FormatString |
| ------------------------- | ------------------------------------------------------------------------------ | ------------ |
| `formatDate`              | Date format                                                                    | `YYYY-MM-DD` |
| `formatTime24Hour`        | 24-hour time format                                                            | `HH:mm:ss`   |
| `formatTime`              | Same 24-hour time format                                                       | `HH:mm:ss`   |
| `formatTime12Hour`        | 12-hour time format                                                            | `hh:mm:ss A` |
| `formatDayOfWeekFull`     | Full day of the week format                                                    | `dddd`       |
| `formatDateWithSeparator` | Date format with separator: Year-Month-Day, separator specified as a parameter |              |

## reference

[wikipedia-ISO_8601](https://en.wikipedia.org/wiki/ISO_8601)
[dayjs format](https://day.js.org/docs/en/display/format)
[momentjs format](https://momentjs.com/docs/#/displaying/format/)

## License

[MIT](./LICENSE) License © 2024-PRESENT [KazooTTT](https://github.com/kazoottt)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@kzttools/dayjs-momentjs-format-string-library?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@kzttools/dayjs-momentjs-format-string-library
[npm-downloads-src]: https://img.shields.io/npm/dm/@kzttools/dayjs-momentjs-format-string-library?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@kzttools/dayjs-momentjs-format-string-library
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@kzttools/dayjs-momentjs-format-string-library?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@kzttools/dayjs-momentjs-format-string-library
[license-src]: https://img.shields.io/github/license/kzttools/dayjs-momentjs-format-string-library.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/kzttools/dayjs-momentjs-format-string-library/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/dayjs-momentjs-format-string-library
