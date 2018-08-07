const {ArgumentParser} = require('argparse');
const path = require('path');

const parser = new ArgumentParser({
  addHelp: true,
  description: 'ROSBAG to XVIZ converter'
});

parser.addArgument(['-d', '--data_directory'], {
  required: true,
  help: 'Path to raw ROSBAG data. Relative path will be resolved relative to /data/kitti/'
});

parser.addArgument(['-o', '--output'], {
  help: 'Path to generated data. Relative path will be resolved relative to /data/generated/kitti/'
});

parser.addArgument(['--disable-streams'], {
  defaultValue: '',
  help: 'Comma separated stream names to disable'
});

parser.addArgument(['--frame_limit'], {
  defaultValue: Number.MAX_SAFE_INTEGER,
  help: 'Limit XVIZ frame generation to this value. Useful for testing conversion quickly'
});

// extract args from user input
module.exports = function getArgs() {
  const args = parser.parseArgs();
  const inputDir = path.resolve(__dirname, '../../../../data/rosbag', args.data_directory);
  const outputDir = path.resolve(
    __dirname,
    '../../../../data/generated/rosbag',
    args.out || args.data_directory
  );
  console.log(inputDir, outputDir); // eslint-disable-line
  const disableStreams = args.disable_streams.split(',');
  return {
    inputDir,
    outputDir,
    disableStreams,
    frame_limit: args.frame_limit
  };
};
