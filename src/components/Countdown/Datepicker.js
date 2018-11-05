import React, { Component } from 'react';
import moment from 'moment'

class Datepicker extends Component {
    state = { 
        date:'',
        valid: true,
        dirty: false
     }

     handleDateChange = ({target: {value}}) => {
         const date = moment(value)
        
        this.setState({
             date: value,
             valid: date.isValid() && date.isAfter(moment()),
             dirty: true
         })
     }

     handleDateSubmit = (e) => {
        e.preventDefault()

        const {valid, date} = this.state

        valid && this.props.onDateReset(moment(date))
     }

    render() { 
        let {date , valid, dirty} = this.state,
            classes = 'input is-medium is-rounded'

        valid && dirty && (classes += ' is-success')

        !valid && dirty && (classes += ' is-danger')

        return ( 
        
        <form onSubmit={this.handleDateSubmit}>

            <div className="field is-grouped is-grouped-centered" style={{marginBottom: 40}}>
                <p className="control has-text-centered">
                        <input 
                        className={classes} 
                        value={date} 
                        onChange={this.handleDateChange} 
                        placeholder="Type a date"/>

                        
                        {!valid && <i className="help is-danger is-size-6">invalid date</i>}
                </p>
                <div className="control">
                    <button className="button is-light is-medium is-rounded is-outlined">
                    Select
                    </button>
                </div>
            </div>

        </form> 
        );
    }
}
 
export default Datepicker;

