var assemble_dir = process.env.ASSEMBLE_DIR;
var block_name = process.env.ASSEMBLE_BLOCK_NAME;

var input = require(assemble_dir + "/input.json")

module.exports = {
  current_run: {
    assemble_dir: assemble_dir,
    block_name: block_name,
    input: input
  }
}
