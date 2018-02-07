const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

const testsContext = require.context("../packages", true, /^.*\.(spec|integration-spec)$/);
testsContext.keys().forEach(testsContext);
