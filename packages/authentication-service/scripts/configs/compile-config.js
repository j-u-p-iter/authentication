const COMPILE_CONFIG = {
  TO_ES: {
    command: 'npx babel modules -d es --ignore __tests__',
    moduleType: 'es',
    messages: {
      onBeforeRun: 'Compiling to ES modules\n',
      onSuccess: 'Compiled to ES modules with success\n',
    },
  },
  TO_CMJS: {
    command: 'npx babel modules -d cmjs --ignore __tests__',
    moduleType: 'cmjs',
    messages: {
      onBeforeRun: 'Compiling to CMJS modules\n',
      onSuccess: 'Compiled to CMJS modules with success\n',
    }
  }
};


module.exports =  COMPILE_CONFIG;
