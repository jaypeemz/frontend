// <template>
//     <h1>Audiobooks</h1>
//     <ul v-for="(audiobook,index) in audiobooks" :key="index">
//         <li>{{audiobook.title}}</li>
//         <li>{{audiobook.categories}}</li>
//     </ul>

// </template>

// <script>
// import AudiobookDataService from '../../services/AudiobookDataService.js'

// export default {
//     name: 'audiobook-list',
//     data() {
//         return {
//             audiobooks: []
//         }
//     },
//     methods: {
//         retrieveAudiobooks() {
//             AudiobookDataService.getAll()
//                 .then(response => {
//                     this.audiobooks = response.data
//                     console.log(response.data)
//                 })
//                 .catch(e => {
//                     alert(e)
//                 })
//         }
//     },
//     mounted() {
//         this.retrieveAudiobooks()
//     }
// }

// </script>