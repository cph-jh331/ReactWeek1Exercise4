//Add imports here
import CountryStore from './data/CountryStore';
import LabelStore from './data/LabelStore';
class CountryFactory {

  constructor() {
    this.labels = [];
    this.countries = [];
    this.cStore = new CountryStore();
    this.lStore = new LabelStore();
  }

  getLabels = handler => {
    this.lStore.setObserver(handler);
    this.lStore.getLabelsAndNotify();
  }

  getCountries = handler => {
    this.cStore.setObserver(handler);
    this.cStore.getCountriesAndNotify();
  }

  getCountriesCont = (time, handler) => {
    this.cStore.setObserver(handler);
    this.timerId = setInterval(this.cStore.getCountriesAndNotify, time);
  }

  stopIntervalFetching = () => {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
}

export default new CountryFactory();