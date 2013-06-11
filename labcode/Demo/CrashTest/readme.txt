You will need an account on the Appcelerator Dashboard and a license for Appcelerator Studio to use this demo app.

The CrashTest app will need to be associated with your user ID and will need a unique GUID. Therefore, we're not providing a full, importable project. To use this app:

1. Create a new project named CrashTest
	a. Use an app ID of your choice
	b. Make sure to enable Appcelerator services
2. Add the CrashTestDummy module 
	(iOS version provided, you can download & compile the Android version from https://github.com/appcelerator/CrashTestDummy)
3. Run the app
	a. Clicking the Throw Exception button will cause a JavaScript exception which is visible on the Performance tab of the Dashboard
	b. Clicking the Hard Crash button will cause an app crash -- you'll have to reopen the app for the incident to be sent to the Dashboard. Breadcrumbs for this crash are provided, so you can demo that feature as well.
	c. Clicking the Native Crash button will crash the app, but the event won't be logged in the Dashboard. I might remove this test in future versions. 