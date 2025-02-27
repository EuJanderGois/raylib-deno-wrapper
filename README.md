# Raylib wrapper for Deno

This repository create a wrapper with one Dinamic Library (work only on windows), it make posible to use the Raylib library in Deno.

> To use this wrapper in Linux or MacOS you need build the code in wrapper folder in your target platform.

## Getting Started

To use this wrapper in the simplest way, you can clone this repository and run the main script and be happy.

``` bash
git clone https://github.com/eujandergois/raylib-deno-wrapper.git
```

``` bash
deno task start
```

[WARNING] Don't use `--watch` flag.

[WARNING] To build the wrapper yourself you need make the needed changes in the make file to build for your target platform. Unless you use windows.

[WARNIG] This wrapper only is developed for windows in my free time, and the wrapper dont include all features of raylib, but not is hard to change the code and build yourself, mainly if you are windows user and have `C++` knowledge.

[WARNING] Remember, is easy to use in windows, but to build yourself you need configure all dependencies as raylib and modify the makefile to your target platform, including if windows users. Understand language needs `C++`.