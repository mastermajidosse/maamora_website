/*
  # User Roles and Relationships Schema

  1. New Tables
    - roles
      - id (uuid, primary key)
      - name (text, unique)
      - description (text)
      - created_at (timestamp)
      - updated_at (timestamp)
    
    - user_roles
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - role_id (uuid, foreign key)
      - created_at (timestamp)
    
    - product_categories
      - id (uuid, primary key)
      - product_id (uuid, foreign key)
      - category_id (uuid, foreign key)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add appropriate policies
*/

-- Roles Table
CREATE TABLE IF NOT EXISTS roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- User Roles Table (Many-to-Many relationship between Users and Roles)
CREATE TABLE IF NOT EXISTS user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  role_id uuid REFERENCES roles(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, role_id)
);

-- Product Categories Table (Many-to-Many relationship between Products and Categories)
CREATE TABLE IF NOT EXISTS product_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(product_id, category_id)
);

-- Enable Row Level Security
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;

-- Roles Policies
CREATE POLICY "Roles are viewable by authenticated users"
  ON roles
  FOR SELECT
  TO authenticated
  USING (true);

-- User Roles Policies
CREATE POLICY "Users can view their own roles"
  ON user_roles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Product Categories Policies
CREATE POLICY "Product categories are viewable by everyone"
  ON product_categories
  FOR SELECT
  TO public
  USING (true);

-- Add updated_at trigger for roles table
CREATE TRIGGER update_roles_updated_at
  BEFORE UPDATE ON roles
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();

-- Insert default roles
INSERT INTO roles (name, description)
VALUES 
  ('admin', 'Administrator with full access'),
  ('vendor', 'Seller who can manage their own products'),
  ('customer', 'Regular customer user')
ON CONFLICT (name) DO NOTHING;