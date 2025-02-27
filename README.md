# 🎮 Raylib Wrapper for Deno

[![Deno JS](https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&logo=deno&logoColor=white)](https://deno.land)

[![RayLib](https://img.shields.io/badge/RAYLIB-FFFFFF?style=for-the-badge&logo=raylib&logoColor=black)](https://www.raylib.com/)  

[](#)  

This repository provides a **dynamic library (DLL)** that allows you to use **Raylib** with **Deno**.  
Currently, it **only works on Windows** by default.

> **🛠 Want to use it on Linux or macOS?**  
> You’ll need to **build the wrapper manually** inside the `wrapper/` folder for your target platform.

---

## 🚀 Getting Started

### 📥 1. Clone the Repository

``` bash
git clone https://github.com/EuJanderGois/raylib-deno-wrapper.git
```

### ▶️ 2. Run the Project


```bash
deno task start
```

⚠️ **WARNING**: Do **NOT** use the `--watch` flag, as it may cause issues with Raylib's window management.

---

## 🏗️ Building the Wrapper

If you want to **build the wrapper manually**, you'll need to **modify the Makefile** for your **target platform**.  
By default, this wrapper is **designed for Windows**.

### 📌 Requirements:

- **Windows**: MinGW + Make
- **Linux/macOS**: GCC + Make

### 🔧 Build Instructions

#### **Windows (Default)**

```bash
make
```

#### **Linux/macOS**

Modify the `Makefile` and run:

```bash
make
```

---

## 📁 Project Structure


```pgsql

📂 raylib-deno-wrapper/
├── 📂 wrapper/           # C++ wrapper for Raylib
│   ├── 📂 build          # dll files
|	│   ├── raylib.dll
│   ├── raylib.cpp        # Wrapper source code
│   ├── raylib.ts         # ts file to make the wrapper exports
│   ├── Makefile          # Build script
├── main.ts               # the main code of application
├── deno.json             # Deno configuration
├── README.md             # Documentation
├── LICENSE               # License file
```

---

## 🔥 Features

✔️ **Easy to use** - Works with simple **Deno bindings**  
✔️ **Minimal setup** - Just **clone & run**  
✔️ **Raylib support** - Uses **Raylib 5.0** for rendering  
✔️ **Cross-platform (with modifications)**

---

## 📜 License

This project is **open-source** and licensed under the **MIT License**. See the LICENSE file for details.

---

## ❤️ Contributing

Do you want to improve this wrapper? PRs and contributions are welcome!

- Fork the repository
- Make your changes
- Submit a **Pull Request**

Enjoy coding! 🚀🎮