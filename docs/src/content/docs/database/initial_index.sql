-- user_profiles
CREATE INDEX idx_user_profiles_user_id ON user_profiles(user_id);

-- posts
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_created_at ON posts(created_at);

-- comments
CREATE INDEX idx_comments_post_id ON comments(post_id);
CREATE INDEX idx_comments_user_id ON comments(user_id);
CREATE INDEX idx_comments_created_at ON comments(created_at);

-- events
CREATE INDEX idx_events_organizer_id ON events(organizer_id);
CREATE INDEX idx_events_date ON events(date);

-- event_participants
CREATE INDEX idx_event_participants_event_id ON event_participants(event_id);
CREATE INDEX idx_event_participants_user_id ON event_participants(user_id);

-- notifications
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_sent_at ON notifications(sent_at);

-- reservations
CREATE INDEX idx_reservations_user_id ON reservations(user_id);
CREATE INDEX idx_reservations_facility_id ON reservations(facility_id);
CREATE INDEX idx_reservations_reservation_date ON reservations(reservation_date);

-- communities
CREATE INDEX idx_communities_creator_id ON communities(creator_id);

-- community_members
CREATE INDEX idx_community_members_community_id ON community_members(community_id);
CREATE INDEX idx_community_members_user_id ON community_members(user_id);

-- friendships
CREATE INDEX idx_friendships_user_id ON friendships(user_id);
CREATE INDEX idx_friendships_friend_id ON friendships(friend_id);

-- blocks
CREATE INDEX idx_blocks_user_id ON blocks(user_id);
CREATE INDEX idx_blocks_blocked_user_id ON blocks(blocked_user_id);

-- messages
CREATE INDEX idx_messages_sender_id ON messages(sender_id);
CREATE INDEX idx_messages_receiver_id ON messages(receiver_id);
CREATE INDEX idx_messages_sent_at ON messages(sent_at);