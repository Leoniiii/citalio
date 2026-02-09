# 📋 CITALIO - Guía del Proyecto

## 🎯 Visión General
Sistema de gestión de citas y calendario para pequeños negocios de servicios (peluquerías, masajistas, entrenadores personales, estéticas, fisioterapeutas, coaches, etc.). Los profesionales crean y gestionan internamente las citas de sus clientes.

---

## 🔴 Problema que Resuelve
- **Pain point:** Pequeños negocios usando papel, Excel o WhatsApp para gestionar citas
- **Solución:** Plataforma profesional de agenda + citas + pagos + notificaciones
- **Target:** Negocios con poco conocimiento técnico que necesitan organizar sus citas de forma profesional

---

## 🚀 MVP - Funcionalidades Clave (MUST HAVE)

### 1️⃣ Autenticación y Cuentas
**Para los negocios:**
- [ ] Registro / login
- [ ] Recuperar contraseña
- [ ] Perfil del negocio:
  - Nombre
  - Tipo de servicio
  - Horarios de apertura
  - Zona horaria
  - Logo / branding básico

### 2️⃣ Gestión de Servicios
Cada negocio puede crear sus servicios:
- [ ] Nombre del servicio
- [ ] Duración (30 min, 60 min…)
- [ ] Precio
- [ ] Descripción
- [ ] Profesional asignado (si aplica)

**Ejemplo:** Corte de pelo – 30 min – 15€

### 3️⃣ Agenda / Calendario (CORE)
**Funcionalidades más importantes:**
- [ ] Vista de calendario (día / semana)
- [ ] Bloques de tiempo disponibles
- [ ] Bloqueo manual de horas
- [ ] Reservas visibles por color / estado
- [ ] Prevención de overbooking

💡 *Angular brilla aquí.*

### 4️⃣ Gestión de Citas (Creación Manual por Profesional)
El profesional crea las citas manualmente en el calendario:
- [ ] Añadir cita especificando cliente (nombre, teléfono, email)
- [ ] Seleccionar duración en minutos
- [ ] Asignar servicio a la cita
- [ ] Registrar estado de pago (pagada/pendiente)
- [ ] Editar o cancelar citas según sea necesario
- [ ] Vista en calendario (día/semana) con citas bloqueadas por horario

### 5️⃣ Estados de la Reserva
- [ ] Pendiente
- [ ] Confirmada
- [ ] Cancelada
- [ ] No show

Importante para métricas futuras.

### 6️⃣ Notificaciones
**MVP:**
- [ ] Email de confirmación
- [ ] Email de recordatorio (24h antes)

**Fase 2:**
- [ ] WhatsApp (Twilio) → **Diferenciador clave para este mercado**
- [ ] SMS

### 7️⃣ Pagos (CRÍTICO para Monetización)
- [ ] Integración Stripe
- [ ] Webhooks controlados
- [ ] Historial de pagos

**Nota:** No es opcional. Es importante desde MVP.

### 8️⃣ Panel de Administración
Dashboard con:
- [ ] Reservas del día
- [ ] Próximas citas
- [ ] Ingresos (si hay pagos)
- [ ] Servicios más reservados

---

## ❌ QUÉ NO HACER EN MVP

❌ App móvil nativa  
❌ IA / recomendaciones  
❌ Multi-idioma  
❌ CRM avanzado  
❌ Facturación compleja  

👉 **Regla:** Agenda + reservas + notificaciones + pagos = suficiente para vender

---

## 🛠 Stack Tecnológico

### 🖥 Frontend - Angular
✔ Excelente para dashboard complejo

**Recomendaciones:**
- Angular standalone components
- Angular Material o Tailwind CSS
- Reactive Forms
- Guards para auth
- Lazy loading por módulos

### ⚙ Backend - NestJS (API)
✔ Excelente elección para:
- Arquitectura escalable y robusta
- Proyectos empresariales
- Inyección de dependencias

**Funcionalidades:**
- Auth (JWT)
- CRUD de citas
- Gestión de usuarios
- Webhooks de Stripe
- Envío de emails

### 🗄 Base de Datos
- **PostgreSQL** (recomendado)
- **Prisma** como ORM

**Modelos clave:**
```
- User
- Business
- Service
- Booking
- Payment
```

### 🔐 Autenticación
⭐ **JWT es más flexible para multi-tenant** que NextAuth

### 📧 Emails
- Resend (recomendado)
- SendGrid
- Nodemailer

### 💳 Pagos
- **Stripe** (webhooks bien controlados)

### ☁ Infraestructura
- **Railway / Heroku / AWS** (NestJS)
- **Railway / Supabase / Neon** (DB)
- **Cloudinary** (imágenes)

---

## 🏗 Arquitectura

```
Angular Dashboard + Booking UI
        ↓
NestJS API (Auth, lógica negocio)
        ↓
PostgreSQL + Prisma
```

---

## 💰 Monetización

Definir desde el inicio:

- **Plan Gratuito:** X reservas / mes
- **Plan Pro:** 10–20€/mes
- **Trial:** 7–14 días

Esto hace que cada feature tenga sentido económico.

---

## 🎬 Orden de Desarrollo (IMPORTANTE)

### Sprint 1 - MVP Core
1. Backend: Modelos BD + Auth (JWT)
2. Frontend: Auth + Login
3. Backend: CRUD Servicios
4. Frontend: Gestión de Servicios
5. Backend: CRUD Calendario + Prevención overbooking
6. Frontend: Calendario (Angular brilla aquí)
7. Backend: CRUD Reservas públicas
8. Frontend: Página pública de reservas
9. Backend: Email básico
10. Backend: Stripe integration

### Sprint 2 - Mejoras
- WhatsApp notifications (Twilio)
- Dashboard con métricas
- Mejoras UI/UX

---

## ⚡ Prioridades Clave

| Prioridad | Qué | Por qué |
|-----------|-----|--------|
| 🔴 CRÍTICA | Calendario + Reservas | Core del producto |
| 🔴 CRÍTICA | Pagos | Para monetizar |
| 🟡 ALTA | Email básico | Requierement mínimo |
| 🟡 ALTA | Auth + Multi-tenant | Fundacional |
| 🟢 MEDIA | WhatsApp | Diferenciador (pero fase 2) |
| 🟢 MEDIA | Dashboard | Nice to have |

---

## 🚀 Próximos Pasos Inmediatos

- [ ] Definir modelo de BD exacto (Prisma schema)
- [ ] Empezar con NestJS backend
- [ ] Estructura de carpetas Angular
- [ ] Setup de JWT auth

---

## 📝 Notas Importantes

- **No dilatar MVP por "perfección"**
- **Lanzar rápido, iterar después**
- **Cada feature debe tener sentido económico**
- **Multi-tenant desde el inicio (arquitectura)**

---

**Última actualización:** 8 Febrero 2026
**Estado:** En desarrollo
