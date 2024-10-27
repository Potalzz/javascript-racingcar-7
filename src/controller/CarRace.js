import InputView from "../view/InputView.js";
import Validator from "./Validator.js";
import RacingCars from "../model/RacingCars.js";

class CarRace {
  constructor() {}

  async init() {
    const racingCars = new RacingCars();
    await this.registerRacingCars(racingCars);
  }

  async getCarNamesFromUserInput() {
    const input = await InputView.readCarNames();
    return this.parseCarNames(input);
  }

  parseCarNames(input) {
    return input.split(",");
  }

  validateCarList(carList) {
    Validator.checkCarList(carList);
    carList.map((carName) => Validator.checkName(carName));
  }

  async registerRacingCars(racingCars) {
    const carList = await this.getCarNamesFromUserInput();
    carList.forEach((carName) => racingCars.registerCar(carName));
  }
}

export default CarRace;
