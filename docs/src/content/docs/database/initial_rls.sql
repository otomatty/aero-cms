-- RLSを有効にする
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE communities ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE friendships ENABLE ROW LEVEL SECURITY;
ALTER TABLE blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- user_profiles
CREATE POLICY "ユーザーは自分のプロフィールを閲覧可能" ON user_profiles
    FOR SELECT
    USING (user_id = auth.uid());

CREATE POLICY "ユーザーは自分のプロフィールを更新可能" ON user_profiles
    FOR UPDATE
    USING (user_id = auth.uid());

-- posts
CREATE POLICY "ユーザーは自分の投稿を閲覧可能" ON posts
    FOR SELECT
    USING (user_id = auth.uid());

CREATE POLICY "ユーザーは自分の投稿を更新可能" ON posts
    FOR UPDATE
    USING (user_id = auth.uid());

-- comments
CREATE POLICY "ユーザーは自分のコメントを閲覧可能" ON comments
    FOR SELECT
    USING (user_id = auth.uid());

CREATE POLICY "ユーザーは自分のコメントを更新可能" ON comments
    FOR UPDATE
    USING (user_id = auth.uid());

-- events
CREATE POLICY "ユーザーは自分が参加するイベントを閲覧可能" ON events
    FOR SELECT
    USING (
        auth.uid() IN (
            SELECT user_id 
            FROM event_participants 
            WHERE event_id = events.id
        )
    );

CREATE POLICY "イベント主催者はイベントを更新可能" ON events
    FOR UPDATE
    USING (organizer_id = auth.uid());

-- event_participants
CREATE POLICY "ユーザーは自分が参加しているイベントの参加情報を閲覧可能" ON event_participants
    FOR SELECT
    USING (user_id = auth.uid());

-- notifications
CREATE POLICY "ユーザーは自分の通知を閲覧可能" ON notifications
    FOR SELECT
    USING (user_id = auth.uid());

-- reservations
CREATE POLICY "ユーザーは自分の予約を閲覧可能" ON reservations
    FOR SELECT
    USING (user_id = auth.uid());

CREATE POLICY "ユーザーは自分の予約を更新可能" ON reservations
    FOR UPDATE
    USING (user_id = auth.uid());

-- communities
CREATE POLICY "ユーザーは自分が所属するコミュニティを閲覧可能" ON communities
    FOR SELECT
    USING (
        auth.uid() IN (
            SELECT user_id 
            FROM community_members 
            WHERE community_id = communities.id
        )
    );

-- community_members
CREATE POLICY "コミュニティ管理者はメンバーを管理可能" ON community_members
    FOR UPDATE
    USING (
        auth.uid() IN (
            SELECT user_id 
            FROM community_members 
            WHERE community_id = community_members.community_id 
            AND role = 'admin'
        )
    );

-- friendships
CREATE POLICY "ユーザーは自分の友達関係を閲覧可能" ON friendships
    FOR SELECT
    USING (user_id = auth.uid() OR friend_id = auth.uid());

CREATE POLICY "ユーザーは自分の友達関係を更新可能" ON friendships
    FOR UPDATE
    USING (user_id = auth.uid() OR friend_id = auth.uid());

-- blocks
CREATE POLICY "ユーザーは自分がブロックしたユーザーを閲覧可能" ON blocks
    FOR SELECT
    USING (user_id = auth.uid());

-- messages
CREATE POLICY "ユーザーは自分が送信したメッセージを閲覧可能" ON messages
    FOR SELECT
    USING (sender_id = auth.uid());

CREATE POLICY "ユーザーは自分が受信したメッセージを閲覧可能" ON messages
    FOR SELECT
    USING (receiver_id = auth.uid());