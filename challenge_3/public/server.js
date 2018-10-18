const express = require('express');
const app = express();
const path = require('path');

// //same as express.static but will specifically only render this filepath
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

//if there are any other files under public folder, it will provide access to those other files by using /endpointName
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('listening on port', 3000);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsInBhdGgiLCJ1c2UiLCJzdGF0aWMiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxVQUFVQyxRQUFRLFNBQVIsQ0FBaEI7QUFDQSxNQUFNQyxNQUFNRixTQUFaO0FBQ0EsTUFBTUcsT0FBT0YsUUFBUSxNQUFSLENBQWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQUMsSUFBSUUsR0FBSixDQUFRSixRQUFRSyxNQUFSLENBQWUsUUFBZixDQUFSOztBQUVBSCxJQUFJSSxNQUFKLENBQVcsSUFBWCxFQUFpQixNQUFNO0FBQUNDLFVBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQyxJQUFqQztBQUF1QyxDQUEvRCIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuLy8gLy9zYW1lIGFzIGV4cHJlc3Muc3RhdGljIGJ1dCB3aWxsIHNwZWNpZmljYWxseSBvbmx5IHJlbmRlciB0aGlzIGZpbGVwYXRoXG4vLyBhcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4vLyAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9wdWJsaWMvaW5kZXguaHRtbCcpKTtcbi8vIH0pO1xuXG4vL2lmIHRoZXJlIGFyZSBhbnkgb3RoZXIgZmlsZXMgdW5kZXIgcHVibGljIGZvbGRlciwgaXQgd2lsbCBwcm92aWRlIGFjY2VzcyB0byB0aG9zZSBvdGhlciBmaWxlcyBieSB1c2luZyAvZW5kcG9pbnROYW1lXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcblxuYXBwLmxpc3RlbigzMDAwLCAoKSA9PiB7Y29uc29sZS5sb2coJ2xpc3RlbmluZyBvbiBwb3J0JywgMzAwMCl9KTtcbiJdfQ==