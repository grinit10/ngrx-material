import { EventEmitter } from '@angular/core';
import { Exercise } from '../shared/models/Exercise';

export class TrainingService {
  runningExercise: Exercise = null;
  pastExercises: Exercise[] = [];
  startTraingEvent: EventEmitter<Exercise> = new EventEmitter<Exercise>();
  stopTraingEvent: EventEmitter<void> = new EventEmitter<void>();
  completeTraingEvent: EventEmitter<void> = new EventEmitter<void>();

  private availabeExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];

  getAvailableExercises = () => this.availabeExercises.slice();

  public startExercise = (id: string) => this.startTraingEvent.emit(this.runningExercise = this.availabeExercises.find(ex => ex.id === id));

  public completeExercise = () => {
    this.pastExercises.push({...this.runningExercise, date: new Date(), state: 'completed'});
    this.runningExercise = null;
    this.completeTraingEvent.emit();
  }

  public cancelExercise = (duration: number, calories: number) => {
    this.pastExercises.push({...this.runningExercise, date: new Date(), state: 'cancelled', duration: duration, calories: calories});
    this.runningExercise = null;
    this.stopTraingEvent.emit();
  }
}
