-- Medic HESI Prep: initial schema
-- Run this in your Supabase SQL Editor (Project > SQL Editor > New Query)

-- =============================================================
-- PROGRESS: tracks flashcards and scenarios per user
-- =============================================================
create table if not exists public.progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  item_type text not null check (item_type in ('flashcard', 'scenario')),
  category_id text not null,
  item_index int not null,
  status text,
  attempts int not null default 0,
  last_correct boolean,
  ever_correct boolean not null default false,
  updated_at timestamptz not null default now(),
  unique (user_id, item_type, category_id, item_index)
);

create index if not exists progress_user_id_idx on public.progress(user_id);
create index if not exists progress_user_type_idx on public.progress(user_id, item_type);

alter table public.progress enable row level security;

drop policy if exists "Users read own progress" on public.progress;
create policy "Users read own progress"
  on public.progress for select
  using (auth.uid() = user_id);

drop policy if exists "Users insert own progress" on public.progress;
create policy "Users insert own progress"
  on public.progress for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users update own progress" on public.progress;
create policy "Users update own progress"
  on public.progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users delete own progress" on public.progress;
create policy "Users delete own progress"
  on public.progress for delete
  using (auth.uid() = user_id);


-- =============================================================
-- MOCK_EXAMS: stores completed mock exam attempts
-- =============================================================
create table if not exists public.mock_exams (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  exam_type text not null check (exam_type in ('full', 'quick')),
  questions jsonb not null,
  answers jsonb,
  score numeric,
  section_scores jsonb,
  started_at timestamptz not null default now(),
  completed_at timestamptz
);

create index if not exists mock_exams_user_id_idx on public.mock_exams(user_id);
create index if not exists mock_exams_started_at_idx on public.mock_exams(started_at desc);

alter table public.mock_exams enable row level security;

drop policy if exists "Users read own mocks" on public.mock_exams;
create policy "Users read own mocks"
  on public.mock_exams for select
  using (auth.uid() = user_id);

drop policy if exists "Users insert own mocks" on public.mock_exams;
create policy "Users insert own mocks"
  on public.mock_exams for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users update own mocks" on public.mock_exams;
create policy "Users update own mocks"
  on public.mock_exams for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users delete own mocks" on public.mock_exams;
create policy "Users delete own mocks"
  on public.mock_exams for delete
  using (auth.uid() = user_id);
