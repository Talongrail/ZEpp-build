/**
 * Amazfit Zepp OS AeroMETAR - Main Screen
 * Optimized for circular 480x480 & rectangular AMOLED screens
 */
import { createWidget, widget, prop, align, text_style, event } from '@zos/ui';
import { push } from '@zos/router';
import { vibrate } from '@zos/sensor';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = hmSetting.getDeviceInfo();
const CX = SCREEN_WIDTH / 2;

Page({
  state: {
    currentIndex: 0,
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
    metarCache: {}
  },

  onInit() {
    console.log('Init AeroMETAR Watch Face');
  },

  build() {
    const current = this.state.airfields[this.state.currentIndex];

    // Background Pure AMOLED Black
    createWidget(widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: SCREEN_WIDTH,
      h: SCREEN_HEIGHT,
      color: 0x000000
    });

    // Top Status Bar: Station ICAO & Time
    createWidget(widget.TEXT, {
      x: 20,
      y: 35,
      w: SCREEN_WIDTH - 40,
      h: 40,
      color: 0x00E5FF,
      text_size: 32,
      align_h: align.CENTER_H,
      text_style: text_style.BOLD,
      text: current.icao
    });

    // Airfield Name / City
    createWidget(widget.TEXT, {
      x: 30,
      y: 75,
      w: SCREEN_WIDTH - 60,
      h: 24,
      color: 0x9E9E9E,
      text_size: 18,
      align_h: align.CENTER_H,
      text: current.name.substring(0, 22)
    });

    // Flight Category Indicator Ring (VFR Green / IFR Red / MVFR Blue)
    createWidget(widget.ARC, {
      x: 25,
      y: 25,
      w: SCREEN_WIDTH - 50,
      h: SCREEN_HEIGHT - 50,
      start_angle: 0,
      end_angle: 360,
      color: 0x00E676, // VFR Green default
      line_width: 5
    });

    // Flight Category Badge text
    createWidget(widget.TEXT, {
      x: CX - 60,
      y: 110,
      w: 120,
      h: 30,
      color: 0x00E676,
      text_size: 24,
      align_h: align.CENTER_H,
      text_style: text_style.BOLD,
      text: 'VFR'
    });

    // Primary METAR Metric: Wind & Speed
    createWidget(widget.TEXT, {
      x: 30,
      y: 155,
      w: SCREEN_WIDTH - 60,
      h: 44,
      color: 0xFFFFFF,
      text_size: 36,
      align_h: align.CENTER_H,
      text_style: text_style.BOLD,
      text: '240° / 12 KT'
    });

    // Secondary Metric Row: Visibility & Ceiling
    createWidget(widget.TEXT, {
      x: 40,
      y: 215,
      w: (SCREEN_WIDTH - 80) / 2,
      h: 28,
      color: 0xE0E0E0,
      text_size: 20,
      align_h: align.CENTER_H,
      text: 'VIS: 10 SM'
    });

    createWidget(widget.TEXT, {
      x: CX,
      y: 215,
      w: (SCREEN_WIDTH - 80) / 2,
      h: 28,
      color: 0xE0E0E0,
      text_size: 20,
      align_h: align.CENTER_H,
      text: 'CLD: FEW 045'
    });

    // Tertiary Metric Row: Temperature & Altimeter
    createWidget(widget.TEXT, {
      x: 40,
      y: 255,
      w: (SCREEN_WIDTH - 80) / 2,
      h: 28,
      color: 0xB0BEC5,
      text_size: 18,
      align_h: align.CENTER_H,
      text: 'T/DP: 22° / 14°'
    });

    createWidget(widget.TEXT, {
      x: CX,
      y: 255,
      w: (SCREEN_WIDTH - 80) / 2,
      h: 28,
      color: 0xB0BEC5,
      text_size: 18,
      align_h: align.CENTER_H,
      text: 'ALT: 29.92 in'
    });

    // Crosswind Glance Widget
    createWidget(widget.TEXT, {
      x: 30,
      y: 305,
      w: SCREEN_WIDTH - 60,
      h: 28,
      color: 0xFFB300,
      text_size: 19,
      align_h: align.CENTER_H,
      text: 'RWY 22R: X-WIND 5 KT'
    });

    // Navigation Dots / Indicator
    const dotCount = this.state.airfields.length;
    const dotSpacing = 16;
    const startX = CX - ((dotCount - 1) * dotSpacing) / 2;

    for (let i = 0; i < dotCount; i++) {
      createWidget(widget.CIRCLE, {
        center_x: startX + i * dotSpacing,
        center_y: SCREEN_HEIGHT - 65,
        radius: i === this.state.currentIndex ? 5 : 3,
        color: i === this.state.currentIndex ? 0x00E5FF : 0x424242
      });
    }

    // Refresh & Instructions Footer
    createWidget(widget.TEXT, {
      x: 30,
      y: SCREEN_HEIGHT - 45,
      w: SCREEN_WIDTH - 60,
      h: 20,
      color: 0x616161,
      text_size: 14,
      align_h: align.CENTER_H,
      text: 'ROTATE CROWN OR SWIPE'
    });

    // Rotary Crown Event Listener for Amazfit Balance & T-Rex
    hmUI.setLayerScrolling(true);
  }
});
