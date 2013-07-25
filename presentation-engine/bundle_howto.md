# Introduction

To ease the development of our HTML-based training materials, we have created a Textmate bundle. It contains various easily-insertable snippets of code that you can use to add new slides, slide elements, or language strings. You can install this bundle into TextMate, Titanium Studio, or Sublime Text 2.

# Installing the bundle

## Installing into TextMate

1. Download the tmbundle file to a convenient location on your computer
2. In Finder, choose Go, Go To Folder then type ~/Library/Application Support/TextMate and click Go
3. If necessary, create a folder named Bundles. Otherwise, show the contents of that folder
4. Drag the .tmbundle file to the Bundles folder
5. Open TextMate and choose Bundles, Bundle Editor, Reload Bundles

## Installing into Titanium Studio

1. Download the tmbundle file to a convenient location on your computer
2. In Titanium Studio, choose Commands, Bundle Development, Convert TextMate Bundle
3. Select the tmbundle file you downloaded and click Open

## Installing into Sublime Text 2

To install, simply drop the .tmbundle file into the Packages folder in your Sublime Text 2 installation. Restart Sublime Text 2 and the bundle's snippets should be available.

# Using the snippets

Our bundle includes only snippets (no commands, macros, etc.). Each has a tab-shortcut, though you can insert the snippets manually. To use the tab-shortcuts, you enter the snippets name and press the [TAB] key on your keyboard. For example, to add a new slide, you'd position your insertion point on a new line after a `</section>` tag, type `slide` and press [TAB].

# Modifying or updating the bundle

For this, you'll probably need TextMate. Perhaps you can edit the tmbundle file in other applications, dunno. In 

1. In TextMate, choose Bundles, Bundle Editor
2. Expand the Appcelerator HTML Slides bundle
3. Edit as desired:
	* To edit an existing snippet
		1. Select it
		2. Modify the code in the Edit Snippet box
		3. Click on one of the other snippet items to save your changes.
	* To create a new snippet
		1. Write and test the HTML/text your snippet will insert first, then select it and copy it to your clipboard
		2. In the Bundle Editor, with the Appcelerator HTML Slides bundle selected, click the + (plus) button and choose New Snippet
		3. Enter a name for your snippet
		4. In the Edit Snippet box, paste your code
		5. Click on one of the other snippet items to save your changes.
4. (Optional) If you want to submit your changes to our repo for others to use, you'll need to export the bundle:
	1. Open Finder and navigate to the folder that holds the local copy of your fork of the presentation-engine repo
	2. From the Bundle Editor window, drag Appcelerator HTML Slides to the Finder window
	3. Push your update to your repo
	4. Submit a pull request




