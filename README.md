```
Personal Blog-App Website ⚡️.
```
### Running Locally.
- Install Backend Packages and start the Server at Port 5000.
```
npm install
nodemon (or) node server.js
```

- Create a Directory Named DBase/ in this folder and a file url.js in it. It should export Mlab-URI and secret.

- Install Frontend (React) Packages and start the server at Port 3000
```
cd ./client/
npm install
npm start
```

> Browser automatically opens window in port 3000.

### Running in Docker Container.
```
docker build -f Dockerfile.dev -t <dockerusername>/<appname> .

docker run -d -p <hostport>:<applicationport> <dockerusername>/<appname>
```
