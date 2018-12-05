import { EventEmitter } from '@angular/core';
import { Exercise } from '../shared/models/Exercise';

export class TrainingService {
  runningExercise: Exercise;

  startTraingEvent: EventEmitter<Exercise> = new EventEmitter<Exercise>();

  private availabeExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];

  getAvailableExercises = () => this.availabeExercises.slice();

  public startExercise = (id: string) => this.startTraingEvent.emit(this.availabeExercises.find(ex => ex.id === id));

}
