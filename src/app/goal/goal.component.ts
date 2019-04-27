import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
    goals = [
      new Goal(1, 'Watch finding nemo', 'find an online version and watch merlin find his son', new Date(2018 , 3 , 14)),
      new Goal(2, 'Buy cookies', 'I have to buy cookis for the parrot', new Date(2018 , 6 , 9)),
      new Goal(3, 'Get new phone case', 'Diana has a birthday coming up soon', new Date(2018 , 1 , 12)),
      new Goal(4, 'Get dog food', 'Pupper likes expensive snacks', new Date(2019 , 9 , 18)),
      new Goal(5, 'Solve math homework', 'Damn Math', new Date(2019 , 11 , 14)),
      new Goal(6, 'Plot my world domination plan', 'Cause i am an evil overlord', new Date(2018 , 3 , 14)),
    ];



    toggleDetails(index) {
      this.goals[index].showDescription = !this.goals[index].showDescription;
    }

    deleteGoal(isComplete, index) {
      if (isComplete) {
        const toDelete = confirm('Are you sure you want to delete $(this.goals[index].name)');

        if (toDelete) {
          this.goals.splice(index, 1);
        }
      }
    }

    addNewGoal(goal) {
      const goalLength = this.goals.length;
      goal.id = goalLength + 1;
      goal.completeDate = new Date(goal.completeDate);
      this.goals.push(goal);
    }

  constructor() { }

  ngOnInit() {
  }

}
