import {Component, OnInit} from '@angular/core';
import {Training} from "../../models/training/training";
import {TrainingsService} from "../../services/training-service/trainings.service";

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  MAX_LENGTH = 50;
  trainings: Training[] = [];
  trainingsFull: Training[] = [];

  constructor(private trainingService: TrainingsService) {
  }

  ngOnInit(): void {
    this.listTrainings();
  }

  listTrainings(): void {
    this.trainingService.getTrainings().subscribe(
      data => {
        this.trainingsFull = data;
        this.trainings = this.cutEachTrainings(data);
      }
    );
  }

  cutEachTrainings(trainings: Training[]): Training[] {
    let res: Training[] = [];
    for (let training of trainings) {
      let newTraining: Training = new Training();
      newTraining.id = training.id;
      newTraining.name = training.name;
      newTraining.slogan = training.slogan.slice(0, this.MAX_LENGTH);
      newTraining.isShort = true;
      res.push(newTraining);
    }

    return res;
  }

  showFullTraining(id: number): void {
    let fullItem = this.trainingsFull.find(item => item.id === id);
    for (let item of this.trainings) {
      if (item.id === id ) {
        if (item.isShort) {
          item.slogan = fullItem.slogan;
          item.isShort = false;
        } else {
          item.slogan = item.slogan.slice(0, this.MAX_LENGTH);
          item.isShort = true;
        }

      }
    }
  }
}
