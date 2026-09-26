/**
 * Amazfit Zepp OS AeroMETAR App
 * Main App Lifecycle
 */
App({
  globalData: {
    airfields: [
  {
    "icao": "KCBM",
    "name": "KCBM Airport",
    "elevation": 100,
    "runways": [
      {
        "id": "09/27",
        "heading": 90
      },
      {
        "id": "18/36",
        "heading": 180
      }
    ]
  },
  {
    "icao": "KTUP",
    "name": "KTUP Airport",
    "elevation": 100,
    "runways": [
      {
        "id": "09/27",
        "heading": 90
      },
      {
        "id": "18/36",
        "heading": 180
      }
    ]
  },
  {
    "icao": "KTCL",
    "name": "KTCL Airport",
    "elevation": 100,
    "runways": [
      {
        "id": "09/27",
        "heading": 90
      },
      {
        "id": "18/36",
        "heading": 180
      }
    ]
  },
  {
    "icao": "KMEI",
    "name": "KMEI Airport",
    "elevation": 100,
    "runways": [
      {
        "id": "09/27",
        "heading": 90
      },
      {
        "id": "18/36",
        "heading": 180
      }
    ]
  },
  {
    "icao": "KJAN",
    "name": "KJAN Airport",
    "elevation": 100,
    "runways": [
      {
        "id": "09/27",
        "heading": 90
      },
      {
        "id": "18/36",
        "heading": 180
      }
    ]
  }
],
    activeAirfieldIndex: 0,
    currentMetar: null,
    units: {
      speed: 'kts',
      altimeter: 'inHg',
      temp: 'C'
    },
    lastUpdatedUtc: ''
  },
  onCreate(options) {
    console.log('AeroMETAR Watch App Started on Zepp OS');
  },
  onDestroy(options) {
    console.log('AeroMETAR Watch App Destroyed');
  }
});
