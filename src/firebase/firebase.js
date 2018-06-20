import * as firebase from 'firebase';

 // Initialize Firebase
 const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export  { firebase, googleAuthProvider, database as default }
//   database.ref('expenses')
//   .once('value')
//   .then((snapshot)=> {
//       const expenses = []
      
//       snapshot.forEach((childSnapShot) => {
//           expenses.push({
//               id: childSnapShot.key,
//               ...childSnapShot.val()
//           })
//       });

//       console.log(expenses);
//   })
//   .catch((e) => {
//       console.log("Error in fetching data", e);
//   })

// database.ref('expenses')
//   .on('value',
//   (snapshot)=> {
//       const expenses = []
      
//       snapshot.forEach((childSnapShot) => {
//           expenses.push({
//               id: childSnapShot.key,
//               ...childSnapShot.val()
//           })
//       });

//       console.log(expenses);
//   },(e) => {
//       console.log("Error in fetching data", e);
//   });
//   const database = firebase.database();

//     database.ref('expenses').push({
//       description: 'Rent',
//       note: '',
//       amount: 109500,
//       createdAt: 6756756756
//     });
//     database.ref('expenses').push({
//     description: 'Phone Bill',
//     note: '',
//     amount: 5900,
//     createdAt: 6756756756
//     });
//     database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 12,
//     createdAt: 6756756756
//     });

//   database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   })

//   setTimeout(()=> {
//     database.ref('age').set(28);
//   },3500)
//   database.ref()
//    .once('value')
//    .then((snapshot)=> {
//        const val = snapshot.val();
//        console.log(val);
//    })
//    .catch((e)=> {
//         console.log('Error in fetching data: ', e);
//    })

//   database.ref().set ({
//     name: 'Durga Prasad',
//     age: '45',
//     isSingle: false,
//     location : {
//         city: "Bangalore",
//         Country:"India"
//     }
//   }).then(()=> {
//     console.log('Data is saved');
//   }).catch((error)=> {
//     console.log('This failed ', error);
//   });

//   database.ref('isSingle').remove().then(()=>{

//   }).catch(()=> {

//   })

//   database.ref().update({
//       name:'Durga Prasad. P',
//       age: '46',
//       job: 'Software Developer',
//       'location/city': 'Hyderabad'
//   }).then(()=>{

//   }).catch(()=> {

//   })