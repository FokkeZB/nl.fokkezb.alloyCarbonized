# Alloy Carbonized
This [Titanium](http://appcelerator.com) [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) project does a simple speedtest between the code as it is produced by Alloy **now** and how it **could** be, using [Carbon](http://carbon.appersonlabs.com/) (or a simular method) for batching UI construction calls to minimize the number of trips from JS to native-land and thus possibly gain speed.

## Usage
How to get to performing the tests yourself:

1. Built the app.
   * The Alloy-plugin is disabled by comments in `tiapp.xml` to prevent it from overwriting the `Resources` folder. I made the necessary changes for the tests in the code initially produced by Alloy.
2. Repeatately click all three buttons, at least twice.
   * After each click, a simple window containing 1000 views of 9x9 pixels will be created. Click on the window to close it. The fastest score of each of the 3 tests will be shown in its button title.

## Tests
The app consists of three tests. Each button triggers another test. Each test creates the same window, but in a different way:

1. Alloy
   * Code as generated by Alloy, based on the `orginal` controller, view and style found in the project's `alloy` folder. Plain `Ti.UI.create…()` calls like you know it.
2. Alloy + Inline Carbon
   * Adapted code that uses a single call to `Carbon.UI.create()` to construct the window and all it's 1000 views at once.
3. Alloy + JSON Carbon
   * Adapted code that uses `Carbon.UI.load()` to load `/Resources/alloy/views/json.json`, which defines the window and all it's 1000 views.

## Results
In my tests, the difference between Alloy and Inline Carbon is huge, the latter being around twice as fast. The difference between Inline Carbon and JSON Carbon is small.

## Conclusions
Though this project was called *Alloy Carbonized*, it turned out not really being about either Alloy or Carbon that much. Let me explain.

### 1. Alloy
A unique feature of Alloy is it being a **MVC** framework when you're coding, but really more of a **M_C** framework once it's been build. The XML and TSS files no longer exist at that point and have been compiled down to plain `Ti.UI. ` calls that reside in your **C**ontroller code. Because of this, at runtime no time will be wasted by parsing **V**iews.

Because Alloy in the end generates good old `Ti.UI` code, it doesn't really matter that the code used in these tests was produced by Alloy. But **BECAUSE** Alloy seperates the views (and styles) it **WOULD** be quite easy to produce one call to `Carbon.UI.create()` instead.

### 2. Carbon
Carbon on the other hand IMHO isn't really that much of a framework at all… at this time. It's only focussed on the **V**iew part. So for my part, there is no discussion about what framework to use. I just like Carbon's attempt to radically reduce calls from JS to native-land and by doing so, increase speed. **That is, I think, something we all want!**

### 3. Titanium
So in the end this might not be a case for *Carbonizing* Alloy, but the Titanium SDK instead. In 3.x the method `applyProperties()` will be added to the SDK for exactly the same reason I like `Carbon.UI.create`.

**So…** why not add `Ti.UI.create()` to the next SDK and have Alloy make heavy use of this???

## Issues
Well, of course there are some issues that need our attention:

* Alloy currently wraps all views created by `Ti.UI` in `Alloy.A()`, which also get's passed the type and parent. Nothing is done with these arguments at the moment, but I guess there are plans to do so. It would be nice if only the views that have ID's need reference in JS-land.
* Alloy also keeps track of all views in the `__views` property of the controller. The same here for the previous issue. Do we really need this reference?
* Alloy strips out any parts of the view (or styles) that are not relevant for the platform or device you build for. But if you'd wanna use the new `Ti.UI.create()` without Alloy, you'd probably need some way to use platform/device selectors in the object tree you pass, much like Carbon also supports.
* Error reporting might be an issue if they arise in native-land when parsing the passed dictionary. A solution could be to state the path to the failing declaration like `Error in Windows/View[0]/View#foo/Label[0]`.

## Discussion
Probably there's much more to say. Let's do so at:

[https://groups.google.com/forum/#!topic/appc-ti-alloy/0JPSTrNrajM](https://groups.google.com/forum/#!topic/appc-ti-alloy/0JPSTrNrajM)

Also, please watch the JIRA ticket requesting this feature so escalates and hopefully will be added soon:

[https://jira.appcelerator.org/browse/TC-1592](https://jira.appcelerator.org/browse/TC-1592)