import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-select-form',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './select-form.html',
  styleUrl: './select-form.css',
})
export class SelectForm {}
