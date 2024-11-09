-- ユーザープロフィールテーブル
CREATE TABLE user_profiles (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  profile_picture_url TEXT,
  bio TEXT,
  privacy_settings TEXT CHECK (privacy_settings IN ('public', 'private', 'friend')) NOT NULL,
  gender TEXT,
  custom_gender TEXT,
  postal_code TEXT,
  address TEXT,
  interests TEXT[],
  occupation TEXT
);

-- 掲示板関連テーブル
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES posts(id),
  user_id UUID REFERENCES auth.users(id),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- イベント関連テーブル
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT NOT NULL,
  details TEXT,
  organizer_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE event_participants (
  participant_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES events(id),
  user_id UUID REFERENCES auth.users(id),
  participation_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 通知関連テーブル
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  type TEXT CHECK (type IN ('comment', 'eventReminder', 'other')) NOT NULL,
  message TEXT NOT NULL,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  status TEXT CHECK (status IN ('unread', 'read')) NOT NULL
);

-- 施設関連テーブル
CREATE TABLE facilities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  max_reservations INTEGER NOT NULL
);

-- 予約関連テーブル
CREATE TABLE reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  facility_id UUID REFERENCES facilities(id),
  reservation_date TIMESTAMP WITH TIME ZONE NOT NULL,
  time_slot TEXT NOT NULL,
  status TEXT CHECK (status IN ('confirmed', 'pending', 'cancelled')) NOT NULL
);

-- コミュニティ関連テーブル
CREATE TABLE communities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  privacy_setting TEXT CHECK (privacy_setting IN ('public', 'private')) NOT NULL,
  creator_id UUID REFERENCES auth.users(id)
);

CREATE TABLE community_members (
  member_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  community_id UUID REFERENCES communities(id),
  user_id UUID REFERENCES auth.users(id),
  role TEXT CHECK (role IN ('admin', 'member')) NOT NULL
);

-- 友達関連テーブル
CREATE TABLE friendships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  friend_id UUID REFERENCES auth.users(id),
  status TEXT CHECK (status IN ('pending', 'accepted', 'declined')) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ユーザー間のブロック関連テーブル
CREATE TABLE blocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  blocked_user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ユーザー間のメッセージ関連テーブル
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id UUID REFERENCES auth.users(id),
  receiver_id UUID REFERENCES auth.users(id),
  content TEXT NOT NULL,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  status TEXT CHECK (status IN ('sent', 'delivered', 'read')) NOT NULL
);