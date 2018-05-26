# Storm Picker

This is source of web application that helps with hero drafting.

The idea is simple: filtering heroes by their features (ranged/melee, waveclear,
cc, etc).

## Development

For now it does not have any backend logic. All data is stored in json files
under `public/` directory.

## Contributing

Even if you are not a programmer you still can help project via editing data
files.

Basically, we have two data files:

* [Feature list](public/features.json)
* [Heroes list](public/heroes.json)

If you want add feature to hero just edit hero data. **Important:** if you want
feature to show up in filter it must be in feature list like others.

## License

This project is licensed under the MIT License.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
