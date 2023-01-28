# Grouping and Transforming Shapes

## Review

Great job! In this lesson, you learned how to alter shapes by using transformation functions, such as translate(), rotate(), scale(), and shear().

You also learned how to group style and transformation functions with push() and pop().

Let’s take a moment to review everything we have covered:

The rectMode() function specifies the origin point from which the rectangle is drawn.

rectMode(CENTER) specifies that the x and y coordinates passed into the rect() function are for the rectangle’s center.

rectMode(CORNER) specifies that the x and y coordinates passed into the rect() function are for the rectangle’s top left corner. If you don’t specify the rectMode(), p5.js will automatically assign the origin of rectangles to be the CORNER.

The ellipseMode() function specifies the origin point from which the ellipse is drawn.

ellipseMode(CENTER) specifies that the x and y coordinates passed into the ellipse() function are for the center of the shape. If you don’t specify the ellipseMode(), p5.js will automatically assign the origin of ellipses to be CENTER.

ellipseMode(CORNER) specifies that the x and y coordinates passed into the ellipse() function are for the top left corner.

The translate() function changes the origin of the p5.js canvas to the coordinates passed to the function.

The rotate() function rotates the p5.js coordinate system, not a specific shape. The rotate() function requires one argument—the angle for rotation in radians.
The radians() function converts a degree measurement into radians.

The angleMode() function changes whether angle values are interpreted as RADIANS or DEGREES.

The scale() function sets the size of the p5.js canvas and all the elements on it. Scale values are written in decimal percentages.

The shearX() function horizontally angles a shape by the amount specified in the argument.

The shearY() function vertically angles a shape by the amount specified in the argument.

The push() function saves the current drawing styles and transformations. The pop() function restores it back to the settings that were in effect prior to the most recent call to push().

The order makes a difference when combining multiple transformations.
