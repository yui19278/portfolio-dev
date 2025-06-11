import React, { useState, useEffect } from 'react';
import './AccessCounter.css';

export default function AccessCounter() {
    const [count, setCount] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                const response = await fetch('http://localhost:9000/api/counter/increment', {
                    method: 'POST',
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setCount(data.count);
            } catch (e) {
                console.error('Failed to fetch access count:', e);
                setError('カウンターの読み込みに失敗しました。');
            }
        };

        fetchCount();
    }, []);

    return (
        <div className="access-counter">
            {error && <p className="error-message">{error}</p>}
            {count !== null && <p>現在の訪問者数は {count} 人です</p>}
        </div>
    );
}