import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

// Import Components
import MapGL from './MapGL'
import MapAnalyticsControl from './MapAnalyticsControl'

// Import Actions & Methods
import { getApiKey } from '../../actions/auth'
class MapAnalytics extends React.PureComponent {
    state = {
        geoJsonData: null
    }

    componentDidMount() {
        // Get & Set API Key
        this.props.dispatch( getApiKey() )
    }

    // Handle On Form Submit
    _onFormSubmit = values => {
        const { apiKey } = this.props
        const { selectedApi, date } = values
        
        // Terminating Condition
        if(!selectedApi || !selectedApi.url || !date || !apiKey) {
            alert('Invalid Request!')
            return
        }

        // Set geoJson Data to null to remove previous data
        this.setState({ geoJsonData: null })

        // Fetch Locations
        axios.get(selectedApi.url, { params: { key: apiKey, time: `${ date } ${ '23:59' }:00.000000` } })
            .then(res => {
                const { locations } = res.data
                if(!locations) {
                    alert('Data Not Available!')
                    return
                }

                if(locations && locations.length === 0) {
                    alert('No Locations Found!')
                }

                const geoJsonData = this._buildGeoJson(locations)

                this.setState({ geoJsonData })
            })
            .catch(err => console.error(err))
    }

    // Build GeoJSON from API Response Data
    _buildGeoJson = data => {
        const geoJson = {
            type: 'FeatureCollection',
            features: data.map(d => ({
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'Point',
                    coordinates: [ Number(d.lon), Number(d.lat) ]
                }
            }))
        }

        return geoJson
    }

    render() {
        const { geoJsonData } = this.state

        return (
            <div style={ containerStyles }>
                <div className='account'>
                    <h2>{ 'Map Analytics' }</h2>
                </div>

                <div style={ analyticsBoardStyles }>
                    <MapAnalyticsControl
                        onFormSubmit={ this._onFormSubmit }
                    />
                    <MapGL geoJsonData={ geoJsonData } />
                </div>
            </div>
        )
    }
}

// JSS Styles
const containerStyles = {
    boxSizing: 'border-box',
    margin: 0,
    padding: '1rem',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'auto'
}

const analyticsBoardStyles = {
    boxSizing: 'border-box',
    margin: 0,
    marginTop: '16px',
    padding: '1rem',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: window.innerWidth <= 600 ? 'column' : 'row',
    justifyContent: window.innerWidth <= 600 ? 'flex-start' : 'center',
    alignItems: window.innerWidth <= 600 ? 'center' : 'flex-start',
    overflow: 'auto'
}

// Prop Types
MapAnalytics.propTypes = {
    apiKey: PropTypes.string
}

MapAnalytics.defaultProps = {
    apiKey: ''
}

const mapStateToProps = state => ({
    apiKey: state.auth.apiKey
})

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(MapAnalytics)