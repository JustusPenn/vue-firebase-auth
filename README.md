# Vue Firebase Authentication

## Project setup
```
yarn install
```

### Configure firebase
You need to create a Firebase project to get started with this application.
Go to [Firebase](https://console.firebase.google.com) to create a Firebase Project.

create a __*firebase.js*__ file in the **_src/plugins_** folder and add the following to it.
```
    import { initializeApp } from 'firebase/app';

    const firebaseConfig = {
        apiKey: "api-key",
        authDomain: "project-id.firebaseapp.com",
        databaseURL: "https://project-id.firebaseio.com",
        projectId: "project-id",
        storageBucket: "project-id.appspot.com",
        messagingSenderId: "sender-id",
        appId: "app-id",
    }

    export default initializeApp(firebaseConfig)
```

and you are good to go.

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
