console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
    constructor() {
      this.coins = 0;
    }
  
    play() {
      this.coins++;
      const rouletteOne = !!Math.round(Math.random());
      const rouletteTwo = !!Math.round(Math.random());
      const rouletteThree = !!Math.round(Math.random());
  
      if (rouletteOne && rouletteTwo && rouletteThree) {
        console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
        this.coins = 0;
      } else {
        console.log("Good luck next time!!");
      }
    }
  }

  const slotMachine = new SlotMachine();
  slotMachine.play();
  slotMachine.play();
  slotMachine.play();
  slotMachine.play();
  slotMachine.play();