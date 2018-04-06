## Installing on Firefox from Mozilla Add-ons

- Go to the [extension page](https://addons.mozilla.org/en-US/firefox/addon/wsse-generator/)
on Mozilla Add-ons to download and install the extension.

### Unpacked extension
- Go to `about:config` and turn `xpinstall.signatures.required` to *false*
- Clone the repository and go to the created directory
```bash
$ git clone https://github.com/WBerredo/wsse-generator-chrome.git
$ cd /path/to/wsse-generator-chrome/
```
- Run in your terminal:
```bash
$ zip -r wsse_generator.zip -1 icon/* *
$ mv wsse_generator.zip wsse_generator.xpi
```
- Go to `about:addons` in browser
- Drag&drop `wsse_generator.xpi` to the opened `about:addons` browser tab
- Accept it and install the extension

Profit!

[Go back](./README.md)
