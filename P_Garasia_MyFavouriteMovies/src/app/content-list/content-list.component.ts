import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
contents: Content[];
images(content: any){
  console.log(`ID: ${content.id}`);
  console.log(`Title: ${content.title}`);
}

constructor(){
  this.contents= [

  {
    id: 0,
    title: "Black Widow",
    description: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    creator: "Cate Shortland",
    imgURL: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    type: "Action, Adventure, Sci-Fi"    
  },
  {
    id: 1,
    title: "Doctor Strange in the Multiverse of Madness",
    description: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.",
    creator: "Sam Raimi",
    imgURL: "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
    type: "Action, Adventure, Fantasy, Horror, Sci-Fi"    
  },
  {
    id: 2,
    title: "Shang-Chi and the Legend of the Ten Rings",
    description: "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
    creator: "Destin Daniel Cretton",
    imgURL: "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    type: "Action, Adventure, Fantasy, Sci-Fi"
  },
  {
    id: 3,
    title: "Spider-Man: Far from Home",
    description: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
    creator: "Jon Watts",
    imgURL: "https://cdn.marvel.com/content/1x/spider-manfarfromhome_lob_crd_04_3.jpg",
    type: "Action, Adventure, Comedy, Sci-Fi"    
  },
  {
    id: 4,
    title: "Thor: Love and Thunder",
    description: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
    creator: "Taika Waititi",
    imgURL: "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    type: "Action, Adventure, Fantasy, Sci-Fi"    
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    creator: "Anthony , RussoJoe Russo",
    imgURL: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    type: "Action, Adventure, Drama, Sci-Fi"    
  }
  ];
}
}
