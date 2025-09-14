#include <napi.h>

typedef struct TSLanguage TSLanguage;

extern "C" TSLanguage *tree_sitter_dart();

// "tree-sitter", "language" hashed
namespace {

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports["name"] = Napi::String::New(env, "dart");
    auto *language = tree_sitter_dart();
    exports["language"] = Napi::External<TSLanguage>::New(env, language);
    return exports;
}

NODE_API_MODULE(tree_sitter_dart_binding, Init)

}  // namespace
