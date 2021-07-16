export const formateDate = (date) => {
 // Formating date into API formate
 // new Date()=> Tue Jun 29 2021 09:45:25 GMT
 // new Date ->yyyy-mm--dd 
 var d = new Date(date),
  month = '' + (d.getMonth() + 1),
  day = '' + d.getDate(),
  year = d.getFullYear();
 if (month.length < 2)
  month = '0' + month;
 if (day.length < 2)
  day = '0' + day;
 return [year, month, day].join('-');
}