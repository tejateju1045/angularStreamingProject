import { Component, OnInit } from '@angular/core';

import { STREAMS } from '../mock_stream';




/*const streams=[
  {
    id:1,
    image_url:"https://fdn.gsmarena.com/imgroot/news/20/10/netflix-india-free-weekend/-1200/gsmarena_001.jpg",
    image_alt:"NetFlix",
    name:"Netflix"
  },
  {
    id:2,
    image_url:"https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ntihrsv8twn3tean_1606289756.jpeg",
    image_alt:"Rakuten",
    name:"Rakuten Viki"
  },
  {
    id:3,
    image_url:"https://gohow.co/wp-content/uploads/2021/09/32ba8145a0b805d4526a5894a270567d_3.png",
    image_alt:"We TV",
    name:"We TV"
  },
  {
    id:4,
    image_url:'https://i0.wp.com/apkoll.com/wp-content/uploads/2021/01/Asiaflix.jpg',
    image_alt:"AS",
    name:"Assian Flix"
  },
  {
    id:5,
    image_url:'https://www.passionateinmarketing.com/wp-content/uploads/2021/05/amazon-2.jpg',
    image_alt:'AP',
    name:"Amazon Prime"
  }
]*/

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.css']
})
export class StreamingComponent implements OnInit {
  streams = STREAMS;

  /*stream = {
    id:1,
    image_url:"https://fdn.gsmarena.com/imgroot/news/20/10/netflix-india-free-weekend/-1200/gsmarena_001.jpg",
    image_alt:"NetFlix"

  }*/
  

  constructor() { }

  ngOnInit(): void {
  }

}
