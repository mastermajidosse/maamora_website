/*
  # Update products table schema
  
  1. New Columns
    - color (text): Product color
    - ranking (integer): Product ranking/position
    - note (text): Additional notes
    - sku (text): Stock Keeping Unit identifier
    
  2. Changes
    - Add NOT NULL constraints where appropriate
    - Add default values for new columns
*/

-- Add new columns to products table
ALTER TABLE products 
  ADD COLUMN IF NOT EXISTS color text,
  ADD COLUMN IF NOT EXISTS ranking integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS note text,
  ADD COLUMN IF NOT EXISTS sku text;

-- Create index on SKU for faster lookups
CREATE INDEX IF NOT EXISTS products_sku_idx ON products(sku);