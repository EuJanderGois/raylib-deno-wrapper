const lib = Deno.dlopen("./wrapper/build/raylib.dll", {
    initWindow: { parameters: ["i32", "i32", "pointer"], result: "void" },
    windowShouldClose: { parameters: [], result: "bool" },
    beginDrawing: { parameters: [], result: "void" },
    endDrawing: { parameters: [], result: "void" },
    clearBackground: { parameters: ["i32", "i32", "i32"], result: "void" },
    drawText: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    closeWindow: { parameters: [], result: "void" },
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

// wrapper functions
export function InitWindow(width: number, height: number, title: string) {
    const titlePtr = toCString(title);
    lib.symbols.initWindow(width, height, titlePtr);
}

export function WindowShouldClose(): boolean {
    return lib.symbols.windowShouldClose();
}

export function BeginDrawing() {
    lib.symbols.beginDrawing();
}

export function EndDrawing() {
    lib.symbols.endDrawing();
}

export function ClearBackground(r: number, g: number, b: number) {
    lib.symbols.clearBackground(r, g, b);
}

export function DrawText(texto: string, x: number, y: number, fontSize: number, r: number, g: number, b: number) {
    const textPtr = toCString(texto);
    lib.symbols.drawText(textPtr, x, y, fontSize, r, g, b);
}

export function CloseWindow() {
    lib.symbols.closeWindow();
}
