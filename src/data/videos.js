/**
 * Demonstration videos, shown under their research area in the order listed.
 * Keys match `id` in researchAreas (content.js).
 *
 * `ratio` is width / height of the encoded file, so each clip is framed at its
 * true shape with no cropping or letterboxing. Files live in public/videos/.
 * Captions come from the title cards inside the clips where they exist —
 * edit any of them freely.
 */
export const demoVideos = {
  harvesting: [
    {
      src: 'videos/harvesting-01.mp4',
      poster: 'videos/harvesting-01.jpg',
      ratio: 344 / 480,
      label: 'Harvester demo 01',
      note: 'Harvester prototype with its live output on the oscilloscope.'
    },
    {
      src: 'videos/harvesting-02.mp4',
      poster: 'videos/harvesting-02.jpg',
      ratio: 422 / 480,
      label: 'Harvester demo 02',
      note: 'Frame-type harvester actuated by hand, output read on the oscilloscope.'
    },
    {
      src: 'videos/harvesting-03.mp4',
      poster: 'videos/harvesting-03.jpg',
      ratio: 720 / 720,
      label: 'Key-operated toy',
      note: 'TENG integrated in a key-operated toy, output monitored on the oscilloscope.'
    }
  ],
  sensors: [
    {
      src: 'videos/sensors-01.mp4',
      poster: 'videos/sensors-01.jpg',
      ratio: 720 / 1280,
      label: 'TENG game controller',
      note: 'Game controller sensor based on a CSBT3-based TENG.'
    },
    {
      src: 'videos/sensors-02.mp4',
      poster: 'videos/sensors-02.jpg',
      ratio: 478 / 850,
      label: 'Toy-car controller',
      note: 'Toy car controlled using a PS-TENG.'
    },
    {
      src: 'videos/sensors-03.mp4',
      poster: 'videos/sensors-03.jpg',
      ratio: 292 / 480,
      label: 'Security node demo',
      note: 'Bluetooth terminal, laptop webcam view and phone alert from a live run.'
    }
  ]
};
