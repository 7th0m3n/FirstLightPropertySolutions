# First Light Property Solutions

Landing page for the company.

## Supabase Configuration

Create a `.env.local` file at the project root and add the following variables with the values from your Supabase project settings:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are used for client-side access.
- `SUPABASE_SERVICE_ROLE_KEY` must remain server-side only and is required by the API routes.

### Database Tables

Provision two tables in Supabase (both with a JSONB column named `payload`):

1. `seller_leads`
   - Columns: `id` (uuid, default `uuid_generate_v4()`), `created_at` (timestamp, default `now()`), `full_name`, `email`, `phone`, `payload`.
2. `investor_leads`
   - Same column layout as `seller_leads`.

Enable Row Level Security and create insert policies that allow the service role to insert rows.

Run `npm install` after adding the `@supabase/supabase-js` dependency if it has not been installed yet on your machine.
