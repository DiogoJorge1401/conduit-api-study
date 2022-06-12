import jestConfig from './jest.config';

export default {
	...jestConfig,
	testMatch: ['**/?(*.)+(spec|test).integration.[tj]s?(x)'],
};
