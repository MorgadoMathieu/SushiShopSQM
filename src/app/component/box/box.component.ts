import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Box } from 'src/app/models/Box'

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})

export class BoxComponent {
  BoxForm = new FormGroup({ 
    id: new FormControl(),
    nom: new FormControl(),
    piece: new FormControl(),
    prix: new FormControl(),
    image: new FormControl(),
    //aliments: [{
    //  nom: new FormControl(),
    //  quantite: new FormControl()
    //}]
    
  })

}
