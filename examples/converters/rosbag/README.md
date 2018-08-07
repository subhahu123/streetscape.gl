### ROSBAG XVIZ Conversion Example

This public ROSBAG data set is used to demonstrate how to convert data into the XVIZ format.

The structure of this examples places the core conversion objects in `src/converters` with
an object per data source. Data source will also have parsing utilities in `src/parsers`.

The *converter* objects are responsible for calling the parsers and knowing the structure of the data
such that it can be processed by a *frame*, which is all the data required for a point in time.

### ROSBAG Data

http://projects.csail.mit.edu/stata/downloads.php
http://infinity.csail.mit.edu/data/2011/2011-01-24-06-18-27.bag

Place the data files in `../../../data/rosbag` directory

```
yarn start -d 2011-01-24-06-18-27.bag
```
