const createBuilder = require('@j.u.p.iter/modules-builder');

const INFO_TO_COMPILE = require('./data/info-to-compile');
const createBuilds = createBuilder(INFO_TO_COMPILE);


createBuilds();

