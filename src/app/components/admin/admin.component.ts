import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../services/request-service/request.service";
import {TrainingsService} from "../../services/training-service/trainings.service";
import {Training} from "../../models/training/training";
import {CustomRequest} from "../../models/request/custom-request";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  trainings: Training[] = [];
  requests: CustomRequest[] = [];

  constructor(private requestService: RequestService,
              private trainingService: TrainingsService) { }

  ngOnInit(): void {
    this.listTrainings();
    this.listRequests();
  }

  listTrainings(): void {
    this.trainingService.getTrainings().subscribe(
      data => {
        this.trainings = data;
      }
    );
  }

  listRequests(): void {
    this.requestService.getRequests().subscribe(
      data => {
        this.requests = data;
      }
    );
  }

  deleteTraining(id: number): void {
    this.trainingService.delete(id).subscribe(() => this.listTrainings());
  }

  deleteRequest(id: number) {
    this.requestService.delete(id).subscribe(() => this.listRequests());
  }

}
