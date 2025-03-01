'use strict'
const fs = require('fs');
const settingFile = './setting.json';

process.env.settingsFile = settingFile;
process.env.settings = fs.existsSync(settingFile) ? fs.readFileSync(settingFile).toString() : '{}';

let default_settings = {
    appName: 'ike_httpToGrpc',
    bindIP: '0.0.0.0',
    bindPort: 8080,
    config: './config/config.json',
}
let settings = Object.assign({}, default_settings, JSON.parse(process.env.settings));

exports.settings = settings;

exports.configs = JSON.parse(fs.readFileSync(settings.config).toString())