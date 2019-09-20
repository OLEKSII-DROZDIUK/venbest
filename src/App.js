import React, {Component} from 'react';
import {connect} from 'react-redux';

import PreloaderSmall from './components/PreloaderSmall/PreloaderSmall';


import {getCustomers} from "./actions/action";
import idGeneratorHelper from './helpers/idGeneratorHelper';
import filterCustomerHelper from './helpers/filterCustomerHelper';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name:'',
			lastname:'',
			age:'number',
			gender:{
				f:false,
				m:false
			}
		}
	}

	componentDidMount(){
		this.props.getCustomersAction()
	}


	handlerChangeName(event){

		this.setState({
			name:event.target.value
		})
	}

	handlerChangeLastname(event){

		this.setState({
			lastname:event.target.value
		})
	}

	handlerChangeAge(event){

		this.setState({
			age:event.target.value.length > 0?Number(event.target.value):'number'
		})

	}

	handlerChangeCheckbox(event){

		this.setState({
			gender:{
				f:event.target.name === "sex-f"?event.target.checked?true:false
				:this.state.gender.f,
				m:event.target.name === "sex-m"?event.target.checked?true:false
				:this.state.gender.m
			}
		})

	}

	render(){
		const {customers} = this.props;


		const renderCustomersFromApi = customers.length > 0
		?
		<React.Fragment>
			<form className="filters w-50 border d-flex flex-column ">
				<h5 className="card-title filters-title text-center">Filters</h5>
				<div className="form-group filters-name ">
					<label htmlFor="name mb-0 p-0">Name is : </label>
					<input type="text" className="form-control" id="name" placeholder="Name filter" onChange={this.handlerChangeName.bind(this)}/>
				</div>
				<div className=" form-group filters-lastname">
					<label htmlFor="lastname mb-0 p-0">Lastname is : </label>
					<input type="text" className="form-control" id="lastname" placeholder="Lastname filter" onChange={this.handlerChangeLastname.bind(this)}/>
				</div>
				<div className="form-group filters-age ">
					<label htmlFor="age mb-0 p-0">Age is : </label>
					<input type="text" className="form-control" id="age" placeholder="Age filter" onChange={this.handlerChangeAge.bind(this)}/>
				</div>
				<div className="form-group filters-sex">
					<div className="filters-sex_m">
						<input type="checkbox" name="sex-m" className="form-check-input" id="sex-m" onChange={this.handlerChangeCheckbox.bind(this)}/>
						<label className="form-check-label" htmlFor="sex-m">M</label>
					</div>
					<div className="filters-sex_f">
						<input type="checkbox" name="sex-f" className="form-check-input" id="sex-f" onChange={this.handlerChangeCheckbox.bind(this)}/>
						<label className="form-check-label" htmlFor="sex-f">F</label>
					</div>				
				</div>
			</form>
			{customers.map((customer) => {
				if(filterCustomerHelper(customer, this.state)){
					return(
						<div key={idGeneratorHelper()} className="list-customer border w-50 mt-4">
							<div className="customer_info">
								<span className="customer_info-name">{customer.name}</span>
								<span className="customer_info-lastname">{customer.lastname}</span>
							</div>
							<div className="customer_age border">
								<span className="customer_info-age">Возраст: {customer.age}</span>
							</div>
							<div className="customer_sex border">
								<span className="customer_info-sex">Пол: {customer.sex=== 'f'?"женский":"мужской"}</span>
							</div>
						</div>					
					)
				}
			})}
		</React.Fragment>
		:<PreloaderSmall/>

		return (
			<div className="container d-flex align-items-center justify-content-center flex-column">
				{renderCustomersFromApi}
			</div>
		);
	}
}

const mapStateToProps = function (store) {
    return {
		customers:store.customers.customers
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
		getCustomersAction:() => dispatch(getCustomers()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
