# Images And Videos

## Review

In this lesson, we learned how to bring media into our p5.js Sketches with images and videos.

We also learned how to play around with them through filters and pixel manipulation.

Let’s take a moment to review what we covered:

The loadImage() function is used to load an external image into your p5 Sketch. The function must be provided with the path to the image as an argument in string format.

The preload() function is meant to hold any code for loading media that needs to be completely loaded before the setup() function and draw() loop run.

The image() function draws an image to the canvas, taking in the given image element and the x and y location of where the image should be drawn.

Optionally, arguments for width, height, and crop dimensions can be given to the function.

The createVideo() function creates an HTML video element that is displayed outside of the sketch. It takes in a single path to a video as a string.

p5.js supports various methods that affect playback of videos, such as .loop(), .play(), .stop(), .pause(), and .volume().

Filters are a way to apply effects all-over an entire canvas or on an image element. Both the filter() function for canvases and .filter() method for images require the type of filter as an argument.

Certain filter types require an additional numerical argument.

While filters can be used on images, they can not be applied to individual video elements.

The get() function accesses the pixel color on the canvas at a specific x,y coordinate, as an array of four values representing the red, green, blue, and alpha values.

Alternately, the get() function can return a region of the canvas as an image element—when provided with two additional parameters for width and height, it returns the region starting at the x, y position, bounded by the width and height.

When provided with no arguments, it returns the entire canvas region as an image.

The set() function sets a pixel at a given x, y coordinate to a color, which can be an array of four RGBA values, a single greyscale value, or a p5.js color element.

To reflect changes made with the set() function, you must call the updatePixels() function.

The pixels array provides a faster way to read and modify pixels. It lists the R, G, B, A values for every pixel in an image or canvas in one single array.

Before accessing the pixels array, you must load the pixels with the loadPixels() function.

After making modifications to the pixels array, you must call updatePixels() to see those changes reflected.
