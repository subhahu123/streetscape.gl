export class TrackletsDataSource {
  constructor(directory) {
    this.root_dir = directory;

    // XVIZ stream names produced by this converter
    // TODO: list streams we are producing
    this.OBJECTS = '/tracklets/objects';
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
