/**
 * Project: Raylib Deno Wrapper
 * Description: A dynamic library (DLL) that allows you to use Raylib with Deno.
 *
 * Author: @eujandergois
 * Created: 2025-03-04 23:39
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



const lib = Deno.dlopen("./wrapper/build/raylib.dll", {
    initWindow: { parameters: ["i32", "i32", "pointer"], result: "void" },
    closeWindow: { parameters: [], result: "void" },
    windowShouldClose: { parameters: [], result: "bool" },
    isWindowReady: { parameters: [], result: "bool" },
    isWindowFullscreen: { parameters: [], result: "bool" },
    isWindowHidden: { parameters: [], result: "bool" },
    isWindowMinimized: { parameters: [], result: "bool" },
    isWindowMaximized: { parameters: [], result: "bool" },
    isWindowFocused: { parameters: [], result: "bool" },
    isWindowResized: { parameters: [], result: "bool" },
    toggleFullscreen: { parameters: [], result: "void" },
    toggleBorderlessWindowed: { parameters: [], result: "void" },
    maximizeWindow: { parameters: [], result: "void" },
    minimizeWindow: { parameters: [], result: "void" },
    restoreWindow: { parameters: [], result: "void" },
    setWindowTitle: { parameters: ["pointer"], result: "void" },
    setWindowPosition: { parameters: ["i32", "i32"], result: "void" },
    setWindowMonitor: { parameters: ["i32"], result: "void" },
    setWindowMinSize: { parameters: ["i32", "i32"], result: "void" },
    setWindowMaxSize: { parameters: ["i32", "i32"], result: "void" },
    setWindowSize: { parameters: ["i32", "i32"], result: "void" },
    setWindowOpacity: { parameters: ["f32"], result: "void" },
    setWindowFocused: { parameters: [], result: "void" },
    getScreenWidth: { parameters: [], result: "i32" },
    getScreenHeight: { parameters: [], result: "i32" },

    beginDrawing: { parameters: [], result: "void" },
    endDrawing: { parameters: [], result: "void" },
    clearBackground: { parameters: ["i32", "i32", "i32"], result: "void" },

    drawFPS: { parameters: ["i32", "i32"], result: "void" },
    drawText: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
});

// util to convert strig to pointer
function toCString(str: string): Deno.PointerValue {
    const encoder = new TextEncoder();
    const buffer = new Uint8Array(encoder.encode(str + "\0")); // Adiciona terminador nulo
    const ptr = Deno.UnsafePointer.of(buffer);
    if (!ptr) {
        throw new Error("Falha ao alocar ponteiro para string");
    }
    return ptr;
}

//
// Window-related functions
//

/**
 * Initialize window and OpenGL context.
 */
export function initWindow(width: number, height: number, title: string) {
    const titlePtr = toCString(title);
    lib.symbols.initWindow(width, height, titlePtr);
}

/**
 * Close window and unload OpenGL context.
 */
export function closeWindow() {
    lib.symbols.closeWindow();
}

/**
 * Check if application should close (KEY_ESCAPE pressed or windows close icon clicked).
 * @returns boolean
 */
export function windowShouldClose(): boolean {
    return lib.symbols.windowShouldClose();
}

/**
 * Check if window has been initialized successfully.
 * @returns boolean
 */
export function isWindowReady(): boolean {
    return lib.symbols.isWindowReady();
}

/**
 * Check if window is currently fullscreen.
 * @returns boolean
 */
export function isWindowFullscreen(): boolean {
    return lib.symbols.isWindowFullscreen();
}

/**
 * Check if window is currently hidden.
 * @returns boolean
 */
export function isWindowHidden(): boolean {
    return lib.symbols.isWindowHidden();
}

/**
 * Check if window is currently minimized.
 * @returns boolean
 */
export function isWindowMinimized(): boolean {
    return lib.symbols.isWindowMinimized();
}

/**
 * Check if window is currently maximized.
 * @returns boolean
 */
export function isWindowMaximized(): boolean {
    return lib.symbols.isWindowMaximized();
}

/**
 * Check if window is currently focused.
 * @returns boolean
 */
export function isWindowFocused(): boolean {
    return lib.symbols.isWindowFocused();
}

/**
 * Check if window has been resized last frame.
 * @returns boolean
 */
export function isWindowResized(): boolean {
    return lib.symbols.isWindowResized();
}

/**
 * Toggle window state: fullscreen/windowed, resizes monitor to match window resolution.
 */
export function toggleFullscreen(): void {
    lib.symbols.toggleFullscreen();
}

/**
 * Toggle window state: borderless windowed, resizes window to match monitor resolution.
 */
export function toggleBorderlessWindowed(): void {
    lib.symbols.toggleBorderlessWindowed();
}

/**
 * Set window state: maximized, if resizable.
 */
export function maximizeWindow(): void {
    lib.symbols.maximizeWindow();
}

/**
 * Set window state: minimized, if resizable.
 */
export function minimizeWindow(): void {
    lib.symbols.minimizeWindow();
}

/**
 * Set window state: not minimized/maximized.
 */
export function restoreWindow(): void {
    lib.symbols.restoreWindow();
}

/**
 * Set title for window.
 * @param title The new title.
 */
export function setWindowTitle(title: string): void {
    const titlePtr = toCString(title);
    lib.symbols.setWindowTitle(titlePtr);
}

/**
 * Set window position on screen.
 * @param x X axys position
 * @param y Y axys position
 */
export function setWindowPosition(x: number, y: number): void {
    lib.symbols.setWindowPosition(x, y);
}

/**
 * Set monitor for the current window.
 * @param monitor The target monitor.
 */
export function setWindowMonitor(monitor: number): void {
    lib.symbols.setWindowMonitor(monitor);
}

/**
 * Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE).
 * @param width The minimum width.
 * @param height The minimum height.
 */
export function setWindowMinSize(width: number, height: number): void {
    lib.symbols.setWindowMinSize(width, height);
}

/**
 * Set window maximum dimensions (for FLAG_WINDOW_RESIZABLE).
 * @param width The maximum width.
 * @param height The maximum height.
 */
export function setWindowMaxSize(width: number, height: number): void {
    lib.symbols.setWindowMaxSize(width, height);
}

/**
 * Set window dimensions.
 * @param width The window width.
 * @param height The window height.
 */
export function setWindowSize(width: number, height: number): void {
    lib.symbols.setWindowSize(width, height);
}

/**
 * Set window opacity.
 * @param opacity The target opacity (0.0 - 1.0).
 */
export function setWindowOpacity(opacity: number): void {
    lib.symbols.setWindowOpacity(opacity);
}

/**
 * Set window focused.
 */
export function setWindowFocused(): void {
    lib.symbols.setWindowFocused();
}

/**
 * Get current screen width.
 * @returns number
 */
export function getScreenWidth(): number {
    return lib.symbols.getScreenWidth();
}

/**
 * Get current screen height.
 * @returns number
 */
export function getScreenHeight(): number {
    return lib.symbols.getScreenHeight();
}




// ***



/**
 * Set background color (framebuffer clear color).
 * @param r RED
 * @param g GREEN
 * @param b BLUE
 */
export function clearBackground(r: number, g: number, b: number) {
    lib.symbols.clearBackground(r, g, b);
}

/**
 * Setup canvas (framebuffer) to start drawing.
 */
export function beginDrawing() {
    lib.symbols.beginDrawing();
}

/**
 * End canvas drawing and swap buffers (double buffering).
 */
export function endDrawing() {
    lib.symbols.endDrawing();
}

/**
 * Draw current FPS.
 * @param posX FPS postion X axys.
 * @param posY FPS position Y axys.
 */
export function drawFPS(posX: number, posY: number): void {
    lib.symbols.drawFPS(posX, posY);
}

/**
 * Draw text (using default font).
 * @param text The text to display.
 * @param x The text position X axis.
 * @param y The text position Y axis.
 * @param fontSize The font size.
 * @param r RED
 * @param g GREEN
 * @param b BLUE
 */
export function drawText(text: string, x: number, y: number, fontSize: number, r: number, g: number, b: number) {
    const textPtr = toCString(text);
    lib.symbols.drawText(textPtr, x, y, fontSize, r, g, b);
}
