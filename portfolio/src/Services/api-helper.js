const axios = require('axios');
// 
// let originalURL = 'https://docs.google.com/spreadsheets/d/1K-A_YU_SC9yevfyvhsw97skP48P8VARCRoJPzav1Tc4/edit#gid=0'
// let id = '1K-A_YU_SC9yevfyvhsw97skP48P8VARCRoJPzav1Tc4'
// let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`
//
// export const getProjects = async () => {
//   const resp = await axios.get(source);
//   console.log('this id data.feed.entry', data.feed.entry)
//   let projects = data.feed.entry.map( d => {
//     let projects = {
//       title: d.gsx$title.$t,
//       image: d.gsx$image.$t,
//       description: d.gsx$description.$t
//     }
//     return projects
//   })
//   this.setState({
//     project: projects
//   })
// }
