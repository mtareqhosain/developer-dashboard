import React from 'react'
import PropTypes from 'prop-types'
import { StaticMap } from 'react-map-gl'
import { DeckGL } from '@deck.gl/react'
import { GeoJsonLayer } from '@deck.gl/layers'
import bbox from '@turf/bbox'

class MapGL extends React.PureComponent {
    state = {
        viewState: {
            longitude: 90.3920316696167,
            latitude: 23.873653162245787,
            zoom: 15,
            pitch: 0,
            bearing: 0
        },
        viewport: null,
        mapboxApiAccessToken: 'pk.eyJ1Ijoicmhvc3NhaW4iLCJhIjoiY2o4Ymt0NndlMHVoMDMzcnd1ZGs4dnJjMSJ9.5Y-mrWQCMXqWTe__0J5w4w',
        mapStyle: 'https://map.barikoi.com/styles/barikoi-dark/style.json',
        layers: [],
    }

    componentDidMount() {
        const { geoJsonData } = this.props

        if(geoJsonData) {
            const layer = this._createPointsLayer(geoJsonData)
            this.setState({ layers: layer ? [ layer ] : [] })

            setTimeout(() => {
                const { layers } = this.state

                // Fit Bounds
                if(layers.length > 0 && layers[0].context) {
                    const { viewport } = layers[0].context
                    this._fitBounds(viewport, geoJsonData)
                }
            }, 10)
        }
    }

    componentDidUpdate(prevProps) {
        const { geoJsonData } = this.props

        // If geoJsonData props changes
        if(!prevProps.geoJsonData && geoJsonData) {
            const layer = this._createPointsLayer(geoJsonData)
            this.setState({ layers: layer ? [ layer ] : [] })

            setTimeout(() => {
                const { layers } = this.state

                // Fit Bounds
                if(layers.length > 0 && layers[0].context) {
                    const { viewport } = layers[0].context
                    this._fitBounds(viewport, geoJsonData)
                }
            }, 10)
        }
    }

    // ViewState Change Handler
    _onViewStateChangeHandler = viewState => {
        const { longitude, latitude, zoom, pitch, bearing } = viewState.viewState
        this.setState({ viewState: { longitude, latitude, zoom, pitch, bearing } })
    }

    // Create New Points Layer
    _createPointsLayer = data => {
        if(!data) {
            return null
        }

        return new GeoJsonLayer({
            id: 'points-layer',
            data,
            filled: true,
            stroked: false,
            extruded: false,
            wireframe: false,
            lineWidthUnits: 'meters',
            lineWidthScale: 1,
            lineWidthMinPixels: 2,
            lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
            lineJointRounded: true,
            lineMiterLimit: 4,
            elevationScale: 1,
            pointRadiusUnits: 'meters',
            pointRadiusScale: 1,
            pointRadiusMinPixels: 2,
            pointRadiusMaxPixels: Number.MAX_SAFE_INTEGER,
            material: true,
            getLineColor: [ 0, 255, 0, 255 ],
            getFillColor: [ 0, 255, 0, 255 ],
            getRadius: 50,
            getLineWidth: 1,
            getElevation: 1000,
            pickable: false,
            highlightedObjectIndex: -1,
            highlightColor: [ 255, 255, 0, 255 ]
        })
    }

    // Fit Bounds
    _fitBounds = (viewport, geoJson) => {
        const { viewState } = this.state

        if(!viewport || !geoJson || !geoJson.features || geoJson.features.length === 0) {
            return
        }

        const bounds = bbox(geoJson)
        
        const { longitude, latitude, zoom } = viewport.fitBounds([ [ bounds[0], bounds[1] ], [ bounds[2], bounds[3] ] ], { padding: 32 })
        this.setState({ viewState: { ...viewState, longitude, latitude, zoom: zoom < 14 ? zoom : 14  } })
    }

    render() {
        const { viewState, mapboxApiAccessToken, mapStyle, layers } = this.state

        return (
            <div style={ containerStyles }>
                <DeckGL
                    viewState={ viewState }
                    onViewStateChange={ this._onViewStateChangeHandler }
                    controller={ true }
                    layers={ layers }
                >
                    <StaticMap
                        mapboxApiAccessToken={ mapboxApiAccessToken }
                        mapStyle={ mapStyle }
                    />
                </DeckGL>
            </div>
        )
    }
}

// JSS Styles
const containerStyles = {
    boxSizing: 'border-box',
    position: 'relative',
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    minWidth: '300px',
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: '4px'
}

// Prop Types
MapGL.propTypes = {
    geoJsonData: PropTypes.object
}

MapGL.defaultProps = {
    geoJsonData: null
}

export default MapGL