import React, { Fragment, useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Clipboard from 'react-clipboard.js';

const ApiList = ({ apiPopup, toggleApiPopup, apiKey }) => {
  const [currentBtn, setCurrentBtn] = useState('');

  useEffect(() => {
    document.addEventListener('mousedown', handleToggle);
    return () => {
      document.removeEventListener('mousedown', handleToggle);
    };
  }, []);

  const node = useRef();

  const handleToggle = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    toggleApiPopup(!apiPopup);
  };

  const handleClick = (e) => {
    setCurrentBtn(e.target.title);
  };
  return (
    <Fragment>
      <div className='modal'></div>
      <div ref={node} className='popup card-1'>
        <div className='popup-header'>
          <h3>APIs</h3>
          <FontAwesomeIcon
            icon='times'
            size='lg'
            className='pointer'
            onClick={() => toggleApiPopup(!apiPopup)}
          />
        </div>
        <small>Geocode</small>
        <div className='input-group'>
          <input
            readOnly
            type='text'
            id='geocode'
            value={`https://barikoi.xyz/v1/api/search/geocode/${apiKey}/place?`}
          />
          <Clipboard
            data-clipboard-target='#geocode'
            button-title='geocode'
            className={`btn-1 ${currentBtn === 'geocode' ? 'active-btn' : ''}`}
            onClick={handleClick}
          >
            {currentBtn === 'geocode' ? 'Copied' : 'copy'}
          </Clipboard>
        </div>

        <small>Reverse Geocode</small>
        <div className='input-group'>
          <input
            readOnly
            type='text'
            id='reverse'
            value={`https://barikoi.xyz/v1/api/search/reverse/geocode/${apiKey}/place?`}
          />
          <Clipboard
            data-clipboard-target='#reverse'
            button-title='reverse'
            className={`btn-1 ${currentBtn === 'reverse' ? 'active-btn' : ''}`}
            onClick={handleClick}
          >
            {currentBtn === 'reverse' ? 'Copied' : 'copy'}
          </Clipboard>{' '}
        </div>
        <small>Autocomplete</small>
        <div className='input-group'>
          <input
            readOnly
            type='text'
            id='autocomplete'
            value={`https://barikoi.xyz/v1/api/search/autocomplete/${apiKey}/place?`}
          />
          <Clipboard
            data-clipboard-target='#autocomplete'
            button-title='autocomplete'
            className={`btn-1 ${
              currentBtn === 'autocomplete' ? 'active-btn' : ''
            }`}
            onClick={handleClick}
          >
            {currentBtn === 'autocomplete' ? 'Copied' : 'copy'}
          </Clipboard>{' '}
        </div>
        <small>Nearby</small>
        <div className='input-group'>
          <input
            readOnly
            type='text'
            id='nearby'
            value={`https://barikoi.xyz/v1/api/search/nearby/${apiKey}`}
          />
          <Clipboard
            data-clipboard-target='#nearby'
            button-title='nearby'
            className={`btn-1 ${currentBtn === 'nearby' ? 'active-btn' : ''}`}
            onClick={handleClick}
          >
            {currentBtn === 'nearby' ? 'Copied' : 'copy'}
          </Clipboard>{' '}
        </div>
        <small>Distance</small>
        <div className='input-group'>
          <input
            readOnly
            type='text'
            id='distance'
            value={`https://barikoi.xyz/v1/api/distance/${apiKey}`}
          />
          <Clipboard
            data-clipboard-target='#distance'
            button-title='distance'
            className={`btn-1 ${currentBtn === 'distance' ? 'active-btn' : ''}`}
            onClick={handleClick}
          >
            {currentBtn === 'distance' ? 'Copied' : 'copy'}
          </Clipboard>{' '}
        </div>
        <small>Routing</small>
        <div className='input-group'>
          <input
            readOnly
            type='text'
            id='routing'
            value={`https://barikoi.xyz/v1/api/route/${apiKey}`}
          />
          <Clipboard
            data-clipboard-target='#routing'
            button-title='routing'
            className={`btn-1 ${currentBtn === 'routing' ? 'active-btn' : ''}`}
            onClick={handleClick}
          >
            {currentBtn === 'routing' ? 'Copied' : 'copy'}
          </Clipboard>{' '}
        </div>
      </div>
    </Fragment>
  );
};

export default ApiList;
