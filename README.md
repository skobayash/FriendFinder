# FriendFinder

## Overview
FriendFinder is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

A live version of this app can be found at: https://lit-mesa-39081.herokuapp.com/

## Installation

To clone Bamazon to your local repository, enter the following in your terminal/bash window:
``` git clone https://github.com/skobayash/Bamazon.git ```

Install the following dependencies for Bamazon:
* inquirer
* cli-table
* mysql

``` npm install ```

## How It Works

By clicking on the "Go to Survey" button on the home page, users will be directed to a survey page.
Based on the information the user fills out in response to 10 personality-based questions, the app will
determine the person that has most closely matched with the user in their answers.

The best match will then be returned to the user along with their name and their picture.

