use std::sync::Mutex;

use vrchatapi::apis::{self, authentication_api::get_current_user};

pub struct VRChatAPI {
    pub user_name: Mutex<String>,
    pub password: Mutex<String>,
    pub auth_token: Mutex<String>,
    pub request_downtime: Mutex<u64>,
}

impl VRChatAPI {
    // 後で実装
    pub fn login() {}
}
