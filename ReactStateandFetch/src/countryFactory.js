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
}

export default new CountryFactory();