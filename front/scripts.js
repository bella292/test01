// 백엔드 URL 설정
const backendUrl = 'https://myapp.cloudtype.app';

// 회원가입 이벤트 핸들러
document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    try {
        const response = await fetch(`${backendUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const message = await response.text();
            document.getElementById('message').innerText = message;
        } else {
            const errorMessage = await response.text();
            document.getElementById('message').innerText = `Registration failed: ${errorMessage}`;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('message').innerText = 'Registration failed: Network error';
    }
});

// 로그인 이벤트 핸들러
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch(`${backendUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const message = await response.text();
            document.getElementById('message').innerText = message;
            // 로그인 성공 시 추가 로직을 여기에 작성
        } else {
            const errorMessage = await response.text();
            document.getElementById('message').innerText = `Login failed: ${errorMessage}`;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('message').innerText = 'Login failed: Network error';
    }
});
