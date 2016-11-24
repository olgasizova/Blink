DROP TABLE IF EXISTS blink_user_profiles CASCADE;

CREATE TABLE blink_user_profiles (
  email_id VARCHAR(50) PRIMARY KEY,
  token_id TEXT,
  bday VARCHAR(10) DEFAULT 'none'
);
