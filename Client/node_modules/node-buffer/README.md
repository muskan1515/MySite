# Description

node-buffer is a node.js module for interacting with the Buffer API. (https://buffer.com/developers/)

# Examples

## REST

The following code example shows how to retrieve the authenticated user's profile.

```javascript
var Buffer = require('node-buffer');

var bufferClient = new Buffer({
  access_token: 'ACCESS_TOKEN'
});

bufferClient.get('/profiles.json', function(error, profile, response){
  console.log(error);
  if (!error) {
    console.log(profile);
  }
});
```

The following code example shows how to post updates

```javascript
var Buffer = require('node-buffer');

var bufferClient = new Buffer({
  access_token: 'ACCESS_TOKEN'
});

bufferClient.post('/updates/create.json',{profile_ids:['PROFILE_ID'],text:'TEXT'}, function(error, update, response){
  console.log(error);
  if (!error) {
    console.log(update);
  }
});
```
