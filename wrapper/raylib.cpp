/**
 * Project: Raylib Deno Wrapper
 * Description: A dynamic library (DLL) that allows you to use Raylib with Deno.
 *
 * Author: @eujandergois
 * Created: 2025-03-04 23:08
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


namespace raylib {
    #include "raylib.h"
}

extern "C" {

    //
    // Window-related functions
    //

    __declspec(dllexport) void initWindow(int width, int height, const char* title) {
        raylib::InitWindow(width, height, title);
    }

    __declspec(dllexport) void closeWindow() {
        raylib::CloseWindow();
    }

    __declspec(dllexport) bool windowShouldClose() {
        return raylib::WindowShouldClose();
    }

    __declspec(dllexport) bool isWindowReady() {
        return raylib::IsWindowReady();
    }

    __declspec(dllexport) bool isWindowFullscreen() {
        return raylib::IsWindowFullscreen();
    }

    __declspec(dllexport) bool isWindowHidden() {
        return raylib::IsWindowHidden();
    }

    __declspec(dllexport) bool isWindowMinimized(){
        return raylib::IsWindowMinimized();
    }

    __declspec(dllexport) bool isWindowMaximized(){
        return raylib::IsWindowMaximized();
    }

    __declspec(dllexport) bool isWindowFocused(){
        return raylib::IsWindowFocused();
    }

    __declspec(dllexport) bool isWindowResized(){
        return raylib::IsWindowResized();
    }

    // need implement 
    __declspec(dllexport) bool isWindowState(unsigned int flag){
        return raylib::IsWindowState(flag);
    }

    // need implement 
    __declspec(dllexport) void setWindowState(unsigned int flags){
        return raylib::SetWindowState(flags);
    }

    // need implement 
    __declspec(dllexport) void clearWindowState(unsigned int flags){
        return raylib::ClearWindowState(flags);
    }

    __declspec(dllexport) void toggleFullscreen(){
        return raylib::ToggleFullscreen();
    }

    __declspec(dllexport) void toggleBorderlessWindowed(){
        return raylib::ToggleBorderlessWindowed();
    }

    __declspec(dllexport) void maximizeWindow(){
        return raylib::MaximizeWindow();
    }

    __declspec(dllexport) void minimizeWindow(){
        return raylib::MinimizeWindow();
    }

    __declspec(dllexport) void restoreWindow(){
        return raylib::RestoreWindow();
    }

    // dependent of image importing
    // need implement
    __declspec(dllexport) void setWindowIcon(raylib::Image image){
        return raylib::SetWindowIcon(image);
    }

    // dependent of image importing
    // need implement
    __declspec(dllexport) void setWindowIcons(raylib::Image *images, int count){
        return raylib::SetWindowIcons(images, count);
    }

    __declspec(dllexport) void setWindowTitle(const char *title){
        return raylib::SetWindowTitle(title);
    }

    __declspec(dllexport) void setWindowPosition(int x, int y){
        return raylib::SetWindowPosition(x, y);
    }

    __declspec(dllexport) void setWindowMonitor(int monitor){
        return raylib::SetWindowMonitor(monitor);
    }

    __declspec(dllexport) void setWindowMinSize(int width, int height){
        return raylib::SetWindowMinSize(width, height);
    }

    __declspec(dllexport) void setWindowMaxSize(int width, int height){
        return raylib::SetWindowMaxSize(width, height);
    }

    __declspec(dllexport) void setWindowSize(int width, int height){
        return raylib::SetWindowSize(width, height);
    }

    __declspec(dllexport) void setWindowOpacity(float opacity){
        return raylib::SetWindowOpacity(opacity);
    }

    __declspec(dllexport) void setWindowFocused(){
        return raylib::SetWindowFocused();
    }

    __declspec(dllexport) int getScreenWidth(){
        return raylib::GetScreenWidth();
    }

    __declspec(dllexport) int getScreenHeight(){
        return raylib::GetScreenHeight();
    }

    // ***

    __declspec(dllexport) int getRenderWidth(){
        return raylib::GetRenderWidth();
    }

    __declspec(dllexport) int getRenderHeight(){
        return raylib::GetRenderHeight();
    }

    __declspec(dllexport) int getMonitorCount(){
        return raylib::GetMonitorCount();
    }

    __declspec(dllexport) int getCurrentMonitor(){
        return raylib::GetCurrentMonitor();
    }

    /*
    Vector2 GetMonitorPosition(int monitor);                    // Get specified monitor position
    int GetMonitorWidth(int monitor);                           // Get specified monitor width (current video mode used by monitor)
    int GetMonitorHeight(int monitor);                          // Get specified monitor height (current video mode used by monitor)
    int GetMonitorPhysicalWidth(int monitor);                   // Get specified monitor physical width in millimetres
    int GetMonitorPhysicalHeight(int monitor);                  // Get specified monitor physical height in millimetres
    int GetMonitorRefreshRate(int monitor);                     // Get specified monitor refresh rate
    Vector2 GetWindowPosition(void);                            // Get window position XY on monitor
    Vector2 GetWindowScaleDPI(void);                            // Get window scale DPI factor
    const char *GetMonitorName(int monitor);                    // Get the human-readable, UTF-8 encoded name of the specified monitor
    void SetClipboardText(const char *text);                    // Set clipboard text content
    const char *GetClipboardText(void);                         // Get clipboard text content
    Image GetClipboardImage(void);                              // Get clipboard image
    void EnableEventWaiting(void);                              // Enable waiting for events on EndDrawing(), no automatic event polling
    void DisableEventWaiting(void);                             // Disable waiting for events on EndDrawing(), automatic events polling

    */

    // Cursor-related functions

    __declspec(dllexport) void showCursor(){
        return raylib::ShowCursor();
    }

    __declspec(dllexport) void hideCursor(){
        return raylib::HideCursor();
    }

    __declspec(dllexport) bool isCursorHidden(){
        return raylib::IsCursorHidden();
    }

    __declspec(dllexport) void enableCursor(){
        return raylib::EnableCursor();
    }

    __declspec(dllexport) void disableCursor(){
        return raylib::DisableCursor();
    }

    __declspec(dllexport) bool isCursorOnScreen(){
        return raylib::IsCursorOnScreen;
    }

    //
    // Drawing-related functions
    //

    __declspec(dllexport) void clearBackground(int r, int g, int b) {
        raylib::ClearBackground((raylib::Color){(unsigned char)r, (unsigned char)g, (unsigned char)b, 255});
    }

    __declspec(dllexport) void beginDrawing() {
        raylib::BeginDrawing();
    }

    __declspec(dllexport) void endDrawing() {
        raylib::EndDrawing();
    }

    //
    // Timing-related functions
    //

    __declspec(dllexport) void setTargetFPS(int fps){
        return raylib::SetTargetFPS(fps);
    }

    __declspec(dllexport) float getFrameTime(){
        return raylib::GetFrameTime();
    }

    __declspec(dllexport) double getTime(){
        return raylib::GetTime();
    }

    __declspec(dllexport) int getFPS(){
        return raylib::GetFPS();
    }

    // Input-related functions: keyboard

    __declspec(dllexport) bool isKeyPressed(int key){
        return raylib::IsKeyPressed(key);
    }

    __declspec(dllexport) bool isKeyPressedRepeat(int key){
        return raylib::IsKeyPressedRepeat(key);
    }

    __declspec(dllexport) bool isKeyDown(int key){
        return raylib::IsKeyDown(key);
    }

    __declspec(dllexport) bool isKeyReleased(int key){
        return raylib::IsKeyReleased(key);
    }

    __declspec(dllexport) bool isKeyUp(int key){
        return raylib::IsKeyUp(key);
    }

    __declspec(dllexport) int getKeyPressed(){
        return raylib::GetKeyPressed();
    }

    __declspec(dllexport) int getCharPressed(){
        return raylib::GetCharPressed();
    }

    __declspec(dllexport) void setExitKey(int key){
        return raylib::SetExitKey(key);
    }

    //
    // Text drawing functions
    //

    __declspec(dllexport) void drawFPS(int posX, int posY){
        return raylib::DrawFPS(posX, posY);
    }

    __declspec(dllexport) void drawText(const char* text, int x, int y, int fontSize, int r, int g, int b) {
        raylib::DrawText(text, x, y, fontSize, (raylib::Color){(unsigned char)r, (unsigned char)g, (unsigned char)b, 255});
    }
}
