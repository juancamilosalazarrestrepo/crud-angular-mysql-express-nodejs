import { Component, OnInit } from '@angular/core';
import {Equipo, EquipoService} from '../../SERVICES/equipo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  equipo: Equipo={
    id_equipo: '',
    nombre:'',
    logo:''
    };
  constructor(private EquipoService:EquipoService,private router:Router) { }

  ngOnInit(): void {
  }

  modificar(){

  }

}
