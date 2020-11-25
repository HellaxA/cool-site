import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $('#my-navbar a').click(function (e) {
      $('#my-navbar a').removeClass('current_page_item');
      $(this).addClass('current_page_item');
    });
  }

}
