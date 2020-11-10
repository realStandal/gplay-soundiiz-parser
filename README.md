Giiz
=====================

Google Play (Playlist) to Soundiiz parser written as a CLI using oclif.

> oclif arguments really don't like spaces in a directory name, so sorry.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gplay-soundizz-parser.svg)](https://npmjs.org/package/gplay-soundizz-parser)
[![License](https://img.shields.io/npm/l/gplay-soundizz-parser.svg)](https://github.com/realStandal/gplay-soundizz-parser/blob/master/package.json)

Currently only supports playlists dumped as part of a data export from Google.

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g gplay-soundiiz-parser
$ giiz COMMAND
running command...
$ giiz (-v|--version|version)
gplay-soundiiz-parser/1.0.1 win32-x64 node-v14.15.0
$ giiz --help [COMMAND]
USAGE
  $ giiz COMMAND
...
```
<!-- usagestop -->
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
* [`giiz help [COMMAND]`](#giiz-help-command)
* [`giiz playlist PLAYLIST OUTPUT [FILE]`](#giiz-playlist-playlist-output-file)

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

## `giiz playlist PLAYLIST OUTPUT [FILE]`

Convert a Google Play Music Playlist CSV directory to a single Soundizz compatible CSV file.

```
USAGE
  $ giiz playlist PLAYLIST OUTPUT [FILE]

ARGUMENTS
  PLAYLIST  Directory containing a subdirectory 'Tracks' containing CSV files exported from Google Play Music.
  OUTPUT    Directory to output the single, Soundizz compatible CSV file to.
  FILE      [default: output] Name of the file to generate output too.
```

_See code: [src\commands\playlist.ts](https://github.com/realStandal/gplay-soundiiz-parser/blob/v1.0.1/src\commands\playlist.ts)_
<!-- commandsstop -->
* [`giiz help [COMMAND]`](#giiz-help-command)
* [`giiz playlist PLAYLIST OUTPUT [FILE]`](#giiz-playlist-playlist-output-file)

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

## `giiz playlist PLAYLIST OUTPUT [FILE]`

Convert a Google Play Music Playlist CSV directory to a single Soundizz compatible CSV file.

```
USAGE
  $ giiz playlist PLAYLIST OUTPUT [FILE]

ARGUMENTS
  PLAYLIST  Directory containing a subdirectory 'Tracks' containing CSV files exported from Google Play Music.
  OUTPUT    Directory to output the single, Soundizz compatible CSV file to.
  FILE      [default: output] Name of the file to generate output too.
```

_See code: [src\commands\playlist.ts](https://github.com/realStandal/gplay-soundizz-parser/blob/v1.0.0/src\commands\playlist.ts)_
<!-- commandsstop -->
