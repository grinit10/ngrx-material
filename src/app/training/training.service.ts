import { Guid } from 'guid-typescript';
import { Exercise } from '../shared/models/Exercise';

export class TrainingService {
  private availabeExercises: Exercise[] = [
    { id: Guid.create.toString(), name: 'Crunches', duration: 30, calories: 8 },
    { id: Guid.create.toString(), name: 'Touch Toes', duration: 180, calories: 15 },
    { id: Guid.create.toString(), name: 'Side Lunges', duration: 120, calories: 18 },
    { id: Guid.create.toString(), name: 'Burpees', duration: 60, calories: 8 }
  ];

  getAvailableExercises = () => {
    return this.availabeExercises.slice();
  }
}
