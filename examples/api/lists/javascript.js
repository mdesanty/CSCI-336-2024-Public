document.addEventListener('DOMContentLoaded', function() {
  buildTable();
});

const buildTable = () => {
  const sciFiData = [
    {
      title: 'Rick & Morty',
      image: 'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg',
      description: 'A sociopathic genius scientist drags his inherently timid grandson on insanely dangerous adventures across the universe.'
    },
    {
      title: 'Westworld',
      image: 'https://m.media-amazon.com/images/M/MV5BZDg1OWRiMTktZDdiNy00NTZlLTg2Y2EtNWRiMTcxMGE5YTUxXkEyXkFqcGdeQXVyMTM2MDY0OTYx._V1_FMjpg_UX1000_.jpg',
      description: 'In the 2050s, Delos Inc. operates several theme parks, including the American Old West-themed Westworld. Each environment is populated by the "Hosts", biomechanical robots indistinguishable from humans.'
    },
    {
      title: 'The 100',
      image: 'https://static.wikia.nocookie.net/thehundred/images/e/e1/Season-01-ofcjmb.jpg',
      description: '97 years after a nuclear apocalypse, on-board a dying space station running out of air, one hundred juvenile delinquents are sent back to Earth to see if it is habitable. On the ground they will be tested by the Earth, the secrets it hides and, most of all, themselves.'
    },
    {
      title: 'The Boys',
      image: 'https://resizing.flixster.com/oynbxA9hJYlfdYfqcy_BrVNu_cQ=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjczNzIyNC53ZWJw',
      description: "In a world where superheroes are absolutely everywhere—and not all they're cracked up to be in movies and comic books. These real-life superheroes are corrupted by their celebrity status and as a result, often put people and the planet in danger."
    },
    {
      title: 'The Twilight Zone',
      image: 'https://www.themoviedb.org/t/p/w500/7uY4pCOxbEdv4M8jTE4uMPVoSIW.jpg',
      description: 'A classic science fiction anthology series about ordinary people trapped in extraordinary situations involving futuristic societies, space travel, alien invasions, telepathy, dreams, death and the afterlife, time travel, and cautionary tales of dystopian societies and conformity.'
    },
    {
      title: 'Solar Opposites',
      image: 'https://resizing.flixster.com/2K2D8-1P2L0L9jipsQS-on1eW4Y=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMDg1ZGVmNzctMTZkMC00OTkzLThhNDMtZDdlNjlkZDE3YzVhLmpwZw==',
      description: 'A family of aliens move to middle America, where they debate whether life is better there or on their home planet.'
    },
    {
      title: 'Stranger Things',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Stranger_Things_season_4.jpg/220px-Stranger_Things_season_4.jpg',
      description: 'Set in the 1980s, the series centers around the residents of the fictional small town of Hawkins, Indiana, as they are plagued by a hostile alternate dimension known as the Upside Down, after a nearby human experimentation facility opens a gateway between it and the normal world.'
    },
    {
      title: 'The Mandalorian',
      image: 'https://lumiere-a.akamaihd.net/v1/images/the-mandalorian-poster-s3-serieslp_aa55f7a4.jpeg?region=0%2C0%2C1024%2C1517',
      description: 'The Mandalorian is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.'
    },
    {
      title: 'Travelers',
      image: 'https://m.media-amazon.com/images/I/71OP5LcZVDL._AC_UF1000,1000_QL80_.jpg',
      description: 'Hundreds of years from now, surviving humans discover how to send consciousness back through time, into people of the 21st century, while attempting to change the path of humanity.'
    },
    {
      title: 'Heroes',
      image: 'https://upload.wikimedia.org/wikipedia/en/4/46/Heroes_Season_4.png',
      description: "The series tells the stories of ordinary people who discover that they have superhuman abilities and how these abilities take effect in the characters' lives as they work together to prevent catastrophic futures."
    },
    {
      title: 'Loki',
      image: 'https://cdn.marvel.com/content/1x/lokis2_lob_crd_04.jpg',
      description: 'Loki navigates an ever-expanding and increasingly dangerous Multiverse in search of Sylvie, Judge Renslayer, Miss Minutes, and the truth of what it means to possess free will and glorious purpose.'
    },
    {
      title: 'Russian Doll',
      image: 'https://m.media-amazon.com/images/M/MV5BMzRjYzA2YzgtYmEyYy00YzZjLTkzMGEtMWQ1M2Y2MTA2ZjcwXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg',
      description: 'Russian Doll follows a woman named Nadia who is caught in a time loop as the guest of honor at her seemingly inescapable 36th birthday party one night in New York City. She dies repeatedly, always restarting at the same moment at the party, as she tries to figure out what is happening to her.'
    },
    {
      title: 'Black Mirror',
      image: 'https://akns-images.eonline.com/eol_images/Entire_Site/2022416/rs_634x1024-220516074902-634-black_mirror-netflix-gj.jpg?fit=around%7C634:1024&output-quality=90&crop=634:1024;center,top',
      description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide."
    }
  ];

  const sciFiTable = document.getElementById('shows');
  const tableBody = document.createElement('tbody');

  sciFiData.forEach(show => {
    console.log(show.title);
    const tr = document.createElement('tr');

    const trHtml =
    `<tr>\n` +
    `  <td>\n` +
    `    <div class="d-inline-flex">\n` +
    `      <div>\n` +
    `        <img src="${show.image}" class="float-start" />\n` +
    `      </div>\n` +
    `      <div class="px-2">\n` +
    `        <h6>${show.title}</h6>\n` +
    `        <p class="small m-0">${show.description}</p>\n` +
    `      </div>\n` +
    `    </div>\n` +
    `  </td>\n` +
    `</tr>`;

    tr.innerHTML = trHtml;
    tableBody.appendChild(tr);
  });

  sciFiTable.appendChild(tableBody);
}