<h1 align="center"> Simple Numerology API</h1> <br>
<p align="center">
  <a href="https://gitpoint.co/">
    <img alt="SimpleNumerology" title="SimpleNumerology" src="images/Num-Transparent.png" width="250">
  </a>
</p>

<p align="center">
  Backend API for Simple Numerology app.
</p>

[![Build Status](https://travis-ci.org/matrayu/numerology-app.svg?branch=master)](https://travis-ci.org/matrayu/numerology-app)


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Introduction](#introduction)
- [Links](#links)
- [API Docs](#api-docs)
- [App Screenshots](#app-screenshots)
- [Feedback](#feedback)
- [Build Process](#build-process)
- [Scripts](#scripts)
- [Technology](#technology)
<hr>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

Numerology is part of an occult field with its origins dating back many centuries. The findings of the original numerologists have been checked and refined in the field countless times, confirming over a period of thousands of years the vital correlations between people's traits and the numbers which numerologists assign to these traits. The Simple Numerology App allows users to quickly obtain their numbers which are generated based on their given name at birth and their birthdate.
<hr>

## Links

#### Live App: https://simple-numerology-app.now.sh/

Client Github Repo: https://github.com/matrayu/numerology-client
Server Github Repo: https://github.com/matrayu/numerology-app
<hr>

## API Docs

The RESTful API serves 4 endpoints:

* A POST request to api/auth/login to validate user and log them in
* A POST request to api/auth/refresh to refresh JWT 
* A GET request to api/auth/user to retreive the users numerology numbers 
* A POST request to api/users/register to send info to database and register user
<hr>

## App Screenshots

<p align="center" >
  <img src = "images/screen6-200.png" width=200 border="5px solid black">
  <img src = "images/screen4-200.png" width=200 border="5px solid black">
  <img src = "images/screen3-200.png" width=200 border="5px solid black">
  <img src = "images/screen5-200.png" width=200 border="5px solid black">
  <img src = "images/screen1-200.png" width=200 border="5px solid black">
  <img src = "images/screen7-200.png" width=200 border="5px solid black">
</p>
<hr>

## Feedback

Feel free to send us feedback or [file an issue](https://github.com/matrayu/numerology-app/issues/new). Feature requests are always welcome. 
<hr>

## Build Process

- Clone or download the repo
- `npm install` to install dependencies
- `npm start` to start the server and client

Then visit http://localhost:8000
<hr>

## Scripts

- `npm run dev` to start nodemon
- `npm t` to run tests
- `ndb start` to run debugging experience
<hr>

## Technology

- Node
- Express
- Knex
- Chai
- Mocha
- Supertest
- Cors
- Bcryptjs
- Helmet
