import browser from './lib/browser/index.js';
import util from './lib/util/index.js';
import debug from './lib/debug/index.js';
import timer from './lib/timer/index.js';

module.exports = {
    browser,
    ...debug,
    ...util,
    ...timer
}