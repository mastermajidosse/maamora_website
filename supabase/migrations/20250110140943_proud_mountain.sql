-- Set default role for new users as 'customer'
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Insert into profiles
  INSERT INTO public.profiles (id, email)
  VALUES (new.id, new.email);
  
  -- Assign customer role by default
  INSERT INTO public.user_roles (user_id, role_id)
  SELECT new.id, r.id
  FROM roles r
  WHERE r.name = 'customer';
  
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Make othman elmajid an admin
DO $$
DECLARE
  user_id uuid;
  admin_role_id uuid;
BEGIN
  -- Get othman's user ID (assuming email is othman.elmajid@example.com)
  SELECT id INTO user_id
  FROM auth.users
  WHERE email = 'othman.elmajid@example.com';

  -- Get admin role ID
  SELECT id INTO admin_role_id
  FROM roles
  WHERE name = 'admin';

  -- If user exists, assign admin role
  IF user_id IS NOT NULL THEN
    -- Remove any existing roles
    DELETE FROM user_roles WHERE user_id = user_id;
    
    -- Assign admin role
    INSERT INTO user_roles (user_id, role_id)
    VALUES (user_id, admin_role_id)
    ON CONFLICT (user_id, role_id) DO NOTHING;
  END IF;
END $$;