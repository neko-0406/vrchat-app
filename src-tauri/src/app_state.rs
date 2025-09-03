use std::sync::Mutex;

pub struct AppState {
    pub user_name: Mutex<String>,
    pub password: Mutex<String>,
    pub auth_token: Mutex<String>,
    pub request_downtime: Mutex<u64>,
}

impl AppState {
    pub fn new() -> Self {
        // 後で設定ファイルを元に初期化もできるようにする
            AppState {
                user_name: Mutex::new(String::new()),
                password: Mutex::new(String::new()),
                auth_token: Mutex::new(String::new()),
                request_downtime: Mutex::new(0),
            }
    }

    pub fn set_user_name(&self, user_name: String) {
        let mut name = self.user_name.lock().unwrap();
        *name = user_name;
    }
    pub fn set_password(&self, password: String) {
        let mut pass = self.password.lock().unwrap();
        *pass = password;
    }
    pub fn set_auth_token(&self, auth_token: String) {
        let mut token = self.auth_token.lock().unwrap();
        *token = auth_token;
    }
    pub fn set_request_downtime(&self, downtime: u64) {
        let mut dt = self.request_downtime.lock().unwrap();
        *dt = downtime;
    }
}