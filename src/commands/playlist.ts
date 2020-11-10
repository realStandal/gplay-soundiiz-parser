import {Command} from '@oclif/command'
import * as fs from 'fs'
import parse from 'csv-parse/lib/sync'
import stringify from 'csv-stringify/lib/sync'
import {GPlayPlaylistCSV, SounddiizPlaylist} from '../@types/playlist'
import {parseDirectory} from '../util/parse-directory'

export default class Playlist extends Command {
  static description = 'Convert a Google Play Music Playlist CSV directory to a single Soundizz compatible CSV file.'

  static args = [
    {
      name: 'Playlist',
      required: true,
      description: 'Directory containing a subdirectory \'Tracks\' containing CSV files exported from Google Play Music.',
      parse: (input: string) => parseDirectory(input),
    },
    {
      name: 'Output',
      required: true,
      description: 'Directory to output the single, Soundizz compatible CSV file to.',
      parse: (input: string) => parseDirectory(input),
    },
    {
      name: 'File',
      required: false,
      description: 'Name of the file to generate output too.',
      default: 'output',
    },
  ]

  static flags = {}

  async run() {
    const {args} = this.parse(Playlist)

    // Throw an error if either PLAYLIST or OUTPUT directory does not exist.
    // OR if the output FILE already exists.
    if (!fs.existsSync(args.Playlist)) {
      throw new Error(`PLAYLIST directory does not exist: ${args.Playlist}`)
    }
    if (!fs.existsSync(args.Output)) {
      throw new Error(`OUTPUT directory does not exist: ${args.Output}`)
    }
    if (fs.existsSync(args.File)) {
      throw new Error(`FILE output destination already exists: ${args.File}`)
    }

    const trackDirectory = `${args.Playlist}/Tracks`

    // Throw an error if the 'TRACKS' directory does not exist within the provided PLAYLIST directory.
    // The TRACKS directory is provided by Google upon Play Music data export.
    if (!fs.existsSync(trackDirectory)) {
      throw new Error('TRACKS directory not found in provided PLAYLIST directory.')
    }

    const gPlayPlaylist: GPlayPlaylistCSV[] = []

    // Loop through and parse the contents of the TRACK directory, storing the data
    // in a Playlist array.
    const fileList: string[] = fs.readdirSync(trackDirectory)
    fileList.forEach((file: string) => {
      const buffer = fs.readFileSync(`${trackDirectory}/${file}`)
      const fileStr = buffer.toString()
      gPlayPlaylist.push(parse(fileStr, {columns: true})[0])
    })

    const sdizzPlaylist: SounddiizPlaylist[] = []
    const errorFiles: string[] = []

    // Iterate through each Google Playlist item, formatting them into
    // a Sounddiiz object to be pushed to a Sounddiiz array.
    gPlayPlaylist.forEach((playlist: GPlayPlaylistCSV, index: number) => {
      // Ignore items without a title as Soundiiz prioritizes this field.
      if (playlist.Title === '') {
        errorFiles.push(fileList[index])
        return
      }

      sdizzPlaylist.push({
        Title: playlist.Title,
        Artist: playlist.Artist,
        Album: playlist.Album,
      })
    })

    // Convert the JavaScript array of playlist items into a formatted
    // CSV string.
    const sdizzCSVString = stringify(sdizzPlaylist,
      {
        header: true,
        columns: ['Title', 'Artist', 'Album'],
        delimiter: ';',
        record_delimiter: ';\n',
        eof: true,
      }
    )

    // Write the CSV string to the output file and log the success.
    fs.writeFileSync(`${args.Output}/${args.File}.csv`, sdizzCSVString)
    this.log('Google Play-Music Playlist successfully parsed for Sounddiiz.')
    this.log(`Contents have been exported to: ${args.Output}/${args.File}.csv`)

    if (errorFiles !== []) {
      this.log('')
      this.log('The following files could not be parsed:')
      errorFiles.forEach((file: string) => {
        this.log(`  ${file}`)
      })
    }
  }
}
