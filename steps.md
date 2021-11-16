# Chatty Client

## Create The App

- install React

`npx create-react-app chatty_client`

- Cleanup

- install and import io

```js
yarn add socket.io-client
```

```js
import { io } from "socket.io-client"
```

## Create the Connection to Socket Server

- create a state for the socket connection

```js
const [sockConn, setSockConn] = useState(null);
```

## Create the useEffect To Connect

- Add the url in a .env file

```js
  REACT_APP_SOCKET_SERVER=http://localhost:3001
```

- Add to the top of the function:

```js
const socketServerUrl = process.env.REACT_APP_SOCKET_SERVER;
```


- Add the useEffect

```js
  useEffect(() => {
    const socket = io(socketServerUrl);
    setConn(socket);
  }, [socketServerUrl])
```

- Add the useEffect for Event Handlers

```js
useEffect(() => {
    if (sockConn) {
    
      sockConn.on('connection', ()=>{
        console.log('Client connected')
      })

      sockConn.on('disconnect', () =>{

        console.log('Client disconnected')


      })

    }
```