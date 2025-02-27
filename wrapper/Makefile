TARGET = build/raylib
SRC = raylib.cpp
OUTPUT = $(TARGET).dll

INCLUDE_DIR = include

CC = g++
CFLAGS = -shared -fPIC -Iinclude -static
LDFLAGS = -static-libgcc -static-libstdc++ -s -lraylib -L/mingw64/lib -L/mingw64/bin -L/mingw64/include -lwinmm -lgdi32 -lopengl32

# Comandos para gerar a DLL
all: $(OUTPUT)

$(OUTPUT): $(SRC)
	$(CC) $(CFLAGS) -o $(OUTPUT) $(SRC) $(LDFLAGS)

clean:
	rm -f $(OUTPUT) $(OBJ)