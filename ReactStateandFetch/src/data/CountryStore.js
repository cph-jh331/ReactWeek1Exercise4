const URL = "http://localhost:3333/countries/";
const myHeaders = new Headers({ "Content-Type": "application/json" });
class CountryStore {

    getCountriesAndNotify = () => {
        console.log("bob");
        fetch(URL,
            {
                method: "GET",
                headers: myHeaders
            })
            .then(res => res.json())
            .then(data => {
                if (this.handler) {
                    this.handler(data);
                }
            });
    }

    getCountryAndNotify = id => {
        fetch(URL + id, {
            method: "GET",
            headers: myHeaders
        })
            .then(res => res.json())
            .then(data => {
                if (this.handler) {
                    this.handler(data);
                }
            });
    }

    setObserver(handler) {
        this.handler = handler;
    }

}
export default CountryStore