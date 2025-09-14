const root = require("path").join(__dirname, "..", "..");

let binding;
try {
  binding = require("../../build/Release/tree_sitter_dart_binding");
} catch (error1) {
  if (error1.code !== 'MODULE_NOT_FOUND') {
    throw error1;
  }
  try {
    binding = require("../../build/Debug/tree_sitter_dart_binding");
  } catch (error2) {
    if (error2.code !== 'MODULE_NOT_FOUND') {
      throw error2;
    }
    throw error1
  }
}

// Export the language directly like other working parsers
module.exports = binding.language;

// Add name property for compatibility
module.exports.name = binding.name;

try {
  module.exports.nodeTypeInfo = require("../../src/node-types.json");
} catch (_) {}
