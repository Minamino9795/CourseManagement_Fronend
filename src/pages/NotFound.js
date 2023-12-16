import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '50px',  }}>
            <img
                src="https://www.google.com/images/errors/robot.png"
                alt="Google Robot"
                style={{ maxWidth: '200px', marginBottom: '20px' }}
            />
            <h1 style={{ fontSize: '2em', color: 'gray', marginBottom: '20px' }}>404. Không tìm thấy trang</h1>
            <p style={{ fontSize: '1.2em', color: 'gray', marginBottom: '30px' }}>
                Xin lỗi, trang bạn đang tìm kiếm không tồn tại.
            </p>
            <Link to="/" style={{ textDecoration: 'none', color: '#1a73e8', fontSize: '1.2em' }}>
                Quay lại trang chủ
            </Link>
        </div>
    );
}

export default NotFound;
