export {};

type ConstructorArg<C> = C extends {
  new (arg: infer A, ...args: any[]): any;
}
  ? A
  : never;

let dateFirst: ConstructorArg<typeof Date>;

let promiseFirst: ConstructorArg<typeof Promise>;

class WebpackCompiler {
  constructor(options: {
    amd?: false | { [index: string]: any };
    bail?: boolean;
    cache?:
      | boolean
      | {
          maxGenerations?: number;
          type: "memory";
        };
    context?: string;
    dependencies?: string[];
    devtool?: string | false;
    entry?: string;
    chunkLoading?: string | false;
    dependOn?: string | string[];
    layer?: null | string;
    runtime?: string;
    wasmLoading?: string | false;
    externalsType?:
      | "var"
      | "module"
      | "assign"
      | "this"
      | "window"
      | "self"
      | "global"
      | "commonjs"
      | "commonjs2"
      | "commonjs-module"
      | "amd"
      | "amd-require"
      | "umd"
      | "umd2"
      | "jsonp"
      | "system"
      | "promise"
      | "import"
      | "script";

    ignoreWarnings?: (
      | RegExp
      | {
          file?: RegExp;

          message?: RegExp;

          module?: RegExp;
        }
    )[];
    loader?: { [index: string]: any };
    mode?: "development" | "production" | "none";
    name?: string;
    parallelism?: number;
    profile?: boolean;
    recordsInputPath?: string | false;
    recordsOutputPath?: string | false;
    recordsPath?: string | false;
    stats?:
      | boolean
      | "none"
      | "summary"
      | "errors-only"
      | "errors-warnings"
      | "minimal"
      | "normal"
      | "detailed"
      | "verbose";
    target?: string | false | string[];
    watch?: boolean;
  }) {}
}

const cfg: ConstructorArg<typeof WebpackCompiler> = {
  entry: "src/index.ts",
  //   wutch: true, // SPELLING ERROR!!
  watch: true,
};
try {
  const compiler = new WebpackCompiler(cfg);
} catch (err) {
  throw new Error(`Problem compiling with config\n${JSON.stringify(cfg, null, "  ")}`);
}
