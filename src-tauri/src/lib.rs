mod vrchatapi;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .manage(app_state::AppState::new())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            set_user_name,
            set_password,
            set_auth_token
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// AppState関数の定義
#[tauri::command]
fn set_user_name(state: tauri::State<'_, app_state::AppState>, user_name: String) {
    state.set_user_name(user_name);
}
#[tauri::command]
fn set_password(state: tauri::State<'_, app_state::AppState>, password: String) {
    state.set_password(password);
}
#[tauri::command]
fn set_auth_token(state: tauri::State<'_, app_state::AppState>, auth_token: String) {
    state.set_auth_token(auth_token);
}
