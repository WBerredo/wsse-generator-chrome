## Install to firefox
- Go to `about:config` and turn `xpinstall.signatures.required` to *false*
- Clone repository and go to created directory
```bash
$ git clone https://github.com/WBerredo/wsse-generator-chrome.git
$ cd wsse-generator-chrome/
```
- Run in terminal:
```bash
$ zip -r wsse_generator.zip -1 icon/* *
$ mv wsse_generator.zip wsse_generator.xpi
```
- Go to `about:addons` in browser
- Drag&drop wsse_generator.xpi to opened `about:addons` browser tab
- Accept install extension

Profit!

[Go back](./README.md)