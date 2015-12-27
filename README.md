# underscore-methods-usage-statistics

![](https://img.shields.io/npm/v/underscore-methods-usage-statistics.svg)
![](https://img.shields.io/npm/dt/underscore-methods-usage-statistics.svg)
![](https://img.shields.io/npm/l/underscore-methods-usage-statistics.svg)

> Display statistics of Underscore.js methods.

All idea is to grep files with simple regular expression to find all instances of any underscore method called.
Display simple report after process completed.

## Install

```
npm install -g underscore-methods-usage-statistics
```

## Setup

```
underscore-methods-usage-statistics ~/projects/simple-project/
```

Example output:

```
Report: Underscore.js methods usage statistics:
 - 25 assert
 - 8 extend
 - 8 isObject
 - 7 isEmpty
 - 7 defaults
 - 7 findWhere
 - 6 isFunction
 - 4 isBoolean
 - 3 reject
 - 3 sortBy
 - 3 find
 - 3 has
 - 3 size
 - 3 result
 - 3 bindAll
 - 3 isString
 - 2 every
 - 1 unique
 - 1 pluck
 - 1 isArray
 - 1 isUndefined
 - 1 contains
 - 1 each
 - 1 isNull
 
Analyze 123 files.
```

## Test

```
npm test
```

## License

[The MIT License](http://piecioshka.mit-license.org)
