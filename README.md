# pwdgen
Generate passwords

## Usage

$ `pwdgen`

$ `pwdgen -s 15`

$ `pwdgen -s 256 -b`

## Args

|Arg|Desc|
|---|----|
|s,*s*ize|Size of password|
|b,sym*b*ol|Use base64 encoding|

## Module

```js
require('pwdgen')(length,symbols)
```