// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAA8xjyhyQTiV4CCunuiN-c0-PSQe0oRPU",
    authDomain: "todolistapp-7dd2c.firebaseapp.com",
    databaseURL: "https://todolistapp-7dd2c.firebaseio.com",
    projectId: "todolistapp-7dd2c",
    storageBucket: "todolistapp-7dd2c.appspot.com",
    messagingSenderId: "693601653404"
  }
};
