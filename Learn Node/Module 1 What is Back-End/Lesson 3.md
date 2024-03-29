# What Is JSON?

A brief guide to understanding JSON and its use cases.

## Introduction

In a world inundated with data, it is becoming more important to know how to work with a variety of data. As programmers, we need to be able to transfer our populated data structures from any language we choose to a format that is recognizable and readable by other languages and platforms. Fortunately for us, there exists such a data-exchange format.

## What is JSON?

JSON, or JavaScript Object Notation, is a popular, language-independent, standard format for storing and exchanging data. Adopted by ECMA International, an industry association founded in 1961 to standardize information and communication systems, JSON has become the de facto standard that facilitates storing and sending data between all programming languages.

## Common Uses of JSON

JSON is heavily used to facilitate data transfer in web applications between a client, such as a web browser, and a server. A typical example where such data transfer occurs is when you fill out a web form. The form data is converted from HTML to JavaScript objects to JSON objects and sent to a remote web server for processing. These transactions could be as simple as entering a search engine query to a multi-page job application.

When companies make their data public for other applications, like Spotify sharing its music library or Google sharing its map data, the information is formatted in JSON. This way, any application, regardless of language, can collect and parse the data.

Some of the popular web APIs that utilize JSON in data exchanges are:

Google Maps
Google Auth 2.0 Authentication
Facebook Social Graph API
Spotify Music Web API
LinkedIn Profile API

## JSON Syntax

Since JSON is derived from the JavaScript programming language, its appearance is similar to that of JavaScript objects.

A sample JSON object is represented as follows:

```
{
"student": {
"name": "Rumaisa Mahoney",
"age": 30,
"fullTime": true,
"languages": [ "JavaScript", "HTML", "CSS" ],
"GPA": 3.9,
"favoriteSubject": null
}
}
```

Note the following syntax rules for JSON:

The curly braces, {..}, hold objects.
The square brackets, [..], hold arrays.
Data is stored in name-value pairs separated by a colon, :.
Every name-value pair is separated from another pair by a comma, ,. Similarly, every item in an array is delimited by a comma as well. Trailing commas are forbidden.
JSON property names must be in double-quoted (" ") text even though JavaScript names do not hold by this stringency.

## JSON Data Types

A JSON data type must be one of the following:

string (double-quoted)
number (integer or floating point)
object (name-value pair)
array (comma-delimited)
boolean (true or false)
null
Try to find all the data types in this JSON example:

```
{
"student": {
"name": "Rumaisa Mahoney",
"age": 30,
"fullTime": true,
"languages": [ "JavaScript", "HTML", "CSS" ],
"GPA": 3.9,
"favoriteSubject": null
}
}
```

Notably, JSON doesn’t cover every data type. Types that are not represented in JSON such as dates can be stored as a string and converted to a language-specific data structure. Here’s an acceptable internationally-recognized date format in ISO 8601:

```
"2014-01-01T23:28:56.782Z"
```

This above format contains parts which resemble a date and time. However, as a string, it is hard for a programming language to use as is. Conveniently, every programming language has built-in JSON facilities to convert this string into a more readable and usable format, such as:

```
Wed Jan 01 2014 13:28:56 GMT-1000 (Hawaiian Standard Time)
```

This pretty much covers the basic description of JSON, its popularity, and its syntax. Congratulations on reaching this milestone!
