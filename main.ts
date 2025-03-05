/**
 * Project: Raylib Deno Wrapper
 * Description: A dynamic library (DLL) that allows you to use Raylib with Deno.
 *
 * Author: @eujandergois
 * Created: 2025-03-04 21:48
 * License: MIT
 *
 * Copyright (c) 2025 @eujandergois
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


import {
  initWindow,
  windowShouldClose,
  beginDrawing,
  endDrawing,
  clearBackground,
  drawText,
  closeWindow,
  drawFPS,
  getScreenWidth
} from "raylib-deno";

// start a new window whith specified parameters
initWindow(800, 600, "Raylib + Deno");

// the game loop updated every frame
while (!windowShouldClose()) {
  beginDrawing(); // start drawing process

  clearBackground(0, 0, 0); // clear the background with black color
  drawText("Hello, Deno + Raylib!", 20, 20, 20, 255, 255, 255); // draw text in specified position
  drawFPS(getScreenWidth() - 50, 20);

  endDrawing(); // end drawing process
}

// close the game window if the loop ends
closeWindow();
