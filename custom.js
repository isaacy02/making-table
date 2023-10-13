/********************************************************************
 Isaac Young
 Making a table hw
 *******************************************************************/

 // The array of objects, one object for each artist.
 
 const artists = [
   {
     name: "Ms Scandalous",
     birthYear: 1985,
     link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
   },
   {
    name: "Juggy D",
    birthYear: 1981,
    link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
  },
  {
    name: "Sukhbir Singh",
    birthYear: 1969,
    link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
  },
  {
    name: "Abrar-ul-Haq",
    birthYear: 1989,
    link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
  },
  {
    name: "Rishi Rich",
    birthYear: 1970,
    link: "https://www.youtube.com/watch?v=O95-w2gACuA"
  }
 ]

 // complete with code to select and populate the table
 document.addEventListener('DOMContentLoaded', function() {
  const table = document.getElementById('bhangra');
  const headerRow = table.insertRow();
  const nameHeader = document.createElement('th');
  nameHeader.textContent = 'Name';
  headerRow.appendChild(nameHeader);
  const birthYearHeader = document.createElement('th');
  birthYearHeader.textContent = 'Date of Birth';
  headerRow.appendChild(birthYearHeader);
  const linkHeader = document.createElement('th');
  linkHeader.textContent = 'Link';
  headerRow.appendChild(linkHeader);
  artists.forEach(artist => {
    const row = table.insertRow();
    const nameCell = row.insertCell(0);
    const birthYearCell = row.insertCell(1); 
    nameCell.textContent = artist.name;
    birthYearCell.textContent = artist.birthYear;
    const linkCell = row.insertCell(2);
    const link = document.createElement('a');
    link.href = artist.link;
    link.textContent = 'Watch Video';
    linkCell.appendChild(link);
  });
});
