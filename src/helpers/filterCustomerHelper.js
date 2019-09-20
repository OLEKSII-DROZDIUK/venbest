
const filterCustomerHelper = (customer, filterState) => {
    let discrepancyCounter = 0;

    for(let props in customer) {
        if(props === "name"){
            discrepancyCounter = customer[props].indexOf(filterState["name"]) >= 0?discrepancyCounter:discrepancyCounter+1;
        } else if(props === "lastname"){
            discrepancyCounter = customer[props].indexOf(filterState["lastname"]) >= 0?discrepancyCounter:discrepancyCounter+1;
        } else if(props === "age" && filterState["age"] != 'number'){
            discrepancyCounter = customer[props] === filterState["age"]?discrepancyCounter:discrepancyCounter+1;
        } 
        else if(props === "sex"){
            if(customer[props] === "m" && filterState['gender'].m != filterState['gender'].f){
                discrepancyCounter = filterState['gender'].m?discrepancyCounter:discrepancyCounter+1;

            } else if(customer[props] === "f" && filterState['gender'].m != filterState['gender'].f) {
                discrepancyCounter = filterState['gender'].f?discrepancyCounter:discrepancyCounter+1;
            }
        } 
    }

    return discrepancyCounter === 0?true:false;
}

export default filterCustomerHelper;