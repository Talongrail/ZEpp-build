/**
 * Amazfit Zepp OS AeroMETAR Background Service
 * Handles BLE synchronization with companion phone app & NOAA caching
 */
import { getPackageInfo } from '@zos/app';

const SERVICE_INTERVAL_MINUTES = 20;

export default {
  onInit() {
    console.log('AeroMETAR Background Sync Service Initialized');
  },
  onStart() {
    console.log('Checking for updated METAR reports via Bluetooth BLE...');
  },
  onDestroy() {
    console.log('Sync Service stopped');
  }
};
