// import { logger } from './logger.js';

// temporay function definition
function logger(message) {
  console.log(message);
}

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount || 0;
    const caloriesRemaining = this.maxCalories - this.currentCalories;

    if (this.currentCalories > this.maxCalories) {
      logger('Max calories exceeded!');
    } else {
      logger(`You have ${caloriesRemaining} calories remaining.`);
    }
  }
}

const calorieTracker = new CalorieTracker(2000);

calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1200);
calorieTracker.trackCalories(700);
calorieTracker.trackCalories();
