# hometest

Repositori ini berisi hasil pengerjaan *home test* yang terdiri dari dua bagian utama: **Tugas 1 (FizzBuzz)** menggunakan **Java**, dan **Tugas 2 (Todo App)** yang terbagi menjadi `backend` (Java / Maven) dan `frontend`.

## Struktur Folder

```text
hometest/
├── tugas1-fizzbuzz/     # Program FizzBuzz berbasis Java (FizzBuzz.java & FizzBuzz.class)
├── tugas2-todo-app/     # Aplikasi Todo App
│   ├── backend/         # Backend Java berbasis Maven (.mvn/wrapper, src, mvnw, mvnw.cmd, pom.xml)
│   └── frontend/        # Antarmuka/aplikasi frontend
└── README.md
```

### 1. Menjalankan Tugas 1 — FizzBuzz (`tugas1-fizzbuzz`)

Masuk ke folder `tugas1-fizzbuzz`, kompilasi file sumber `FizzBuzz.java` (jika ada perubahan kode), lalu jalankan kelas `FizzBuzz`:

```bash
cd tugas1-fizzbuzz
javac FizzBuzz.java
java FizzBuzz
```

### 2. Menjalankan Tugas 2 — Todo App (`tugas2-todo-app`)

Kembali ke folder utama repositori (`cd ..`), lalu jalankan **Backend** dan **Frontend**:

#### Backend (`tugas2-todo-app/backend`)

Jalankan menggunakan **Maven Wrapper**:

```bash
cd tugas2-todo-app/backend
./mvnw spring-boot:run
```


#### Frontend (`tugas2-todo-app/frontend`)

Buka terminal baru atau pindah ke folder `frontend`:

```bash
cd tugas2-todo-app/frontend
npm install
npm run dev
```
