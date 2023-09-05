function WactherPlugin(options) {
  this.options = options;
}
WactherPlugin.prototype.apply = function (compiler) {
  compiler.hooks.watchRun.tapAsync("WactherPlugin", (compiler, cb) => {
    let len = compiler.modifiedFiles?.size || 0;
    if (len > 0) {
      console.log(`🚀本次修改了${len}个文件，目录如下`);
      console.log(compiler.modifiedFiles);
    }
    cb();
  });
};

module.exports = WactherPlugin;
