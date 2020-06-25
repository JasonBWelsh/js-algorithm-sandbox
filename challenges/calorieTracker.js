class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount || 0;
    if (this.currentCalories > this.maxCalories) {
      this.logCalorieSurplus();
    } else {
      this.logCaloriesRemaining();
    }
  }

  logCalorieSurplus() {
    console.log('Max calories exceeded!');
  }

  logCaloriesRemaining() {
    const caloriesRemaining = this.maxCalories - this.currentCalories;
    console.log(`You have ${caloriesRemaining} calories remaining.`);
  }
}

const calorieTracker = new CalorieTracker(2000);

calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1200);
calorieTracker.trackCalories(700);
calorieTracker.trackCalories();
