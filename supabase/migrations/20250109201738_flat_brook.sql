/*
  # Newsletter Subscribers Schema

  1. New Table
    - subscribers
      - id (uuid, primary key)
      - email (text, unique)
      - subscribed_at (timestamp)
      - confirmed_at (timestamp, nullable)
      - unsubscribed_at (timestamp, nullable)

  2. Security
    - Enable RLS
    - Add policies for inserting and viewing subscribers
*/

CREATE TABLE IF NOT EXISTS subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  confirmed_at timestamptz,
  unsubscribed_at timestamptz,
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Enable Row Level Security
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Anyone can subscribe"
  ON subscribers
  FOR INSERT
  TO public
  WITH CHECK (unsubscribed_at IS NULL);

CREATE POLICY "Subscribers can view their own subscription"
  ON subscribers
  FOR SELECT
  TO public
  USING (true);