import {Component, OnInit} from '@angular/core';
import {TrainingsService} from "../../services/training-service/trainings.service";
import {Training} from "../../models/training/training";

@Component({
  selector: 'app-create-training-form',
  templateUrl: './create-training-form.component.html',
  styleUrls: ['./create-training-form.component.css']
})
export class CreateTrainingFormComponent implements OnInit {

  successMessage = '';
  name = '';
  slogan = '';

  constructor(private trainingService: TrainingsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.successMessage = '';
    let training: Training = new Training();
    training.name = this.name;
    training.slogan = this.slogan;
    this.trainingService.createTraining(training).subscribe(() => {training.name
      this.name = '';
      this.slogan = '';
      this.successMessage = 'Training has been successfully created';

    });
  }

}
