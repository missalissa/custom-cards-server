# Custom Cards (Server)

**Author**: Sarah Joy Calpo

**Version**: 1.0.0

## Overview
REST API for [https://acl-custom-cards.github.io/custom-cards-client/](https://acl-custom-cards.github.io/custom-cards-client/)

Allows client to CRUD card data from a PostgreSQL database.

This repo is the back end. Front end code can be found [here](https://github.com/acl-custom-cards/custom-cards-client).

## Getting Started
- To contribute, first `fork` and `clone` this repo.
- Do any work on a feature branch, such as `custom-colors`.
- Submit your work via a PR to our `dev` branch.

## Local Dev Environment Set Up
- After cloning down your fork, set up your local dev environment variables. Copy the keys in `.env.template` and fill it in with your own values. (If you don't have a Google API Key for (G_API_KEY), contact us and we can provide you with one.)
    - We recommend creating a local database specifically for this app - called `custom_cards`. It will need a `cards` table with a schema as follows (with id as the serial primary key):
    -   ```
        Column    |          Type          
        ----------|------------------------
        id        | integer                
        recipient | character varying(50)  
        sender    | character varying(50)  
        content   | character varying(255) 
        ```
    - (We're working on test data and easy database set up. If you have any thoughts, contact us.)
- To run your local server, run `node server.js` in your terminal. (Also, check out `nodemon`! It restarts your server when changes are made.)

## Architecture
NodeJS server using Express, node-pg, superagent. See `package.json` file for complete list of dependencies.

## Credits and Collaborations
S/O to ACL's 301 Day class, fall of 2017.