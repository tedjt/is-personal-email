# is-personal-email

  Determine if an email is a personal email address, like `joe@gmail.com`. You can use it to detect personal accounts in your signup process.

## Example

```js
var personal = require('is-personal-email');

personal('ilya@segment.io'); // false
personal('mike@gmail.com'); // true
personal('fake@mailinator.com'); // false
```

## Installation
  
```
$ npm install is-personal-email
```
```
$ component install ivolo/is-personal-email
```

## Licence

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```