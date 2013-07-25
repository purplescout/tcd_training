# presentation-engine 

The core HTML5 presentation engine, components, and assets for all presentations in the [appcelerator-training/tcad_certification](https://github.com/appcelerator-training/tcad_certification) and [appcelerator-training/tcmd_certification](https://github.com/appcelerator-training/tcmd_certification) repositories.

## Instructions

1. Download a copy of this repo to a suitable directory on your computer. You might need to rename the resulting folder to **presentation-engine** (GitHub will tack on a unique identifier if you download via the Downloads or Tags feature rather than pulling a copy via git).
2. Download a copy of the course slides to that same directory so that you end up with a structure like this:

```
some_folder  
   - presentation-engine (folder, must be named as shown here!)  
   - tcad_certification (folder)  
      - index.html  <-- TOC for the whole course  
         - 000 (folder)  
            - index.html <-- TOC for the lesson  
         ... etc
```

### Running a presentation

1. Open the coursename/index.html in your browser. Safari and Chrome work best, Firefox works too.
2. Click a lesson's name, which opens the 000/index.html file for that lesson.
3. Click the "Notes" icon to open a separate window (you might need to override any pop-up blocker to see that window). That new window will display presenter notes as you step through the slides.
4. At the end of a lesson, close the presenter notes window. Click the AppU logo, which will take you back to the course TOC slide.

### Navigating within a presentation

Press right or left arrow keys to move forward/back in a presentation. Some slides include "vertically nested" sub-slides. Such nested slides will show a down-pointing arrow. Press the down-arrow key to move through those sub-slides.

Press the Spacebar to see a partial overview of the slides in a presentation.

### Internationalization

If localized version of the text is available, it should be displayed based on the language settings of your browser & system. See below for further translations info.

### Presentation styles

Background images and CSS that apply to all slides in a course are stored in the coursename folder. You can customize the display style of a lesson by replacing the graphics in the coursename/images folder and updating the CSS in the coursename/css file. There should be no need to modify anything in the presentation-engine folder.

### Printing

A print-friendly CSS style sheet is included in the coursename/css folder. Load a lesson into your browser and choose File, Print.

### Translations

Language strings are provides in the 000/i18n/localizations.js file. Translating a course *mostly* involves updating that file with new strings. Make a copy of the language node, using the ISO code for the language. The presentation-engine's scripts should then display those strings based on the browser's language setting. If you need to provide new screenshots, the <img> links must be within localized strings in the localizations.js file so that the appropriate images are displayed. The actual image files should be within the 000/images folder, where 000 is the lesson's folder.

At runtime, the presentation-engine scripts read the localizations.js file and dynamically replace strings based on their classnames in the HTML. Thus, in the HTML file, you might have a tag like this: `<div class="l_somename">Default English content</div>`. In the localizations.js file, there will be a corresponding `"%l_somename": "Translated text"` line. 

### Authoring

There's a TextMate bundle included in this repo that you can use to write your own lessons or slides. Check out the [how-to document](https://github.com/appcelerator-training/presentation-engine/blob/master/bundle_howto.md) for help on installing and using that bundle with TextMate, Titanium Studio, or Sublime Text 2. 

See an existing lesson's index.html to get an understanding of how the HTML is structured. There's no need to modify the presenternotes.html file (though you will need a copy within the lesson's folder). Place images in the lesson's images folder. 

### Thanks to

* [reveal.js](https://github.com/hakimel/reveal.js)

(This repo is a fork of https://github.com/appcelerator-titans/presentation-engine, which includes Appcelerator-extensions and changes to https://github.com/hakimel/reveal.js)