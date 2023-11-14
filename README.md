### Zettelkasten

My basic zettelkasten implementation using 11ty. Requires eleventy-plugin-backlinks (https://www.npmjs.com/package/eleventy-plugin-backlinks).

Converts notes in markdown format to html files, taking care of links and adding backreferences to make one's notes traversable.

Notes should be written as markdown (.md) files and stored in the 'zettel' directory. Links must be written using the wikilinks format, e.g. if you want to link to a note called 'test' you write '[[test]]'. If you are using linux, you may generate the
html by running

``npx @11ty/eleventy``

from the zettelkasten directory. From there, I run a local webserver to make things interactive. I use the http.server python library.
If you'd like to use that too, and you are on linux, then you may simply enter the command

``python3 -m http.server -d _site``

to run the server on localhost:8000.
