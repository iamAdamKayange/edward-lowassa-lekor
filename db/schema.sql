CREATE TABLE IF NOT EXISTS campaign_poll_votes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  choice TEXT NOT NULL CHECK (choice IN (
    'Maendeleo ya kitaaluma',
    'Ustawi na ushiriki wa wanachama',
    'Ubora wa huduma za famasia',
    'Sauti na uwakilishi imara'
  )),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS campaign_endorsements (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
