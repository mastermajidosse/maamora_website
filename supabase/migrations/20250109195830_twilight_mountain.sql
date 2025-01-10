/*
  # Create job applications table and storage

  1. New Tables
    - `job_applications`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `user_id` (uuid, references auth.users)
      - `job_title` (text)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `phone` (text)
      - `linkedin` (text)
      - `resume_url` (text)
      - `status` (text)

  2. Storage
    - Create bucket for storing resumes

  3. Security
    - Enable RLS on job_applications table
    - Add policies for authenticated users
*/

-- Create job applications table
CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users,
  job_title text NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  linkedin text,
  resume_url text,
  status text NOT NULL DEFAULT 'pending',
  CONSTRAINT status_values CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected'))
);

-- Enable RLS
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view their own applications"
  ON job_applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own applications"
  ON job_applications
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create storage bucket for resumes if it doesn't exist
DO $$
BEGIN
    INSERT INTO storage.buckets (id, name, public)
    VALUES ('resumes', 'resumes', false)
    ON CONFLICT (id) DO NOTHING;
END $$;

-- Storage policies
CREATE POLICY "Anyone can upload resume"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Users can read their own resumes"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (bucket_id = 'resumes' AND owner = auth.uid());