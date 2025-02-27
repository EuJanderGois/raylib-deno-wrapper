import { 
  InitWindow,
  WindowShouldClose,
  BeginDrawing,
  EndDrawing,
  ClearBackground,
  DrawText,
  CloseWindow
} from "./wrapper/raylib.ts";

InitWindow(800, 600, "Raylib + Deno");

while (!WindowShouldClose()) {
  BeginDrawing();
  ClearBackground(0, 0, 0);
  DrawText("Hello, Deno + Raylib!", 200, 300, 20, 255, 255, 255);
  EndDrawing();
}

CloseWindow();
