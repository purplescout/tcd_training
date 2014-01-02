# TCD Certification Training

This project houses the training materials needed for the Titanium Certified Developer (TCD) Training course, which corresponds to the Titanium Certified Developer (TCD) certification exam.

**Current version support:** Appcelerator Titanium ver 3.2

# License

Unless otherwise stated, the slides and contents of this repository are licensed under the [Attribution-NonCommercial-ShareAlike 3.0 Unported (CC BY-NC-SA 3.0)](http://creativecommons.org/licenses/by-nc-sa/3.0/) license. You are free to use, copy, distribute, and adapt these materials under these terms:

* You cannot use these slides or derivatives for commercial purposes (e.g. classes you charge for). Commercial use is restricted to Authorized Training Partners (ATPs). Visit [http://www.appcelerator.com/form/forms/www/partner-training-submit](http://www.appcelerator.com/form/forms/www/partner-training-submit) for information on becoming an ATP.
* You must attribute Appcelerator, Inc. in any use or derivative of these materials.
* If you distribute these materials, you must do so under the same license.

These slides use [Crystal Clear](http://commons.wikimedia.org/wiki/Crystal_Clear) icons, which are licensed under the [LGPL](http://www.everaldo.com/crystal/?action=license) license.


## Instructions 

Simply download and extract the zip file to create a directory structure as shown below.  

```
some_folder  
   - TCD Training Course (folder)  
      - index.html  <-- TOC for the whole course, open this file 
      - 00courseintro (folder)  
            - index.html <-- TOC for the lesson  
      - 01gettingstarted
      - (... additional lessons)
      - labcode (folder containing starting/finished lab code)  
      - presentation-engine
```

### Running a presentation

1. Open the *coursename*/index.html in your browser. Safari and Chrome work best, Firefox works too.
2. Click the "Notes" icon to open a separate window (you might need to override any pop-up blocker to see that window). You don't need to reload or do anything with that window. It will automatically display presenter notes as you step through the slides. 
3. Click the home icon, which will take you back to the course TOC slide. Within a lesson, click the up/left arrow icon to return to that lesson's first slide.

### Navigating within a presentation

Press right or left arrow keys to move forward/back in a presentation. Some slides include "vertically nested" sub-slides. Such nested slides will show a down-pointing arrow. Press the down-arrow key to move through those sub-slides.

Press the Spacebar to see a partial overview of the slides in a presentation.

Click the house icon to return to the course table of contents slide.

Click the blue arrow icon to return to the first slide in the current lesson

<!--
### Downloading a specific version of the slides

We recently started tagging releases of these slides with the corresponding Titanium version. That way, you can download slides for a given version.

**Step 1:** Click Tags as shown:

<img src='https://img.skitch.com/20120808-cushunc9ksj4i2tux99sxka2hc.png' width='640' alt='Downloading at a given tag step 1' style='border: 1px solid #000;'>

**Step 2:** Click the download version; you'll get a zip of the repo at that state:

<img src='https://img.skitch.com/20120808-mk19ffd8bc1t9sgpu3muj37w9x.png' width='640' alt='Download the zip file' style='border: 1px solid #000;'>

**Step 3:** Unzip the archive you downloaded and rename it to **tcd_certification**
-->

# Corrections and Contributions

We'd love your help with corrections and especially translations. 

## Corrections and bug reporting

*Preferred method* -- Please submit bug reports and corrections via Jira under the [Training Curriculum and Certification](https://jira.appcelerator.org/browse/TCC) project. If you can't submit to that project, please submit to the [Community](https://jira.appcelerator.org/browse/TC) project and include "TCC" in the description or summary so that your ticket can be triaged and moved. Will we respond to bugs reported via GitHub? Sure. But, please save us some busy-work and submit them to Jira so they can be tracked and prioritized with the rest of our work.

## Translations

Course content is provided as HTML pages, in which the actual text is read in at display time from a JavaScript strings file. Which strings are read in are based on the *browser's language setting.* Which text is replaced where is based on the HTML element's ID and must begin with "%l\_" (e.g. &lt;div id="l_foo" would have a corresponding %l\_foo string in the localizations.js file). This makes translating mostly a process of updating that strings file. To translate a course to a new language: 


1. Fork the repo and pull a copy to your local system.
2. Update strings file with translated strings (more below).
3. If necessary, re-shoot screens (more below) 
4. If necessary, create a _course_name_/css/_2letterCode_.css file to contain language-specific CSS settings (more below)
5. Push your changes to GitHub and submit a pull request


### Editing the strings file 

* There are separate strings files for the course itself and per-lesson. 
* There are _two_ strings files for each of those: i18n/localizations.js is for the slides; i18n/lablocalizations.js is for the associated lab files. 

Each follows this format: 

```
String.toLocaleString({ 
  "en-US": { 
    "%l_coursename": "Building Native Mobile Apps with Titanium", 
    "%l_agenda_title": "AGENDA" 
  }, 
  "ja": { 
    "%l_coursename": "Appcelerator Titaniumによるネイティブアプリ開発", 
    "%l_agenda1_title": "アジェンダ1" 
  } 
}); 
```

To provide a new translation/language, you would copy the entire "en-US" node giving it the _two-letter ISO 639 language code_ for the target language (or the occasional 4-letter exceptions, such as en-US). Then, you'd translate each string. 

### Screenshots 

You're welcome to re-shoot screenshots to provide localized versions. However, do not overwrite the existing graphics files. Give your graphics new names, preferably in the form _existingFileName_\-2letterCode.png (such as foo-ja.png where the original was foo.png). The &lt;img> tags should all be contained within the existing language strings values. So, update your language's version of the string to load your version of the image rather than the English version. 

### Language-specific stylesheets 

In some cases, such as Asian languages, you will need to supply CSS overrides for existing styles. You might need to use custom fonts (such as Japanese scripts), adjust text sizes or RTL/LTR layout options, etc. See the css/presentation.css file for the primary list of styles used in the HTML files. You can then override any by adding a css/2letterCode.css file (such as css/ja.css). This file will be automatically read-in at display time, if present.

If you want to supply a custom font, either link to an online repository (such as Google Fonts) or make sure that the font's licensing permits redistribution and its licensing is compatible with that of our slides. 

### HTML content of slides/labs 

You should not need to update the HTML files at all. If you find mistakes or HTML issues that prevent translations, go ahead and make changes and submit your pull request. But please try to implement the strings replacement system as used elsewhere in the slides.


## Course updates 

When a course is updated, language string names will be changed (perhaps by adding a counter to the end, such as slideTitleV2). New English strings will be provided. To translate an updated version of a course, all you should need to do is: 

1. Load the HTML slides in your browser and navigate through the slides. Any new/changed slides or bullets will appear in English rather than your native language. 
2. Edit the strings files, graphics, and CSS as needed to fix the new/changed slides. 

## Translating labs

Lab steps and descriptions are provided in the lab.html files and associated i18n/lablocalizations and labimages folders, all included in the repo. The rendered content of those files are posted to wiki.appcelerator.org as a convenience for presenters and students. To translate a lab, follow the same types of steps described previously. In your pull request, or a separate email to training@appcelerator.com please note that you have translated the labs and would like them posted to the wiki. 

## Thanks to our translators

Appcelerator thanks these great Titanium community supporters for translating our TCAD materials into Japanese. Please help with TCD and we'll add your names to the list!

* kazuaki konno (@kaz_konno)
* daisuke aoki (@daoki2)
* toshiro yagi (@yagi_)
* go ando (@goando)


