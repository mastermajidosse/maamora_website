/*
  # Add Email Validation Function

  1. New Function
    - Create a function to validate email format using regex
    - Add trigger to validate email before insert/update
  
  2. Security
    - Function runs with security definer to ensure consistent validation
*/

-- Create email validation function
CREATE OR REPLACE FUNCTION validate_email(email text)
RETURNS boolean AS $$
BEGIN
  RETURN email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add email validation trigger function
CREATE OR REPLACE FUNCTION trigger_validate_email()
RETURNS TRIGGER AS $$
BEGIN
  IF NOT validate_email(NEW.email) THEN
    RAISE EXCEPTION 'Invalid email format';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add trigger to profiles table
DROP TRIGGER IF EXISTS validate_email_trigger ON profiles;
CREATE TRIGGER validate_email_trigger
  BEFORE INSERT OR UPDATE OF email ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION trigger_validate_email();

-- Add trigger to auth.users table
DROP TRIGGER IF EXISTS validate_auth_email_trigger ON auth.users;
CREATE TRIGGER validate_auth_email_trigger
  BEFORE INSERT OR UPDATE OF email ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION trigger_validate_email();