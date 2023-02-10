import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
contents: Content[];

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
    title: "Doctor Strange in the Multiverse of Madness",
    description: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.",
    creator: "Sam Raimi",
    imgURL: "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
    type: "Action, Adventure, Fantasy, Horror, Sci-Fi"    
  },
  {
    id: 4,
    title: "Doctor Strange in the Multiverse of Madness",
    description: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.",
    creator: "Sam Raimi",
    imgURL: "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
    type: "Action, Adventure, Fantasy, Horror, Sci-Fi"    
  },
  {
    id: 5,
    title: "Doctor Strange in the Multiverse of Madness",
    description: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.",
    creator: "Sam Raimi",
    imgURL: "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
    type: "Action, Adventure, Fantasy, Horror, Sci-Fi"    
  }
  ];
}
}
