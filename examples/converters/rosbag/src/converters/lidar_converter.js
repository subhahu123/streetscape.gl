export class LidarDataSource {
  constructor(directory) {
    this.root_dir = directory;

    // XVIZ stream names produced by this converter
    // TODO: list streams we are producing
    this.LIDAR_POINTS = '/lidar/points';
  }

  load() {
    throw new Error('Implement load');
  }

  convertFrame(frame_number, xvizBuilder) {
    throw new Error('Implement convertFrame');
  }

  getMetadata(xvizMetaBuilder) {
    throw new Error('Implement getMetadata');
  }
}
