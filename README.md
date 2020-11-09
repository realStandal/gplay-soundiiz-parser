gplay-soundizz-parser
=====================

Google Play Playlist to Soundizz parser written as a CLI using oclif.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gplay-soundizz-parser.svg)](https://npmjs.org/package/gplay-soundizz-parser)
[![Downloads/week](https://img.shields.io/npm/dw/gplay-soundizz-parser.svg)](https://npmjs.org/package/gplay-soundizz-parser)
[![License](https://img.shields.io/npm/l/gplay-soundizz-parser.svg)](https://github.com/realStandal/gplay-soundizz-parser/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g gplay-soundizz-parser
$ giiz COMMAND
running command...
$ giiz (-v|--version|version)
gplay-soundizz-parser/1.0.0 win32-x64 node-v14.15.0
$ giiz --help [COMMAND]
USAGE
  $ giiz COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`giiz hello [FILE]`](#giiz-hello-file)
* [`giiz help [COMMAND]`](#giiz-help-command)

## `giiz hello [FILE]`

describe the command here

```
USAGE
  $ giiz hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ giiz hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/realStandal/gplay-soundizz-parser/blob/v1.0.0/src\commands\hello.ts)_

## `giiz help [COMMAND]`

display help for giiz

```
USAGE
  $ giiz help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src\commands\help.ts)_
<!-- commandsstop -->
