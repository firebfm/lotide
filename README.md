# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @firebfm/lotide`

**Require it:**

`const _ = require('@firebfm/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: return first item
* `countLetters(str)`: return a count of each letter
* `countOnly(allItems, itemsToCount)`: allItems: an array of strings that we need to look through, itemsToCount: an object specifying what to count
* `assertArraysEqual(arr1, arr2)`: assert if two arrs are equal
* `assertEqual(value1, value2)`: assert if 2 values are equal
* `assertObjectsEqual(obj1, obj2)`: assert if 2 objs are equal
* `eqArrays(arr1, arr2)`: check for equality between 2 arrays.
* `eqObjects(obj1, obj2)`: check that 2 objects are equal.
* `findKey(obj, callback)`: callback returns a truthy value, scan the object for the first key that matches
* `findKeyByValue(obj, value)`: returns the key of the value.
* `letterPositions(str)`: returns all the indices/position of each character in the string
* `map(arr, callback)`: apply the callback on the arr
* `middle(arr)`: returns the middle element of an array
* `tail(arr)`: returns the array except for the first element
* `takeUntil(arr, callback)`: returns an array until the callback stop condition
* `without(source, itemsToRemove)`: returns a new array based on filter
