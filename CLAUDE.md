# Manu & Flore

## What is this app?
A wedding organiser for ~30 friends and family.
Elegant blue theme.

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Supabase (database, auth, storage)
- Leaflet.js (map)
- Lilita One (Google Font for logo)

## Design System
- Background: #F0F4FF (light blue)
- Blue: #6B8FD4
- Sky: #A8C5F0
- Pale Blue: #D4E4FF
- Charcoal: #2D2D2D
- Logo font: Lilita One, uppercase, white,
  WebkitTextStroke: 2px #2D2D2D
- Buttons: pill-shaped
- Cards: soft rounded corners, gentle shadow
- Mobile-first

## Event
- Name: Manu & Flore
- Date: Friday 22 May 2026 at 19:00
- Location: 18 route du Passoir

## Pages (bottom nav order)
1. /profile       → Profile & Join form
2. /announcements → News feed
3. /planning      → Artists + Schedule (Artists tab only live)
4. /cars          → Carpooling
5. /tents         → Sleeping arrangements
6. /map           → Driver map (Leaflet)

## Database Tables
users, cars, car_passengers, tents, tent_guests,
announcements, djs, events, settings

## Key Rules
- Always run npx tsc --noEmit after changes
- One feature per prompt, one page at a time
- Never touch files not mentioned in the prompt
- Always use shared components from /components/ui
- Always mobile-first
