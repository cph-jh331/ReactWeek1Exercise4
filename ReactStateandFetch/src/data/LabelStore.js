const URL = "http://localhost:3333/labels/";
const myHeaders = new Headers({ "Content-Type": "application/json" });
class LabelStore {

    getLabelsAndNotify = () => {
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
            })
    }

    setObserver(handler) {
        this.handler = handler;
    }

}
export default LabelStore;