namespace RayLib {
    #include "raylib.h"
}

extern "C" {
    __declspec(dllexport) void initWindow(int width, int height, const char* title) {
        RayLib::InitWindow(width, height, title);
    }

    __declspec(dllexport) bool windowShouldClose() {
        return RayLib::WindowShouldClose();
    }

    __declspec(dllexport) void beginDrawing() {
        RayLib::BeginDrawing();
    }

    __declspec(dllexport) void endDrawing() {
        RayLib::EndDrawing();
    }

    __declspec(dllexport) void clearBackground(int r, int g, int b) {
        RayLib::ClearBackground((RayLib::Color){(unsigned char)r, (unsigned char)g, (unsigned char)b, 255});
    }

    __declspec(dllexport) void drawText(const char* text, int x, int y, int fontSize, int r, int g, int b) {
        RayLib::DrawText(text, x, y, fontSize, (RayLib::Color){(unsigned char)r, (unsigned char)g, (unsigned char)b, 255});
    }

    __declspec(dllexport) void closeWindow() {
        RayLib::CloseWindow();
    }
}
