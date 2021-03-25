import React from 'react'
import PropTypes from 'prop-types'

class MapAnalyticsControl extends React.PureComponent {
    state = {
        apiOptions: [
            {
                title: 'Reverse Geo',
                url: 'https://admin.barikoi.xyz:8080/bkoi/logreader/time/location'
            },
        ],
        selectedApi: 'Reverse Geo',
        date: '',
        time: ''
    }

    // Handle On Change
    _onInputChange = event => {
        this.setState({ [ event.target.name ]: event.target.value })
    }

    // Handle On Submit
    _onSubmit = event => {
        event.preventDefault()

        const { apiOptions, selectedApi, date, time } = this.state
        const api = apiOptions.find(i => i.title === selectedApi)

        this.props.onFormSubmit({ selectedApi: api ? api : null, date, time })
    }

    render() {
        const { apiOptions, selectedApi, date, time } = this.state

        return (
            <div style={ containerStyles }>
                <div style={ formContainerStyles }>
                    <form onSubmit={ this._onSubmit } style={ formStyles }>

                        <div style={{ ...formGroupStyles, marginTop: 0 }}>
                            <label htmlFor='api-select-menu' style={ labelStyles }>{ 'Select API' }</label>
                            <select
                                id='api-select-menu'
                                name='selectedApi'
                                value={ selectedApi }
                                onChange={ this._onInputChange }
                                style={{ width: '100%', height: '32px' }}
                                required={ true }
                            >
                                { apiOptions.map((a, i) => (
                                    <option key={ i } value={ a.title }>{ a.title }</option>
                                ))}
                            </select>
                        </div>

                        <div style={ formGroupStyles }>
                            <label htmlFor='date-input' style={ labelStyles }>{ 'Select Date' }</label>
                            <input
                                id='date-input'
                                name='date'
                                type='date'
                                required={ true }
                                max={ new Date().toISOString().slice(0, 10) }
                                value={ date }
                                onChange={ this._onInputChange }
                                style={ inputStyles }
                            />
                        </div>

                        <div style={ formGroupStyles }>
                            <label htmlFor='time-input' style={ labelStyles }>{ 'Select Time' }</label>
                            <input
                                id='time-input'
                                name='time'
                                type='time'
                                required={ true }
                                max={ new Date().toTimeString().slice(0, 5) }
                                value={ time }
                                onChange={ this._onInputChange }
                                style={ inputStyles }
                            />
                        </div>

                        <button type='submit' style={{ ...inputStyles, marginTop: '32px' }}>{ 'Submit' }</button>
                    </form>
                </div>
            </div>
        )
    }
}

// JSS Styles
const containerStyles = {
    boxSizing: 'border-box',
    margin: 0,
    marginBottom: window.innerWidth <= 600 ? '2rem' : '0px',
    padding: 0,
    width: window.innerWidth <= 600 ? '100%' : '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden'
}

const formContainerStyles = {
    boxSizing: 'border-box',
    margin: 0,
    padding: window.innerWidth <= 600 ? '0px' : '0px 32px 0px 32px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden'
}

const formStyles = {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden'
}

const formGroupStyles = {
    width: '100%',
    marginTop: '16px'
}

const labelStyles = {
    fontWeight: 600,
    padding: '0px 0px 8px 0px'
}

const inputStyles = {
    width: '100%',
    height: '32px'
}

// Prop Types
MapAnalyticsControl.propTypes = {
    onFormSubmit: PropTypes.func.isRequired
}

export default MapAnalyticsControl