DROP TABLE IF EXISTS user_profiles CASCADE;

CREATE TABLE user_profiles (
  id VARCHAR(50) PRIMARY KEY,
  session_id TEXT,
  bday VARCHAR(10) DEFAULT 'none',
  profile_img VARCHAR(100)
);
