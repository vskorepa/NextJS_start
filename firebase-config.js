import * as admin from 'firebase-admin'
const serviceAccount = require('./serviceAccountKey.json')

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:
      'https://nextjs-start-default-rtdb.europe-west1.firebasedatabase.app',
    app: 'testApp',
  })
}

const db = admin.database()
export { db }
// ref.on(
//   'value',
//   function (snapshot) {
//     console.log(snapshot.val())
//   },
//   function (errorObject) {
//     console.log('The read failed: ' + errorObject.code)
//   }
// )
