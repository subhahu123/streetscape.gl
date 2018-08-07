export class PoseDataSource {
  constructor(directory) {
    this.root_dir = directory;

    // XVIZ stream names produced by this converter
    // TODO: list streams we are producing
    // this.VEHICLE_POSE = 'vehicle-pose';
  }

  load() {
    throw new Error('Implement load');
  }

  getPose(frame_number) {
    throw new Error('Implement getPose');
  }

  convertFrame(frame_number, xvizBuilder) {
    throw new Error('Implement convertFrame');
  }

  getMetadata(xvizMetaBuilder) {
    throw new Error('Implement getMetadata');
  }
}
