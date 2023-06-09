
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Album } from "../../album";
import { AlbumService } from "../album.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {
  album = {} as Album;
  form = new FormGroup({
    newTitle: new FormControl<string>('')
  })

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.albumService.getAlbum(id).subscribe((album: Album) => {
        this.album = album;
      })
    })
  }

  changeTitle(album:Album) {
    this.route.paramMap.subscribe(() => {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      const newTitle = this.form.value.newTitle!;
      album.title = newTitle;
      fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'PUT',
        body: JSON.stringify({
          id: id,
          title: newTitle,
          userId: this.album.userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      }).then();
    });
  }

}