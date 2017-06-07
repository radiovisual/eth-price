#!/usr/bin/env node
'use strict';
const meow = require('meow');
const ethPrice = require('.');

const cli = meow(`
	Usage
	  $ eth-price [toSymbol]

	Examples
	  $ eth-price
      USD: 262.69
      $ eth-price btc
      BTC: 0.0927
      $ eth-price xrp,btc,usd
      XRP: 937.07
      BTC: 0.09277
      USD: 261.91

`);

ethPrice(cli.input[0])
	.then(prices => prices.forEach(price => console.log(price)));
