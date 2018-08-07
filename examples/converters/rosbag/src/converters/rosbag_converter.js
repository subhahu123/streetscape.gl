const path = require('path');

import {XVIZBuilder, XVIZMetadataBuilder} from '../xviz-writer';
import {createDir} from '../parsers/common';

const {open} = require('rosbag');

export class RosbagConverter {
  constructor(inputDir, outputDir, disableStreams) {
    this.inputDir = inputDir;
    this.outputDir = outputDir;
    this.disableStreams = disableStreams;

    this.numFrames = 0;
  }

  initialize() {
    createDir(this.outputDir);

    const rosbagFile = path.resolve(this.inputDir);

    open(rosbagFile).then(bag => {
      bag.readMessages({topics: ['/base_odometry/odometer']}, result => {
        // topic is the topic the data record was in
        // in this case it will be either '/foo' or '/bar'
        console.log(result.topic); // eslint-disable-line

        // message is the parsed payload
        // this payload will likely differ based on the topic
        console.log(result.message); // eslint-disable-line
      });
    });

    // These are the converters for the various data sources.
    // Notice that some data sources are passed to others when a data dependency
    // requires coordination with another data source.

    // TODO: create data sources

    // Note: order is important due to data deps on the pose
    this.converters = [];

    this.converters.forEach(c => c.load());
  }

  frameCount() {
    return this.numFrames;
  }

  convertFrame(frame_number) {
    const i = frame_number;

    // The XVIZBuilder provides a fluent-API to construct objects.
    // This makes it easier to incrementally build objects that may have
    // many different options or variant data types supported.
    const xvizBuilder = new XVIZBuilder(this.disableStreams);

    this.converters.forEach(c => c.convertFrame(i, xvizBuilder));

    return xvizBuilder.getFrame();
  }

  getMetadata() {
    // The XVIZMetadataBuilder provides a fluent-API to collect
    // metadata about the XVIZ streams produced during conversion.
    //
    // This include type, category, and styling information.
    //
    // Keeping this general data centralized makes it easy to find and change.
    const xb = new XVIZMetadataBuilder();

    // TODO: set xb.startTime( ? ).endTime( ? );

    this.converters.forEach(c => c.getMetadata(xb));

    return xb.getMetadata();
  }
}
