# how to use

hello framework authors and early adopters. as of writing, this repo requires using the build of bun on `dave/more-bake`.

to use DevServer

```sh
bun ./bun.app.ts
```

to demo the static site generator

```
bun build --app --static --debug-dump-server-files
bunx serve dist
```

> `--debug-dump-server-files` is needed to dump the `runtime.js` which is currently incorrectly shared by the server and the client.

## custom frameworks

`bun-framework-react` is a part of bun, and is tracked in its repo under `src/bake/bun-framework-react`. you can replace `"react"` with an object describing your own framework. see `bake.d.ts` for the interface.
