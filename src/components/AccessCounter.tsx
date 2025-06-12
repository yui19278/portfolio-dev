import React, { useState, useEffect } from 'react';
import './AccessCounter.css';

const API_BASE_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:9000';

export default function AccessCounter() {
    const [count, setCount] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                // URL
                const response = await fetch(`${API_BASE_URL}/api/counter/increment`, {
                    method: 'POST',
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setCount(data.count);
            } catch (e) {
                console.error('Failed to fetch access count:', e);
                setError('??????????????????');
            }
        };

        fetchCount();
    }, []);

    return (
        <div className="access-counter">
            {error && <p className="error-message">{error}</p>}
            {count !== null && <p>???????? {count} ???</p>}
        </div>
    );
}
