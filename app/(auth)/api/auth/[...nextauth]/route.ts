// ✅ Archivo: app/(auth)/api/auth/[...nextauth]/route.ts

// 🔹 Forzamos a Vercel a ejecutar este endpoint en Node.js Runtime
//    (Edge no soporta bcrypt ni otras dependencias de Node)
export const runtime = "nodejs";

// 🔹 Evita el prerenderizado (Auth.js necesita rutas dinámicas)
export const dynamic = "force-dynamic";

// 🔹 Reexportamos los handlers GET y POST desde tu módulo de autenticación
//    Usa el alias @ si está configurado en tu tsconfig.json
export { GET, POST } from "@/app/(auth)/auth";
